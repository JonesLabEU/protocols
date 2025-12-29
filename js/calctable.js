// docs/js/calctable.js

function htmlTableToRaw(table) {
  const rows = Array.from(table.querySelectorAll('tr'))
  return rows.map(row => {
    const cells = Array.from(row.querySelectorAll('th, td'))
    return cells.map(cell => {
      const f = cell.getAttribute('data-formula')
      if (f) return f
      return (cell.textContent || '').trim()
    })
  })
}

function writeResultToTable(table, values) {
  const rows = Array.from(table.querySelectorAll('tr'))
  rows.forEach((row, rIdx) => {
    const cells = Array.from(row.querySelectorAll('th, td'))
    cells.forEach((cell, cIdx) => {
      const v = values[rIdx] && values[rIdx][cIdx]
      const isFormula = cell.getAttribute('data-formula')
      if (isFormula) {
        cell.textContent = v === undefined ? '' : String(v)
      }
    })
  })
}

// ---- minimal spreadsheet engine ----

function evaluateTable(rawTable) {
  const table = rawTable.map(row => row.map(raw => ({ raw: raw, value: undefined, evaluating: false })))
  for (let r = 0; r < table.length; r++) {
    for (let c = 0; c < table[r].length; c++) {
      evaluateCell(table, r, c)
    }
  }
  return table.map(row => row.map(cell => cell.value))
}

function isFormula(raw) {
  return typeof raw === 'string' && raw.trim().startsWith('=')
}

function colLabelToIndex(label) {
  let idx = 0
  const s = label.toLowerCase()
  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i)
    if (code < 97 || code > 122) throw new Error('Invalid column label: ' + label)
    const v = code - 96
    idx = idx * 26 + v
  }
  return idx - 1
}

function parseCellRef(ref) {
  const m = /^([A-Za-z]+)([0-9]+)$/.exec(ref.trim())
  if (!m) throw new Error('Invalid cell reference: ' + ref)
  const col = colLabelToIndex(m[1])
  const row = parseInt(m[2], 10) - 1
  return { row: row, col: col }
}

function expandRange(a, b) {
  const start = parseCellRef(a)
  const end = parseCellRef(b)
  const rowMin = Math.min(start.row, end.row)
  const rowMax = Math.max(start.row, end.row)
  const colMin = Math.min(start.col, end.col)
  const colMax = Math.max(start.col, end.col)
  const coords = []
  for (let r = rowMin; r <= rowMax; r++) {
    for (let c = colMin; c <= colMax; c++) {
      coords.push({ row: r, col: c })
    }
  }
  return coords
}

function getCell(table, row, col) {
  if (row < 0 || col < 0) return undefined
  if (row >= table.length) return undefined
  if (col >= table[row].length) return undefined
  return table[row][col]
}

function toNumber(v) {
  if (typeof v === 'number') return v
  const n = Number(v)
  if (Number.isNaN(n)) throw new Error('Non-numeric value: ' + v)
  return n
}

const cellRefRegex = /\b([A-Za-z]+[0-9]+)\b/g
const sumRangeRegex = /SUM\s*\(\s*([A-Za-z]+[0-9]+)\s*:\s*([A-Za-z]+[0-9]+)\s*\)/gi

function evaluateCell(table, row, col) {
  const cell = getCell(table, row, col)
  if (!cell) throw new Error('Cell out of range at ' + row + ',' + col)

  if (cell.value !== undefined) return cell.value

  const raw = cell.raw

  if (!isFormula(raw)) {
    if (typeof raw === 'number') {
      cell.value = raw
    } else {
      const trimmed = String(raw).trim()
      const n = trimmed === '' ? NaN : Number(trimmed)
      cell.value = Number.isNaN(n) ? trimmed : n
    }
    return cell.value
  }

  if (cell.evaluating) throw new Error('Circular reference detected')

  cell.evaluating = true

  let expr = raw.trim().slice(1)

  expr = expr.replace(sumRangeRegex, function (_m, aRef, bRef) {
    let sum = 0
    const coords = expandRange(aRef, bRef)
    coords.forEach(({ row: r, col: c }) => {
      const v = evaluateCell(table, r, c)
      sum += toNumber(v)
    })
    return String(sum)
  })

  expr = expr.replace(cellRefRegex, function (fullRef) {
    const pos = parseCellRef(fullRef)
    const v = evaluateCell(table, pos.row, pos.col)
    return String(toNumber(v))
  })

  const result = evalArithmetic(expr)

  cell.value = result
  cell.evaluating = false
  return cell.value
}

