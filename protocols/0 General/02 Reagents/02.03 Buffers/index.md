# Buffers
## HEPES
![|200](../02.01%20Common%20chemicals/assets/image-5.png){width=200}

- 4-(2-hydroxyethyl)-1-piperazineethanesulfonic **acid**
- Zwitterionic sulfonic acid buffering agent
- White crystalline powder 
- Maintains physiological pH in cells
- Must be kept in darkness in the presence of riboflavin to prevent H2O2 formation
- Useful pH range: 2.5-3.5 or 6.8-8.2
- Doesn't bind metal ions, thus a good buffer for enzymes that may be inhibited by metal chelation
- When pH is adjusted with KOH, it is called HEPES-K

## Tris(hydroxymethyl)aminomethane (Tris)
### Overview
![|100](../02.01%20Common%20chemicals/assets/image-6.png){width=150}

- **Base**
- Component in buffers, such as TAE and TBE
- Condensates with aldehydes
- Complexes with metal ions
- Effective pH range: 7.1-9.1
- Inhibits many enzymes either directly or via chelation
### Preparation
To make the solution of a required pH, use Henderson-Hasselbach equation:

$$pH = pK_a + \log_{10} \frac{[\text{Tris base}]}{[\text{Tris-HCl}]}$$

At 25C, pKa = 8.1 (sources vary on the precise value). If the required pH is 8.0, then

$$d = \frac{[\text{Tris base}]}{[\text{Tris-HCl}]} = 10^{pH-pK_a} = 10^{-.1} = .794$$

Since

$$[\text{Tris base}] + [\text{Tris-HCl}] = [\text{Tris buffer}]$$

we can compute Tris base concentration:

$$[\text{Tris base}] = \frac{d}{d + 1} [\text{Tris buffer}] = .460$$

$$[\text{Tris-HCl}] = .540$$

To make 10 mL of 1 M Tris-HCl:

|               | MW (g/mol) | Final conc. (M) | Final vol. (mL) | Amount to weigh (mg) |
| ------------- | ---------- | --------------- | --------------- | -------------------- |
| **Tris base** | 121.136    | .44             | 10              | 533                  |
| **Tris-HCl**  | 157.60     | .56             | 10              | 882.56               |

However, in practice the expected pH is not necessarily observed and needs to be adjusted with HCl or NaOH.

**Alternative**

This method avoids using Tris-HCl but might require a huge amount of HCl.
For 1M solution:
1. Trizma (or Tris) base: 12.1 g in 60 mL water
2. HCl (concentrated): add a drop at a time until the desired pH is reached
3. Fill up to 100 mL

**Resources**

- [Buffer Reference Center](https://www.sigmaaldrich.com/LT/en/technical-documents/protocol/protein-biology/protein-concentration-and-buffer-exchange/buffer-reference-center)
## Tris/EDTA (TE)
- Solubilizes DNA and RNA and protects from degradation
- pH 8
- 10 mM Tris-HCl
- 1 mM EDTA
## Tris/Acetate/EDTA (TAE)
- Tris-acetate buffer provides a pH of 8.3
- EDTA binds metal ions
- Used for dsDNA and RNA separation in electrophoresis
- Linear dsDNA runs faster than TBE
- But lower buffer capacity than TBE

| 50X TAE components                                                                                                                                                            | Amount |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| [Tris base](https://www.sigmaaldrich.com/substance/trizmabase1211477861) (g)                                                                                                  | 242    |
| [Glacial acetic acid](https://www.sigmaaldrich.com/search/glacial-acetic-acid?focus=products&page=1&perpage=30&sort=relevance&term=glacial%20acetic%20acid&type=product) (mL) | 57.1   |
| .5 M [EDTA](https://www.sigmaaldrich.com/substance/ethylenediaminetetraaceticacid2922460004)  (pH 8.0; mL)                                                                    | 100    |
| ddH20 (mL)                                                                                                                                                                    | to 1 L |

## Tris/Borate/EDTA (TBE)
- Similar to TAE, but higher buffer capacity

| 10X TBE components                                                                                        | Amount |
| --------------------------------------------------------------------------------------------------------- | ------ |
| [Tris base](https://www.sigmaaldrich.com/substance/trizmabase1211477861) (g)                              | 108    |
| [Boric acid](https://www.sigmaaldrich.com/substance/boricacid618310043353) (mL)                           | 55     |
| .5M [EDTA](https://www.sigmaaldrich.com/substance/ethylenediaminetetraaceticacid2922460004)  (pH 8.0; mL) | 40     |
| ddH20 (mL)                                                                                                | to 1 L |

## Sodium acetate
- Buffer in mildly acetic range (pH 4-6)

## 10X NucleaSeq
Source: [Massively parallel kinetic profiling of natural and engineered CRISPR nucleases | Nature Biotechnology](https://www.nature.com/articles/s41587-020-0646-5#Sec11)

1. Prepare 980 uL of all ingredients except DTT that is not stable in solution and should be added each time from stock aliquots or fresh preparation.

| Component          | Input vol. (uL) | Stock conc. (M) | Final conc. (M) |
| ------------------ | --------------- | --------------- | --------------- |
| **HEPES** (pH 7.5) | 200             | 1               | 200             |
| **KCl**            | 500             | 3               | 1500            |
| **MgCl2**          | 100             | 1               | 100             |
| **Water**          | 180             |                 |                 |
| **Total**          | **980**         |                 |                 |

2. Check that the mix has a pH around 7.5. If not, adjust with KOH / HCl.
3. Prepare 1 M DTT:
	1. 15.4253 mg DTT (this is a lot of DTT as compared to the amount of water, but it easily dissolves)
	2. 100 uL water
4. To make 50 uL of the 10X buffer with **20 mM DTT final concentration**:
	1. 49 uL buffer
	2. 1 uL DTT
5. Split into aliquots of 50 uL and store at -20C.