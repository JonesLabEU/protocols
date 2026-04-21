# Plate reader
## General tips for OD600 measurements
1. Use **flat bottom** 96-well plates; round-bottoms might scatter the light
2. Use a **lid** so that your culture does not evaporate. For long measurement sessions, coat the plate's lid with **20% ethanol + .05% Triton X-100** in order to prevent vapor from condensing on the lid and distorting measurements.
3. Place 100 uL of a blank medium and 100 uL of each of your samples.
4. Samples should start from OD .05-.1.
## Using CLARIOstar Plus
1. Turn on CLARIOstar Plus and open the associated program.
2. Create a new protocol or copy an existing one.
	- Right click on a protocol to edit.
3. If incubation is needed, set it in the program (not protocol).	
4. Insert the plate in the purple tray (click the small purple button on the device or in the program to open and close the tray).
5. Click "Start measurement" in your protocol.
	1. The device start working and most buttons in the program become disabled.
	2. Click on "Current State" to see the data as it is accumulating.
	3. You may pause your run, take out the plate, add something to it, put it back and continue measurements.
	4. You can also stop the run prematurely. It will ask if you want your data saved. Choose "Yes".
6. Open data analysis program (MARS) and export data to csv.
### OD600 protocol
1. In the program, set Temperature: 37C, on.
2. Wavelength settings:
	- Discrete wavelengths
	- No. of wavelengths: 1
	- Wavelength: 600 nm
3. Pathlength correction: Off
4. Well scan:
	- Spiral average
	- Diameter: 4 mm
5. General settings:
	- Setting time: 0.1 s
	- No.of kinetic windows: 1
	- Kinetic window 1:
		- No. of cycles: 300
		- No. of flashes: 8 (how many measurements to make at each time point)
		- Cycle time: 300 s (how often you make measurements)
## Using Tecan Spark
1. Turn on Tecan Spark and the external cooling device.
	- If the cooling device has a "Low fluid" indicator on, notify facility manager.
2. Open Tecan SparkControl application and choose your protocol or create new.
3. In needed, set temperature in the menu bar.
	- It takes about 40 min to go from ambient.
	- You may also include temperature regulation in the protocol.
4. Typical protocol layout:
	1. Choose plate layout and wells that are measured.
		- A custom plate layout can be created under Settings.
	2. Add kinetic loop that dictates which conditions to repeat and how often.
	3. Add measurements: Absorbance, Luminescence, Fluorescence.
	4. Add shaking
		- For instance, choose continuous shaking to keep shaking between measurements.
5. Save the protocol.
6. Hit start.
	- You can observe measurements in real time but often not for all wells.
	- If you hit Stop, the run will stop immediately.
7. Data is exported automatically into an Excel spreadsheet once the run is over.
	1. You can change the settings how data is exported by going to Settings > Data Handling.
	2. There is no option to reexport data in a different format after the run is initiated (or done).
8. Turn of Tecan Spark and the external cooling device.
### OD600 protocol
Kinetic (loop):		
- Kinetic cycles: 300
- Interval time: 00:05:00

Within each cycle:
- Absorbance:
	- Measurement wavelength: 600 nm
	- Number of flashes: 1
	- Settle time: 100 ms
	- Multiple Reads per Well: 3x3 Square (filled), Border 1000 μm
- Shaking:
	- Pattern: Double Orbital
	- Continuous
	- Position (means whether to measure at the incubation chamber or just naywhere where the plate is at the time): Incubation
	- Amplitude: 1 mm
	- Frequency: 270 rpm (automatically set based on amplitude)

## Resources
- [CLARIOstar Plus \| BMG LABTECH](https://www.bmglabtech.com/en/clariostar-plus/)
- [Tecan Spark Manual](https://www.tecan.com/hubfs/Knowledgebase/Manuals/Spark%20series/30246429_IFU_SPARK_REF_ENGLISH_V2_5.pdf?hsLang=en)
- [Tecan SparkControl Manual](https://www.tecan.com/hubfs/Knowledgebase/Manuals/Spark%20series/30245640_IFU_SparkControl_V2_4.pdf?hsLang=en)