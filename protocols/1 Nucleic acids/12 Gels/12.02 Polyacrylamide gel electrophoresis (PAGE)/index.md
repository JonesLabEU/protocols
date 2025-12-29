# Polyacrylamide gel electrophoresis (PAGE)
## Overview
Polyacrylamide is formed from the monomers of acrylamide and bis-acrylamide, catalyzed by TEMED that utilized free radicals from ammonium persulphate (APS). Bis-acrylamide allows the gel to become porous due to the formation of cross-links between long acrylamide strands.

A good gel should look like this:
![|400](assets/20250508-154539-SYBR%20Gold-B.jpg)
## Gel preparation (20 min)
1. **Prepare the gel holder**
	- Clean with 70% ethanol to remove stains and dust. Pour cleaning might result in air bubbles in the final gel.
	- Find the side of the smaller glass that sticks well to the bigger glass.
	- Place the two glass pieces into the gel mold. Make sure the bottoms of the two pieces are perfectly aligned such that you almost cannot feel an edge between them when scratching with your nail.
	- Fill up with water.
	- Wait for a few minutes to see if there are no leaks.
	- One gel requires 5.6 mL of gel solution in the Bio-Rad Mini-PROTEAN system.
2. Decide on the acrylamide concentration ([Petrov et al., 2013](https://doi.org/10.1016/B978-0-12-420037-1.00017-8)):

| %   | Range    | Xylene cyanol co-migrates with | Bromophenol blue co-migrates with |
| --- | -------- | ------------------------------ | --------------------------------- |
| 3.5 | 500-2000 | 460                            | 100                               |
| 5   | 80-500   | 260                            | 65                                |
| 8   | 60-400   | 160                            | 45                                |
| 12  | 40-200   | 70                             | 20                                |
| 15  | 25-150   | 60                             | 15                                |
| 20  | 6-100    | 45                             | 12                                |

3. **Mix** the water, TBE, and urea in a small conical tube – **except APS and TEMED** – in room temperature:
	- Each gel needs 6.8 mL (8.6 x 6.7 cm)
	- Make 10 mL for a single gel and 15 mL for two gels
	- To facilitate urea solution, heat up in a microwave for 10-20 s, then add a magnetic spinner and spin (at room temperature) until fully dissolved. Alternatively, do not heat it but leave stirring for 15 min until fully dissolved.

|                                   | Calculation                    | Native  | Urea    |
| --------------------------------- | ------------------------------ | ------- | ------- |
| **Gel %**                         | **P%**                         | **12%** | **12%** |
| Milli-Q (mL)                      | Native: .6 x V<br>Urea: .2 x V | 4.5     | 1.5     |
| 10X TBE (mL)                      | V / 10                         | .75     | .75     |
| Urea, 7M (g)                      | V x .42                        |         | 3.15    |
| 40% acrylamide/bis (29:1; mL)     | P x V / 40                     | 2.25    | 2.25    |
| 10% ammonium persulfate (APS; μL) | V x 20/3                       | 50      | 50      |
| TEMED (μL)                        | V                              | 7.5     | 7.5     |
| **Total volume (mL)**             | **V**                          | **7.5** | **7.5** |

4. Add acrylamide.
	- **Acrylamide is very poisonous!** Avoid contact with skin, try not to breath it in, and keep the lid closed at all times.
	- At this point, you can store the prepared solution at +4C for at least a month.
5. **Quickly add APS and TEMED** as the reaction (solidification) starts immediately, and mix the solution by quickly taking it up and down the pipette
	- TEMED accelerates the rate of formation of free radicals from APS, which then catalyze polymerization, so it's best to have the two pipettes prepared ahead of time to pour the liquids quickly.
	- Polymerization reaction is exothermic, so it can be slowed down by keeping reagents on ice. However, low temperatures will cause porous, inelastic gels.
	- BioRad recommends making fresh APS solution every day for best performance and replacing TEMED every three months because it is subject to oxidation.
6. **Fill up the gel mold** by slowly releasing the mixture into the right side of the mold to avoid bubbles.
7. **Add comb and pour a bit on top** to make sure the mold is full
8. **Wait for ~30 min for the gel to solidify** (check the leftover gel in the conical tube to see if it has already solidified)
	- For better results, wait for 2 hours to reduce the amount of polyacrylamide debris that may be hard to wash out. For best results, leave overnight at room temperature.
	- For longer storage, store native gels flat in the fridge at 4°C. Do not freeze. Wrap gels tightly in plastic wrap with comb still inserted (the comb helps to keep the wells clean without extra polyacrylamide polymerizing there). Use within a week.
## Running
1. **Take out the comb**.
2. **Place the mold into the tray.**
	- Must use either 2 or 4 gels at a time, so add a fake plastic gel (buffer dam) if needed.
	- Can't run a native and a denaturing gel in the same tank.
	- Make sure the orientation of this tray matches the polarity of the lid.
	- The lines of the thin glass must be perfectly aligned with the lines on the green rubber brim. Even better to slightly push against the rubber lines.
3. Fill up the tray with the molds with **1X TBE**
4. **Pour 1X TBE** to the (2 or 4 gel) mark in the main tray
	- 700 ml for 2 gels; 1000 ml for 4 gels
5. **Pre-run** the gel:
	- **Native:** 10 min at 100V.
	- **Denaturing:** 30 min at 200V.
6. **Prepare samples**. Make sure to use most wells as otherwise bands might get distorted.
	- **2.5 uL of DNA or RNA** + equal volume of Gel Loading Buffer II or RNA Loading Dye
	- **2.5 uL ladder:** [index](../12.05%20Ladders/index.md)
7. For **denaturing** gels, **heat** the samples and the ladders as specified in [index](../12.04%20Loading%20dyes/index.md)
8. **Flush wells** using a syringe: aspire buffer from the large chamber and squirt it into each well in order to wash residual pieces of the gel and urea.
9. Run at 20 V/cm:
	- **Native: 35 min at 200 V**
	- **Denaturing: 35 min at 200 V.** Bromophenol blue migrates with ~20 nt and will be at very bottom of the gel
10. Take off the smaller glass using a green plastic wedge, place into water or buffer to rehydrate it, then slice with the green wedge by the sides of the gel and carefully take if off.
11. Proceed to [index](../12.06%20Staining/index.md)

## Troubleshooting
### Uneven bands
See lane 5 with a jagged ladder:
![|400](assets/20250521-144429-SYBR%20Gold.jpg)
Cause: Well bottom is uneven or there is an imperfection in gel homogeneity in that lane (in the gel above it was the latter)
### Narrowing ("fish") or bending lanes
See lanes 2-5 and 8:
![|400](assets/20241125-124349-SYBR%20Gold.jpg)
See the last 3 lanes:
![|400](assets/20250519-143314-SYBR%20Gold.jpg)
Often due to a difference in buffer composition across lanes.
Sometimes can be resolved by running the gel longer.
### Swirly patterns
![|400](assets/20250421-111131-SYBR%20Gold.jpg)
Cause: No destaining done.
## Resources
- [PAGE explanation | Bio-Rad](https://www.bio-rad.com/webroot/web/pdf/lsr/literature/Bulletin_1156.pdf)