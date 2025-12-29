---
jupyter:
  jupytext:
    cell_metadata_filter: -all
    formats: ipynb,md
    main_language: python
    text_representation:
      extension: .md
      format_name: markdown
      format_version: '1.3'
      jupytext_version: 1.17.2
---
# Cas activity
## Reagents
**10X NucleaSeq buffer (50 uL)

**Stop solution:**
- **Proteinase K**: 8 uL
-  500 mM **EDTA**: 32 uL
## Procedure
1. **PCR amplify** (30 cycles, 60C) **target DNA** using one **fluorophore-labelled primer (e.g., Cy5)**:

| Component                                                 | Calculation (uL) | Common vol. (uL) |
| --------------------------------------------------------- | ---------------- | ---------------- |
| Milli-Q water                                             | to V             | 12.4             |
| 5X Phusion™ Plus Buffer                                   | V / 5            | 4                |
| dNTPs (10 mM)                                             | V / 50           | .4               |
| Forward primer: 1.52 - NP1 (10 uM)                        | V / 20           | 1                |
| Reverse primer: 5.19 - NP2 labelled with ATTO647N (10 uM) | V / 20           | 1                |
| Template: 1.59 - Perfect target D (1 uM)                  | 1                | 1                |
| Phusion™ Plus DNA Polymerase                              | V/100            | .2               |
| **Total**                                                 | **V**            | **20**           |

2. **Purify** PCR product and measure DNA concentration using Qubit.
	- Nanodrop is okay if you don't have access to a Qubit.
3. **Dilute DNA** to **20 nM** (will be 10 nM in the final samples) with the 10X NucleaSeq buffer for final volume of 100 uL.
4. **Form the RNP complex:** Use 1:3 enzyme-to-gRNA ratio and **incubate** for **30 min** at room temperature.

| Component            | Vol. (uL)      | Input conc. (uM) | Final conc. (uM) |
| -------------------- | -------------- | ---------------- | ---------------- |
| Milli-Q              | to V           |                  |                  |
| 10X NucleaSeq buffer | V / 10         | 10X              | 1X               |
| R7 gRNA (C12a U)     | 3 x V / [gRNA] | **[gRNA]**       | 3                |
| AsCas12a-TwinStrep   | V / [Cas]      | **[Cas]**        | 1                |
| **Total**            | **V**          |                  |                  |

5. **Serially dilute RNP:**
	- The first sample (ID 1) is just a NucleaSeq buffer. We'll add target DNA to it in Step 6 and this will be a **control condition** where no DNA cleavage will happen.
	- The second sample (DI 2) uses 10 uL (column "Vol. from previous dilution (uL)") of the RNP complex produced in Step 4.
	- All subsequent samples use the indicated volume from the previous RNP dilution, e.g., sample 3 uses 4.5 uL of sample 2.
	- Best practice is to do serial dilutions in a row, starting with the greatest concentration and diluting by similar amounts. 

| ID              | Dilution factor | Vol. from previous dilution (uL) | 1X NucleaseSeq buffer (uL) | Input conc. (nM) | Final conc. (nM) | Conc. in exp. (nM) | DNA:RNP conc. ratio (folds) |
| --------------- | --------------- | -------------------------------- | -------------------------- | ---------------- | ---------------- | ------------------ | --------------------------- |
| 1 (buffer only) | -               |                                  | 10                         |                  |                  |                    | -                           |
| 2               | 1               | 10                               | 5                          | 1000             |                  |                    |                             |
|                 |                 |                                  |                            |                  |                  |                    |                             |
|                 |                 |                                  |                            |                  |                  |                    |                             |
|                 |                 |                                  |                            |                  |                  |                    |                             |
|                 |                 |                                  |                            |                  |                  |                    |                             |
|                 |                 |                                  |                            |                  |                  |                    |                             |
|                 |                 |                                  |                            |                  |                  |                    |                             |


| ID               | Dilution factor | Vol. from previous dilution (uL) | 1X NucleaseSeq buffer (uL) | Input conc. (nM) | Final conc. (nM)      | Conc. in exp. (nM) | DNA:RNP conc. ratio (folds) |
| ---------------- | --------------- | -------------------------------- | -------------------------- | ---------------- | --------------------- | ------------------ | --------------------------- |
| 1 (buffer only)  | -               |                                  | 10                         |                  |                       |                    | -                           |
| 2                | 1               | 10                               | 5                          | 1000             | 666.67                | 333.33             | .03                         |
| 3                | 3.3333          | 4.50                             | 10.50                      | 666.67           | 200.00                | 100.00             | 0.10                        |
| 4                | 10              | 5.00                             | 10.00                      | 200.00           | 66.67                 | 33.33              | 0.3                         |
| 5                | 33.333          | 4.50                             | 10.50                      | 66.67            | 20.00                 | 10.00              | 1.00                        |
| 6                | 100             | 5.00                             | 10.00                      | 20.00            | 6.67                  | 3.33               | 3.00                        |
| 7                | 333.33          | 4.50                             | 10.50                      | 6.67             | 2.00                  | 1.00               | 10.00                       |
| 8                | 1000            | 5.00                             | 10.00                      | 2.00             | 0.67                  | 0.33               | 30.00                       |
| **Total volume** | **15**          |                                  |                            |                  | **DNA conc. in exp.** | **10**             |                             |

6. **Perform cleavage:**
	1. Combine **10 uL of a sample** with **10 uL of target DNA** and **incubate** at 37C for 30 min.
	2. Add **5 uL** of **Stop solution** to each sample.
	3. **Incubate** at 37C for 30 min.
