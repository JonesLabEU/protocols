# Electroporation
## Overview
Cell membrane does not pass current, thus subjecting cells to high voltage temporarily forms large pores in the membrane. Their closure is delayed at 0C. The presence lower sample resistance and might impede transformation efficiency or lead to arcing.
## Electrocompetent cell preparation
**Principle:** removing ions from the solution, such that the cells become better conductors of current than the solution, thus DNA is pulled inside the cells.

1. Prepare the following (separately) and autoclave (reserve in advance): ^t5do5o
	1. 500 mL LB medium (12.5 g LB powder + 500 mL water)
	2. 500 mL dH2O
	3. 300 mL 10% glycerol (30 mL glycerol + 270 mL water)
	4. 2.5 L flask (covered with aluminum foil)
	5. 20 1.5 mL Eppendorfs
2. *(Optional)* Add antibiotic to LB medium (ratio 1 mL medium to 1 uL antibiotic).
3. Put 1 mL of LB medium into a cuvette for blanking.
4. Add 4 mL inoculated night culture to a 2.5 L flask, pour the entire LB medium (500 mL), cover, and incubate at 37C in a shaker (200-250 rpm; reserve in advance for ~3 hours).
5. Sterilize 2 conicals (250 mL) with ethanol (from the outside) and under UV for 15 min (with lid open).
6. Grow until OD600 reaches .5-.6  (perform measurements in a sterile environment):
	1. Make the first measurement after 2 h.
	2. Calculate how soon you will reach .5, given the 20-30 min doubling time.
	3. After the predicted time, measure again and estimate the remaining time again.
7. Split cells into the two 500 mL conical falcon tubes (with caps) using scale to match their weight exactly.
	- Place the first conical on a spare adapter and use the same adapter for weighing the second conical.
8. Put the conicals, dH2O and 10% glycerol on ice for 10 min and set centrifuge to cool down to 4C.
9. Repeat:
	1. Centrifuge at 2400 g for 12 min. Discard supernatant to the 2.5 L flask that was used for growing the culture.
	2. Resuspend pellets in each conical tube in the volume listed below:

| Resuspension | Vol. (mL) | Then add (mL) |
| ------------ | --------- | ------------- |
| dH2O         | 2         | 48            |
| dH2O         | 2         | 48            |
| 10% glycerol | 2         | 48            |
| 10% glycerol | 2         | 48            |
| 10% glycerol | .7        |               |

10. Distribute the cells in aliquots of 50 uL and snap-freeze in liquid nitrogen:
	1. Keep aliquots on ice. Put them by the -70C fridge.
	2. Get liquid nitrogen from V132 (requires card) in a dewar.
	3. Throw several tubes at a time into the liquid nitrogen, stir, take them out with long tweezers, place into a lid of your cryo box, and pop into the fridge. Repeat.
	4. Place the dewar on your bench with lid closed and a small hole open for nitrogen to evaporate.
## Transformation efficiency test
1. Thaw 50 uL (one vial) of electrocompetent cells **on ice**.
2. Add 10 pg (**1 uL**) of **pUC19** control DNA.
3. Transform as described in the next section, but use only **250 uL of S.O.C Medium** for cell recovery.
4. Dilute the transformation mix 1:50, that is, take **20 uL** and place in **980 uL of LB Medium**.
5. Plate **30 uL** on **CB plates**.
6. **Transformation efficiency** (# transformants / ug DNA)
	= # colonies / 10 pg DNA x 1000000 pg/ug x (50 uL + 250 uL) total volume / 30 uL plated volume x 50 (dilution factor)
	**= # colonies x 5e7**
## Transformation
### Materials
- [Invitrogen One Shot TOP10 electrocompetent cells](https://www.thermofisher.com/order/catalog/product/C404050)
    - -70C freezer; yellow caps
    - Each tube contains 50 uL
    - Genetically similar to DH10B
- S.O.C. Medium
    - From Lucigen; +4 refrigerator, a box on the top shelf
- 1 mm gap cuvettes
    - BioRad, bottom shelf of +4 refrigerator
### Procedure
1. Prewarm **SOC recovery medium** to **37C.**
2. Sterilize **1 mm gap cuvettes** under UV (30 min) or with ethanol and put them on **ice**.
	If using ethanol, make sure to rinse it thoroughly with MilliQ water.
3. **Thaw** a tube of electrocompetent cells immersed in ice for **2-5 min** and **gently flick** to resuspend them.
	- Competent cells are very fragile!
4. Add **1 uL** (10 pg - 100 ng) of **plasmid DNA** into a vial of E. coli cells and **mix very gently** (DO NOT pipette).
	- DNA should be purified for maximal efficiency.
	- Less plasmid will increase the efficiency but more plasmid will result in more colonies, at a possible cost of having multiple plasmids per cell.
	- If using **Golden Gate** assembly without purification, use .25-.6 uL only to reduce the risk of arcing. For libraries, it is best to purify first, elute with hot water, and transform with as much DNA as possible.
	- Once DNA is added to the cells, electroporation can be carried out immediately. It is not necessary to incubate DNA with cells.
5. **Transfer the mix to a cuvette and place the cap on.**
	- Take care to pour it into the gap in the middle of cuvette.
6. **Remove bubbles by tapping** the cuvette on the table.
	- If you still see bubbles, pop them with a 10 uL pipette tip.
	- Make sure the cuvette is completely dry on the outside.
7. **Send the pulse**.
	- Arcing may occur due to high concentration of salts or air bubbles.
	- Electroporation succeeded of no clicking noise was heard (i.e., if it seems that nothing happened).
	- Settings: 2.0 kV, 200 Omega, and 25 μF. The typical time constant is 4.8 to 5.1 milliseconds
8. **Aseptically add 900 μL of pre-warmed SOC** medium to each vial within **10 seconds**.
	- Use Bunsen burner for sterility.
	- One minute delay can cause a 3-fold reduction in efficiency.
9. **Pipette gently up/down three times** to mix.
10. **Transfer** the mixture to the tube that contained SOC media.
11. Proceed to plating.
## Resources
- [Invitrogen protocol](https://assets.thermofisher.com/TFS-Assets%2FLSG%2Fmanuals%2Foneshottop10_ecomp_man.pdf)
- [NEB notes](https://www.neb.com/en/tools-and-resources/usage-guidelines/electroporation-tips)
- [Improved method for high-efficiency electrotransformation of Escherichia coli with the large BAC plasmids](https://link.springer.com/article/10.1007/s12223-013-0267-1)
- [Room temperature electrocompetent bacterial cells improve DNA transformation and recombineering efficiency \| Scientific Reports](https://www.nature.com/articles/srep24648)
- [Preparation of Electro-Competent Cells](http://www.molbi.de/protocols/competent_cells_electro_v1_0.htm)
- [OpenWetWare](https://openwetware.org/wiki/Electrocompetent_cells)
