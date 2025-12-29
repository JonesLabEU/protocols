# PCR amplification
## Primer design checklist
- **Design tools:**
	- [Benchling](https://www.benchling.com/)
	- [Primer3](https://primer3.org/)
- **Size:** 15-30 nt
- **Melting temperature (Tm)**:
	- The temperature at which half of the oligo molecules are single-stranded (and thus "melted") and half are double-stranded (i.e., annealed to its complementary strand).
	- Depends on sequence length, composition, primer and template concentrations, salts etc.
	- **Difference** between Tm's of the primers should be **less than 5°C**.
	- **Tm calculation:**
		- Shorthand: 2 x (# A's and T's) + 4 x (# C's and G's)
		- Benchling
		- [NEB calculator](https://tmcalculator.neb.com/)
		- [OligoAnalyzer Tool](https://eu.idtdna.com/pages/tools/oligoanalyzer) (requires signup)
	- **Annealing temperature** during thermocycling is set 3-5 C below Tm
- **GC content** should be between 35−80% (ideally **40-60%**) or equivalent to the product being amplified.
- **Delta G** value of any self-dimers, hairpins, and heterodimers should be weaker (more positive) than **−9 kcal/mol**. Positive numbers indicate that the actual secondary structure shown will not form at all.
- Avoid 3' complementarity between the two primers to prevent primer dimers.
- Have your primers end with a G or C, or, if possible, CC, GG, CG, or GC in order to help the end of the primer attach better and help DNA polymerase to initiate complimentary strand synthesis. However, avoid placing more than three G or C nucleotides at the 3’-end to lower the risk of non-specific priming.
## Procedure
1. Mix the following components **on ice** (except for hot-start DNA polymerases) in the order listed below.

| Component                            | Input conc. | Final conc. range | Common final. conc. | Common vol. (uL) | Notes                                                                                                   |
| ------------------------------------ | ----------- | ----------------- | ------------------- | ---------------- | ------------------------------------------------------------------------------------------------------- |
| Milli-Q water                        |             |                   |                     | 32.5             |                                                                                                         |
| 5X Phusion™ Plus Buffer              | 5X          | 1X                | 1X                  | 10               | Provides 1.7 mM MgCl2                                                                                   |
| dNTPs (mM)                           | 10          | .2                | .2                  | 1                |                                                                                                         |
| Forward primer (uM)                  | 10          | .1-1              | .5                  | 2.5              |                                                                                                         |
| Reverse primer (uM)                  | 10          | .1-1              | .5                  | 2.5              |                                                                                                         |
| Template DNA (uM)                    | 1           | .02               | .02                 | 1                | Input amount: 5 amol - 5 fmol, or:<br>- 0.01 - 10 ng of plasmids<br>- 5 - 100 ng of synthetic fragments |
| *5X Phusion™ GC Enhancer (optional)* | 5X          | 1X                | 1X                  |                  | For GC-rich template DNA (>65% of GC)                                                                   |
| Phusion™ Plus DNA Polymerase         | 100X        | 1X                | 1X                  | .5               | **Pipette gently**, as the high glycerol content may lead to pipetting errors                           |
| **Total**                            |             |                   |                     | **50**           |                                                                                                         |

2. *(Optional)* **Control:** No Phusion Plus DNA Polymerase and / or no Template DNA.
	- No or very faint DNA band should be visible on a gel. Helps to distinguish between the input material and a genuine amplification product.
	- Useful when working with a DNA sample for the first time. 
3. Run a thermal cycler program:

/// tab | General parameters

| Stage | Cycle step           | Temperature (°C) | Time         | Cycles | Notes                                                                                 |
| ----- | -------------------- | ---------------- | ------------ | ------ | ------------------------------------------------------------------------------------- |
| 1     | Initial denaturation | 98               | 30 s - 5 min | 1      |                                                                                       |
| 2     | Denaturation         | 98               | 5-10 s       | 25-35  | Fewer cycles lead to less bias (but lower yield too) in the DNA library amplification |
|       | Annealing            | 50-72            | 10-30 s      |        | Compute based on Tm. When 72C, called "2-step PCR".                                   |
|       | Extension            | 72               | 15-90 s      |        |                                                                                       |
| 3     | Final extension      | 72               | 2 min        | 1      |                                                                                       |
|       | Incubation           | 4                | Hold         | Hold   |                                                                                       |
///

/// tab | Common setup for Phusion™ Plus

| Stage | Cycle step           | Temperature (°C) | Time  | Cycles |
| ----- | -------------------- | ---------------- | ----- | ------ |
| 1     | Initial denaturation | 98               | 30 s  | 1      |
| 2     | Denaturation         | 98               | 5 s   | 30     |
|       | Annealing            | 60               | 10 s  |        |
|       | Extension            | 72               | 30 s  |        |
| 3     | Final extension      | 72               | 2 min | 1      |
|       | Incubation           | 4                | Hold  | Hold   |

///
## Expected yield
After 30 cycles, about 100X amplification is expected.

## Resources
- [Phusion™ Plus DNA Polymerase protocol](https://assets.thermofisher.com/TFS-Assets/LSG/manuals/MAN0025053_phusion_plus_UG.pdf)
- [PCR Using Q5® High-Fidelity DNA Polymerase (M0491) \| NEB](https://www.neb.com/en/protocols/2013/12/13/pcr-using-q5-high-fidelity-dna-polymerase-m0491)
- [Guidelines for PCR Optimization with Thermophilic DNA Polymerases \| NEB](https://www.neb.com/en/tools-and-resources/usage-guidelines/guidelines-for-pcr-optimization-with-thermophilic-dna-polymerases)
- [PCR Primer Design Using Primer3](https://binomicalabs.notion.site/PCR-Primer-Design-8f1f888f50a0403a87bdce20e37840f2?v=5d843a3dc7b44c198534ece39f175ad3)
- [DeGenPrime: Primer design from single genes to whole gene families for unlocking the tree of life](https://github.com/raw-lab/DeGenPrime)