7. **Visualize on a gel:**
	1. 12% native PAGE:
		- Milli-Q: 6 mL
		- 10X TBE: 1 mL
		- 40% acrylamide/bis (29:1): 3 mL
		- 10% APS: 80 uL
		- TEMED: 10 uL
	2. Sample: 5 uL.
	3. Loading dye: 1 uL 6X OrangeG.
	4. Pre-run: 10 min at 100V.
	5. Run: 35 min at 200V – until all OrangeG is out of the gel.
8. **Image the gel**:
	1. Stain with **SYBR Gold** for 15 min.
	2. **Destain** for a few minutes in water.
	3. **Image** with Cy5 and SYBR Gold (two images).
## Analysis
1. **Quantify** the volume of each band on the gel using Image Lab or similar software and compute the fraction of cut DNA.
2. **Plot** the amount of cleavage by plotting RNP:DNA concentration (in folds) vs the fraction of cut DNA.
	- Enzyme activity is the lowest amount of RNP that completely cleaves target DNA. In practice, it is possible that the activity may plateau before full cleavage, in which case we treat the onset of plateau as enzyme's activity.
	- If the activity is above 1, this means that the enzyme exhibits a multi-turnover activity.

```python
import numpy as np
import matplotlib.pyplot as plt
import scipy.optimize

def model_func(x, a, k):
    """Define the shape of the curve to fit.
    Args:
        x (array-like): Input data (RNP concentration).
        a (float): Maximum cleavage efficiency.
        k (float): Rate constant for the exponential decay.
    Returns:
        array-like: Cleavage efficiency based on the model.
    """
    return a * (1 - np.exp(-k / x))

# x: DNA to RNP concentration ratio
# 1 means that DNA concentration is equal to the RNP concentration
# At ratios below 1, the RNP is in excess and the cleavage efficiency is expected to plateau
# At ratios above 1, there is not enough RNP to cleave all the DNA, so the cleavage efficiency is expected to decrease
x_data = np.array([.03, .1, .3, 1, 3, 10, 30])

# y: Cleavage efficiency as determined from a gel: volume of cleaved DNA / total volume (cleaved + uncleaved)
y_data = np.array([.9696, .9641, .9643, .9271, .3909, .0982, .0975])

# Sort data in ascending order as required for curve fitting
sorted_indices = np.argsort(x_data)
x = x_data
y = y_data[sorted_indices]

# Fit the curve
(a, k), pcov = scipy.optimize.curve_fit(model_func, x, y)

# Generate fitted curve using logspace for smooth log-x plotting
x_fit = np.logspace(np.log10(min(x_data)), np.log10(max(x_data)), 500)
y_fit = model_func(x_fit, a, k)

# Plot data and fitted curve
plt.scatter(x, y, label='Data', color='red', zorder=2)
plt.plot(x_fit, y_fit, label=fr'Fit: ${a:.2f} \cdot (1 - e^{{-\frac{{{k:.4f}}}{{x}}}})$', color='black')

# Plot efficiency when RNP concentration is equal to DNA concentration
x_eff = 1
y_eff = model_func(x_eff, a, k)
plt.vlines(x_eff, 0, y_eff, linestyles='dashed', color='steelblue', lw=1)
plt.hlines(y_eff, 0, x_eff, linestyles='dashed', color='steelblue', lw=1)
plt.plot(x_eff, y_eff, 'D', color='steelblue')
# Use a 15% x-offset and a fixed .04 y-offset for labels
plt.text(1.15 * x_eff, y_eff + .04,
         f'Efficiency at equimolar point: {y_eff:.2f}',
         bbox=dict(facecolor='lightsteelblue', edgecolor='none'),
         fontsize=10, ha='left')

# Enzyme activity is the lowest amount of RNP that completely cleaves target DNA
# Analytically, this is the maximal curvature point, after which the efficiency starts dropping noticeably
x_act = .203 * k  # Crude approximation of the elbow point
y_act = model_func(x_act, a, k)
plt.vlines(x_act, 0, y_act, linestyles='dashed', color='salmon', lw=1)
plt.plot(x_act, y_act, 'D', color='salmon')
plt.text(1.2 * x_act, y_act + 0.04, f'Enzyme activity: {x_act * 100:.0f}%',
         bbox=dict(facecolor='salmon', edgecolor='none'),
         fontsize=10, ha='left')

# Plot activity at 50% cleavage efficiency
y_50 = .5  # 50% cleavage efficiency
x_50 = -k / np.log(1 - y_50/a)  # inverse of the model function
plt.vlines(x_50, 0, y_50, linestyles='dashed', color='darkseagreen', lw=1)
plt.hlines(y_50, 0, x_50, linestyles='dashed', color='darkseagreen', lw=1)
plt.plot(x_50, y_50, 'D', color='darkseagreen')
plt.text(1.15 * x_50, y_50 + .04,
         f'Activity at 50% cleavage: {x_50 * 100:.0f}%',
         bbox=dict(facecolor='darkseagreen', edgecolor='none'),
         fontsize=10, ha='left')

plt.xscale('log')
plt.xticks(x, [str(val) for val in x])
plt.ylim(0, 1.05)
plt.xlabel('DNA:RNP concentration (log scale)')
plt.ylabel('Cleavage efficiency')
plt.title('AsCas12a-TwinStrep activity')
plt.legend(loc='lower left')
plt.grid(True, which='both', ls='--', color='lightgray', linewidth=.5, zorder=1)
```
