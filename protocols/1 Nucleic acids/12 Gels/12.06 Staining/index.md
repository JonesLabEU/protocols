# Staining
## Common dyes
### Bromophenol blue
![|150](../../../0%20General/02%20Reagents/02.01%20Common%20chemicals/assets/image-8.png)

- 3′,3″,5′,5″-tetrabromophenolsulfonphthalein (BPB)
- Below pH 3.5: yellow
- Above pH 4.6: blue
- Slightly negative
- 1% agarose gel in TAE or TBE: co-migrates with 300 bp DNA
- 2% agarose gel in TAE or TBE: co-migrates with 150 bp DNA
### Xylene cyanol 
![|150](../../../0%20General/02%20Reagents/02.01%20Common%20chemicals/assets/image-9.png)
 
 - 1% agarose gel: co-migrates with 4-5k bp DNA
 - 6% polyacrylamide gel: co-migrates with 140 bp DNA
 - 20% denaturating (7 M urea) PAGE: 25 bp DNA
### Orange G
- Orange in pH < 8
- Red in pH > 9
### SYBR
- [**SYBR SAFE**](https://www.thermofisher.com/dk/en/home/life-science/dna-rna-purification-analysis/nucleic-acid-gel-electrophoresis/dna-stains/sybr-safe.html)
	- Theoretical sensitivity: 500 pg
- [**SYBR™ Gold**](https://www.thermofisher.com/order/catalog/product/S11494)
	- Theoretical sensitivity: 25 pg; **picks up ssDNA too** 
	- Practical sensitivity (clear band): 10 ng
## Procedure
1. **Fill a new tray with some buffer** from the electrophoresis tray and **transfer the gel to it.**
2. **Staining: Add 5 μL of a dye** and wrap the tray with tin foil or place in a covered box (dyes are often light sensitive).
3. Place on a **rocker** for 15-30 min at ~15 rpm.
4. **Destain** the gel by washing it a few times with dH2O and leaving in dH2O for a few minutes.
	- This step improves gel clarity even for SYBR Gold.
5. **Image the gel:**
	- GelDoc device in the 3rd floor lab, or
	- Typhoon in the hallway:
		1. Select Fluorescence tab.
		2. Choose your **dye** from the drop-down menu in the Fluorescence panel (typically, SYBR Gold).
		3. Set **PMT (V) to Auto**.
		4. On the grid, select the area where the gel was placed.
		5. Select the **folder** where you want **images saved**. **Tif format** is sufficient and can be processed with ImageJ (see below). Other formats can be handy for other analysis programs.
		6. Default pixel size is 100 um and is linked to imaging speed. Smaller pixel size results in a better resolution but a longer scan time.
		7. Click **Scan**. You'll hear the machine making noises and a minute later a coarse image will flash on the screen. After that, the final image will start being scanned. For an area A-D 1-3, the whole process takes 6 min.
		8. The image is saved automatically to the destination folder. You may change intensity in the app but your changes do not get saved to the file.
		9. If you cannot see anything or band are faint, note the voltage that was automatically determined (left size of the image), go back to the Fluorescence tab and increase the voltage 100-200 V (up to 1000V), which increases laser's power. Start a new scan. Note that the imaging results will disappear from the program the moment you swtich tabs (but the image is still safely saved and will not get overwritten by a new scene.)
6. **Analyze the image:**
	1. Download and install [ImageJ](https://imagej.net/ij/download.html).
	2. Open the tif image with ImageJ.
	3. Click Process > Math > Log.
	4. Select the region with the tracks of your samples and ladder, starting just above the bottom of a well and ending at the bottom of a well.
	5. Crop: Image > Crop.
	6. Adjust contrast: Image > Adjust > Brightness/Contrast... Select Auto. If the gel still doesn't look good (bands too faint or oversaturated), correct manually.
	7. Click File > Save As > Jpeg...
## Troubleshooting
- Wide streaks instead of narrow bands: sample overloaded
- Large blobs with shades of dye (after imaging):
	- Stain not properly distributed during gel preparation, i.e., it was not stirred into the gel enough
	- Consider destaining by washing the gel a few times with dH2O and then storing it in dH2O (covered from light) for 1 h.