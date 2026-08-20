# Restriction digestion
## NEB
### Overview
- [rCutSmart](https://www.neb.com/en/products/b6004-rcutsmart-buffer) buffer (pH 7.9 @ 25C):
	- 50 mM K-acetate  
	- 20 mM Tris-acetate  
	- 10 mM Mg-acetate  
	- 100 µg/ml albumin
### Procedure
1. Add and flick the tube:

| Reagent                         | Amount   |
| ------------------------------- | -------- |
| Template DNA                    | 1 pmol   |
| 10X NEBuffer / rCutSmart Buffer | 5 uL     |
| Restriction enzyme              | 1 uL     |
| Milli-Q                         | to 50 uL |

- 1 ug of template DNA = 100 ng of short DNAs (~100 bp) = 1 pmol.
- Empirically, even 3 pmol are successfully digested when left for 8 hours.
- 1 unit of restriction enzyme will completely digest 1 μg of substrate DNA in a 50 μl reaction in 60 minutes
- 5-10 units of enzyme recommended per 1 ug of DNA 
- Enzyme volume should not exceed 10% of the total reaction volume to prevent star activity

2. Incubate at **37C (enzyme-dependent)*** for **1 hour (enzyme-dependent)**.
	- For Time-Saver Qualified enzymes, can incubate for 5-15 min, but can also leave overnight.
	- Empirically, **smaller fragments** will be successfully digested if left for 8 h.
3. Heat-inactivate at **65-80C for 20 min (temperature is enzyme-dependent)**.
### Resources
- [BsaI-HF®v2](https://www.neb.com/en/products/r3733-bsai-hf-v2)
- [Optimizing Restriction Endonuclease Reactions](https://www.neb.com/en/tools-and-resources/usage-guidelines/optimizing-restriction-endonuclease-reactions)
- [Cleavage Close to the End of DNA Fragments](https://www.neb.com/en/tools-and-resources/usage-guidelines/cleavage-close-to-the-end-of-dna-fragments)
- [Activity of Restriction Enzymes in PCR Buffers](https://www.neb.com/en/tools-and-resources/usage-guidelines/activity-of-restriction-enzymes-in-pcr-buffers)
- [NEBuffer Activity/Performance Chart with Restriction Enzymes (+ incubation and inactivation temperatures)](https://www.neb.com/en/tools-and-resources/usage-guidelines/nebuffer-performance-chart-with-restriction-enzymes)
## ThermoFisher
[BfuI / BciVI](https://assets.thermofisher.com/TFS-Assets/LSG/manuals/MAN0012310_BfuI_BciVI_5_UuL_100U_UG.pdf) 
1. Add:

| Reagent             | Amount (uL)     | Amount if using PCR products directly (uL) |
| ------------------- | --------------- | ------------------------------------------ |
| Nuclease-free water | 16              | 18                                         |
| 10X Buffer BfuI     | 2               | 2                                          |
| DNA                 | 1 (0.5-1 μg/μL) | 10 (~0.1-0.5 μg of DNA)                    |
| BfuI                | 0.5-2           | 1-2                                        |

2. **Mix gently and spin down** for a few seconds.
3. Incubate at **37°C for 1-16 hours**.
	- An excess of BfuI (7.5 U/μg DNA x 1 hour) may result in star activity.
	- 1U is defined as the amount of BfuI required to digest 1 μg of lambda DNA in 1 hour at 37°C in 50 μL of recommended reaction buffer.
	- Bfu concentration is 5 U/uL