// tiny arithmetic parser: numbers, + - * /, parentheses

function evalArithmetic(expr) {
  const tokens = tokenize(expr)
  const rpn = toRPN(tokens)
  return evalRPN(rpn)
}

function tokenize(expr) {
  const tokens = []
  const s = expr.replace(/\s+/g, '')
  let i = 0

  while (i < s.length) {
    const ch = s[i]

    if ('+-*/'.indexOf(ch) !== -1) {
      tokens.push({ type: 'op', value: ch })
      i++
      continue
    }

    if (ch === '(' || ch === ')') {
      tokens.push({ type: 'paren', value: ch })
      i++
      continue
    }

    if (/[0-9.]/.test(ch)) {
      let j = i + 1
      while (j < s.length && /[0-9.]/.test(s[j])) j++
      const numStr = s.slice(i, j)
      const n = Number(numStr)
      if (Number.isNaN(n)) throw new Error('Invalid number: ' + numStr)
      tokens.push({ type: 'num', value: n })
      i = j
      continue
    }

    throw new Error('Unexpected character in expression: ' + ch)
  }

  return tokens
}

function toRPN(tokens) {
  const output = []
  const ops = []
  const prec = { '+': 1, '-': 1, '*': 2, '/': 2 }

  tokens.forEach(t => {
    if (t.type === 'num') {
      output.push(t)
    } else if (t.type === 'op') {
      while (
        ops.length &&
        ops[ops.length - 1].type === 'op' &&
        prec[ops[ops.length - 1].value] >= prec[t.value]
      ) {
        output.push(ops.pop())
      }
      ops.push(t)
    } else if (t.type === 'paren') {
      if (t.value === '(') {
        ops.push(t)
      } else {
        while (ops.length && !(ops[ops.length - 1].type === 'paren' && ops[ops.length - 1].value === '(')) {
          output.push(ops.pop())
        }
        if (!ops.length) throw new Error('Mismatched parentheses')
        ops.pop()
      }
    }
  })

  while (ops.length) {
    const op = ops.pop()
    if (op.type === 'paren') throw new Error('Mismatched parentheses')
    output.push(op)
  }

  return output
}

function evalRPN(tokens) {
  const stack = []
  tokens.forEach(t => {
    if (t.type === 'num') {
      stack.push(t.value)
    } else if (t.type === 'op') {
      const b = stack.pop()
      const a = stack.pop()
      if (a === undefined || b === undefined) throw new Error('Invalid expression')
      if (t.value === '+') stack.push(a + b)
      else if (t.value === '-') stack.push(a - b)
      else if (t.value === '*') stack.push(a * b)
      else if (t.value === '/') stack.push(a / b)
    }
  })
  if (stack.length !== 1) throw new Error('Invalid expression')
  return stack[0]
}

// ---- wiring into the page ----

function recalcTable(table) {
  const raw = htmlTableToRaw(table)
  const values = evaluateTable(raw)
  writeResultToTable(table, values)
}

function attachCalcTables() {
  const tables = Array.from(document.querySelectorAll('table.calc-table'))
  tables.forEach(table => {
    recalcTable(table)
    const editableCells = table.querySelectorAll('[data-input="true"]')
    editableCells.forEach(cell => {
      cell.setAttribute('contenteditable', 'true')
      cell.addEventListener('input', function () {
        recalcTable(table)
      })
    })
  })
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', attachCalcTables)
} else {
  attachCalcTables()
}
