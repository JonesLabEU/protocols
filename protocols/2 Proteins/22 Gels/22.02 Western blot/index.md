# Western blot
## Overview
![index 2025-12-12 11.18.22.excalidraw|400](assets/index%202025-12-12%2011.18.22.excalidraw.png){width=50%}

- For the presence and relative abundance of protein.
- Also known as immunoblotting.
- Named as a play of words on Southern blotting (for DNA visualization) that was developed by Edwin Southern, thus spelled with a lowercase "w".
- Main steps:
	1. Transfer protein from a gel to a membrane by applying electric current.
		1. Proteins are coated with SDS and thus have a negative charge.
		2. The membrane goes under the gel, soaked filter paper is placed above and below, and the whole thing is sandwiched between two electrode plates with a positive electrode below.
	2. Block protein on the membrane with BSA or skimmed milk powder to prevent non-specific binding.
	3. Probing:
		1. Treat with primary antibody that specifically binds to your protein.
		2. Treat with a secondary antibody that binds to the primary antibody and allows to visualize it. Sometimes primary antibodies are already ready for imaging though.
	4. Image.
- Recommended to run SDS-PAGE with a prestained protein ladder so that you can see if the band you get is in the correct place.

## Reagents
### 2X 1-step transfer buffer
- 39.02 g Tris-base
- 93.4 g glycine
- 56.16 g tricine
- 10 mL 0.5 M EDTA (pH=8)
- Milli-Q to 1 L
### 10X phosphate-buffered saline (PBS) buffer
- 80.06 g NaCl
- 2.01 g KCl
- 14.2 g Na2HPO4    
- 2.45 g KH2PO4
- Milli-Q to 1 L
### 1X Wash buffer
- 998 mL 1X PBS
- 2 mL Tween-20
### Blocking solution
- 10 mL 1X Wash buffer
- .4 g of skimmed milk powder
## Procedure
1. **Preparation:**
	1. Cut out 4 Wattman paper pieces (10 x 8 cm).
		- Don't place the paper on the table, have the table lines with tissue paper.    
	2. Cut 1 piece of PVDF membrane (9 x 7 cm).
		- Pore size should match the size of your protein. E.g., for 160 kDa SpCas9, the pores should be .45 um. But for small proteins (<15 kDa), use .2 um pore size.
		- Work with gloves on to prevent protein contamination.
	3. Add **20 mL of 2X Transfer Buffer and 20 mL Milli-Q** into an empty gel box.
	4. Add **40 mL of methanol** into another empty gel box.
		- Methanol can be reused, so don't throw it away at the end.
	5. Take out the SDS-PAGE gel, **cut off the stacking part** of it, and **soak the resolving part** in the **1X Transfer buffer**.
		- This step replaces SDS running buffer with the transfer buffer.
2. **Sandwiching:**
	1. Soak the **Wattman** paper in the **1X Transfer buffer** and place two consecutive papers on top of each other, and on a special white plate.
	2. Soak the **PVDF** membrane in **methanol**.
		- Make sure it is submerged and when you take it out, do not let it dry!    
	3. Place the **PVDF** membrane to the **1X Transfer buffer**, make sure it is submerged (it is a bit hydrophobic so will need to rock it constantly), and place it on the Wattman papers.
		- There might be some bubbles on the membrane at this point..
	4. Place the SDS **gel** on the **PVDF** membrane and gently roll out any bubbles with a roller.
	5. Place two more **Wattman** papers soaked in the **1X Transfer buffer**.    
	6. Pour the leftover 1X Transfer buffer on the top of the last paper sheet.
	7. Put on the other (metal) plate, gently press down until you hear a click sound, and place it in the machine. Run on a high molecular weight program for 10 min.
3. **Blocking:**
	1. Transfer the PVDF membrane to a clean box with a **blocking solution** in it and gently shake on a shaker for at least **30 min**.
		- Longer blocking will reduce sensitivity while short blocking will increase background.
	2. Add antibody in the blocking solution with the membrane and leave on the shaker for at least **1 hour**.
		- Choose the antibody based on your target protein. E.g., if your protein contains a StrepTag II, use 2.5 uL StrepTag II Antibody HRP Conjugate, which will result in a 4000X dilution.
		- If you know you will do this again, pour off the blocking solution with the antibody and freeze it in -20C for further use.    
	3. Repeat **3 times**: Pour 10 mL of the  **1X Wash buffer** on the membrane and gently rock for **10 minutes**.
4. **Imaging:**
	1. Add **750 uL** of chemiluminescence reagents ([SuperSignal™ West Femto Maximum Sensitivity Substrate](https://www.thermofisher.com/order/catalog/product/34096)) from each of the two bottles.
	    - This step is performed in front of the imager – do not wait a long time after adding the reagents.
	    - There is no need to rock it for long, just rock it in your hands for 10-15 seconds and then proceed with imaging.
	    - HRP uses H2O2 to oxidize luminol, which then emits blue light (425 nm).
	2. Have a document folder ready (cut it smaller and make it so it could open like a book so you could add the gel inside) and place the membrane inside of the folder before imaging.    
	3. Image first with chemiluminescent setting on a dark plate for blotting, then image with the "fast blast" (white light) setting to get the ladder.
		- You may need to manually choose the exposure instead of the auto-exposure. Go for the highest or second-to-highest resolution.