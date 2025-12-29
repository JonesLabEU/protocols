# Concentration measurements
## Nanodrop
### Overview
[Manual](https://assets.thermofisher.com/TFS-Assets/MSD/Product-Guides/M020-nanodrop-eight-spectrophotometer-user-guide.pdf)

- Detection limits for dsDNA/RNA: 2-10,000 ng/uL
- Light is passed through the sample (190-850 nm)
- DNA and RNA absorb UV light at 260 nm
- Baseline correction is applied to offset light scattering in a particular sample. It is measured at 340 nm where no sample-related absorption is expected.
- Extraction reagents such as **guanidine, phenol, and EDTA** contribute absorbance between 230 nm and 280 nm and will affect measurement results if present in samples.
![|400](assets/Screen%20Shot%202024-10-09%20at%2011.27.07.png)
### Procedure
1. Wet a small piece of tissue with Milli-Q water and clean the sensors on the device and on the lid
	- Do not apply too much water as liquid can get into the device and cause damage.
2. Pour 2 uL of the medium in which your sample is suspended (e.g., elution buffer or water) on a sensor.
3. Select the appropriate channel for measurements.
4. Run blanking (click on a water drop symbol).
5. If successful, open the lid, wipe off the sensors (don't forget the sensors on the lid!).
6. Pour 2 uL of your sample on a sensor.
7. Hit run (click on a triangle symbol).
8. Results:
	- Amount in ng/uL
	- A260/A230: DNA to salt ratio should be around 1.8-2.2.
	- A260/A280: DNA to protein ratio should be ~1.8, RNA to protein ratio should be ~2
	- An orange ! is shown if a ratio is out of bounds.
	- An orange A appears if certain contaminants were identified. Click in the icon to see the analysis.

## Qubit
### Specifications
- Highly selective for dsDNA over RNA
- Dye choice depends on the expected range of concentration:
	- [Broad Range](https://assets.thermofisher.com/TFS-Assets/LSG/manuals/Qubit_dsDNA_BR_Assay_UG.pdf): .2 ng/uL to 2000 ng/uL
	- [High Sensitivity](https://assets.thermofisher.com/TFS-Assets/LSG/manuals/Qubit_dsDNA_HS_Assay_UG.pdf): 5 pg/uL to 120 ng/uL
### Procedure
1. Prepare n + 2 lo-bind .5 mL Eppendorfs, where n is the number of samples and 2 are the two standards.
	- The standards and samples are stable for 3 hours if protected from light.
2. Make a master mix with 199 uL x (n + 2) and (n + 2) uL of dye.
3. Add 190 uL to the two tubes for standards + 10 uL of Standard 1 / 10 uL Standard 2.
4. Add 195 uL to the remaining tubes + 5 uL of your sample.
5. Incubate for 2 min to make sure your sample and the standards are room temperature.
6. Measure your standards in the Qubit device.
7. Set the sample size to 5 uL in the Qubit interface and measure each sample.