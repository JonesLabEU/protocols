# DNA purification
Typically, we purify DNA using DNA/plasmid/gel purification kits. However, in specific situations you may want to use ethanol precipitation or phenol/chloroform extraction.
## Ethanol precipitation
### Overview
Nucleic acids are polar due to a PO4- group along the sugar backbone and thus are hydrophilic. Positively charged salt ions neutralize PO4-, making nucleic acids much less hydrophilic, resulting in precipitation. Moreover, ethanol increases electrostatic interactions between PO4- and salt ions (due to a lower dielectric constant).

**Salt choices:**
- DNA:
	- Regular and large: **3 M Na acetate**
	- Small and low concentration: also add **MgCl2** (final concentration: .01 M)
	- With SDS: NaCl because it keeps SDS soluble
	- After restriction digestion: also add 1/20 of DNA sample volume of .5 M EDTA
- RNA:
	- **LiCl** – note that Cl- inhibits DNA polymerase and protein synthesis
	- **5 M NH4 acetate to remove NTPs/dNTPs** (e.g., after in vitro transcription), but won't work with T4 polynucleotide kinase reactions
	- Adding 20 ng of glycogen can help for small amounts of RNA
### Procedure
1. Mix the following:

| Component    | Vol. formula | Vol. example (uL) | Notes                  |
| ------------ | ------------ | ----------------- | ---------------------- |
| DNA / RNA    | V            | 45                |                        |
| Salt         | V / 10       | 4.5               | Typically Na acetate   |
| 100% ethanol | 2 x V        | 90                |                        |
| Glycogen     | 1 uL         | 1                 | Helps visualize pellet |

2. **Chill at -20C** overnight.
	- Larger DNA (e.g, a plasmid) will precipitate faster (30 min might suffice), but short fragments will benefit for an overnight or even over the weekend cooling.
3. Precool a microcentrifuge to 4C and **pellet** for **15-30 min at top speed**.
4. Transfer to **ice** and **discard** nearly all **supernatant** with a pipette, angled at the opposite wall to the pellet.
	- If the amount small, you may not see anything pelleting. Glycogen helps visualize the pellet.
	- Be extra careful not to get any of the pellet into pipette. Best practice is to keep **tilting** the tube while withdrawing the supernatant, such that by the end the tube is lying horizontally and all little droplets are collected.
	- Alway **keep the tube cold**. Hold it at the top so that the pellet doesn't dissolve by warming up from your hands.
5. **Washing:** Add ~100 uL of **70% cold ethanol** to wash it, **do not vortex**, centrifuge it at top speed for **10-20 min**, transfer to ice, and discard most of supernatant.
	- Optionally, **repeat** washing again.
6. Work with pipette to aspire as much of the remaining liquid as possible while gradually tilting the tube. Then **lie the tube sideways** and leave it **open** for a few minutes for ethanol to evaporate but not too long for the pellet to completely dry.
7. **Resuspend** in dH2O or TE buffer to the desired volume.
### Resources for further optimization
- [Ethanol Precipitation of DNA and RNA: An Authoritative Guide](https://bitesizebio.com/253/the-basics-how-ethanol-precipitation-of-dna-and-rna-works/)
- [Crouse & Amorese, 1987 – Ethanol Precipitation: Ammonium Acetate as an Alternative to Sodium Acetate](https://ccrod.cancer.gov/confluence/download/attachments/156927048/Crouse87.pdf):
	- Longer chilling is in all case better, with overnight being the best for recovery (90% vs 30%)
	- This is especially true for lower sample concentrations.
	- Higher volume is worse: 90% to 40% when going from 20 uL to 200 uL
	- Centrifugation at room temperature for 30 min is better than when cooling and using a shorter duration
	- To remove proteins, first precipitate them with 2.5M (final) NH4 acetate, centrifuge, then add ethanol (2.5 volume) to DNA to precipitate, and wash with 70% ethanol.
	- General recipe:
		- Add 2.5 volume of ethanol and .5 volume of NH4 acetate (7.5M stock)
		- Keep at room temperature overnight
		- Centrifuge for 30 min
		- Wash with 70% ethanol and centrifuge for 15 min
## Phenol/chloroform extraction
### Overview
- Purpose: Remove proteins from samples in order to have samples ready for ethanol precipitations
- Caveats:
	- The sample will contain traces of **phenol** that **inhibits** many enzymatic **reactions**.
	- **Nanodrop** is sensitive to phenol, so you should measure the resulting concentration with **Qubit** instead.
### Procedure
1. Mix sample with an **equal volume** of **phenol/chlorofom** mixture (pH 8), **vortex** and **centrifuge** at max speed for **10 min**.
	- Recommended sample volume: at least 100 uL. If you have less, dilute your sample first.
	- Centrifugation could be as short as 1 min, unless you have a high amount of proteins.
2. Carefully aspirate the **top** (aqueous) phase, and **repeat** the previous step.
	- High salt concentrations might invert the phases. The organic phase (the one you don't need) should be yellow.
	- For small DNA amounts (less than 1 ug), you may treat the organic phase with 100 uL of TE buffer (pH 8).
3. Carefully aspirate the top (aqueous) phase and proceed to the typical ethanol extraction.