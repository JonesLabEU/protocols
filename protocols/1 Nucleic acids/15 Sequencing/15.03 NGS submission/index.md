# NGS submission
## STEP 1: Preparation
1. Create a folder in `Databases/NGS projects/STS/<date>`.
2. Place (or combine) all Sample tracking sheets there. Make sure all barcodes are distinct.
3. Create and fill out a new entry in `Lists/Sequencing projects`.
4. **Pool** all samples in a single **1.5 mL Lo-Bind tube**.
5. Measure concentration with **Qubit**.
6. Dilute a small amount of the pooled sample to 1 ng/uL and **run Bioanalyzer** ([protocol](../../12%20Gels/12.03%20Bioanalyzer/index.md)).
7. Save the **Bionanalyzer report sheet (PDF)**.
8. Proceed to sample submission. We typically sequence at EMBL GeneCore (detailed below) or (sometimes) in-house.
## STEP 2: Choose Illumina Kit
Choices:
- **Kit:** MiSeq or NextSeq. Depends on what you need based on the choices below.
- **Single or paired-end reads:** We always choose paired-end
- **Read length:** Should cover you sample. If paired-end, coverage doubles, e.g., 2 x 150 nt gives covers up to 300 nt.
- **Number of reads:** We typically aim for 5M reads per sample.
### MiSeq

| Read Size      | 5M  | 25M | 50M  | 100M |
| -------------- | --- | --- | ---- | ---- |
| **1 × 100 bp** |     | 25M | 50M  | 100M |
| **2 × 150 bp** | 10M | 50M | 100M | 200M |
| **2 × 300 bp** | 10M | 50M | 100M |      |
| **2 × 500 bp** |     | 50M |      |      |

[Source](https://www.illumina.com/systems/sequencing-platforms/miseq-i100.html)

### NextSeq

| Read Size      | P1   | P2   | P3   | P4   |
| -------------- | ---- | ---- | ---- | ---- |
| **1 × 50 bp**  |      |      |      | 1.8B |
| **2 × 50 bp**  | 200M | 800M | 2.4B | 3.6B |
| **2 × 100 bp** |      | 800M | 2.4B | 3.6B |
| **2 × 150 bp** | 200M | 800M | 2.4B | 3.6B |
| **2 × 300 bp** | 200M | 800M |      |      |

[Source](https://www.illumina.com/systems/sequencing-platforms/nextseq-1000-2000/specifications.html)
## STEP 3: EMBL GeneCore submission

We submit fully prepared libraries, so that GeneCore only has to run them.
### 1: Fill out the submission form
[EMBL Genomics Core Facility - Sample Submission](https://gc-registration.embl.org/)
1. **User Information:** Listed in our internal [Laboratory Personnel Onboarding Protocol](https://vult.sharepoint.com/:w:/r/sites/JonesLab/Shared%20Documents/General/Lab%20Personnel%20Onboarding%20Protocol.docx?d=waee7950fe4d045988cc84707894f7d2a&csf=1&web=1&e=QPmXG5)
2. **Sequencer Settings:**
	1. Illumina
	2. Illumina sequencing modes: Choose the kit from the table above
	3. Number of sequencing runs: 1
	4. Custom primer: No
	5. PhiX spike-in: Yes, 10%
3. **Common Sample Information:**
	1. User prepared library: Yes
	2. Pool Concentration (ng/uL): Concentration of the pooled sample as measured by Qubit.
	3. Pool Name / Tube Label: Jones Lab, ==date==. Write the same exact name on the pooled sample tube your submitting.
	4. Application: AmpliSeq
	5. Average fragment size:
		1. Look up the peak sizes (nt) and concentrations (pg/uL) in the Bioanalyzer electropherogram that correspond to your samples.
		2. Compute the weighted average of peaks sizes = sum of peak(i) x concentration(i) / sum of all concentrations. 
4. **Multiplexing Information:**
	1. Number of samples (or samples in the pool): Total number of samples you put in the pooled sample.
	2. Should we demultiplex the samples? Yes
	3. What type of index: Single index
	4. Barcode Length: 8
	5. UMI: No
5. **Individual Sample Information:** Paste names and indices from the Sample Tracking Sheet (STS).
6. **Post-Processing Information:**
	1. Alignment required: No
	2. Remarks: If necessary, any other info the GeneCore might need to know, e.g., different length of barcodes
	3. Have you performed QC of the pool via Bioanalyzer or Tapestation? Yes

**Download the completed submission file.**

### 2: Deliver samples
1. Place the sample pool in a **1.5 mL Lo-Bind tube** with an appropriate label (matching the one in the form) and tightly wrap in **parafilm** to avoid any leaking.
2. **Email the designated sample drop-off person** (see the Onboarding document), informing them you’re about to bring the sample and attaching the filled out and signed Packing List that DHL requires. They will contact a DHL courier to come pick up the package from their office. (Typically they show up very quickly, so make sure you have your sample ready.)
3. **Deliver the tube** to the person's office. They’ll take care of the rest and a few days later will send you an invoice.
4. DHL will send you a **tracking number** for the package when they pick it up.

### 3: Submit the submission form
Once you have the DHL tracking number, **write an email** to [solexateam@embl.de](mailto:solexateam@embl.de) (notice that the DHL tracking number must be included in the email, other information is optional):

> Hello,
>
> We are from ==XXXX== group at Vilnius University EMBL Partnership Institute and would like to submit our samples for sequencing. We have barcoded the samples ourselves, there are a total of ==XX== samples that are premixed. We have combined 2 ng of our samples, and we have mixed them all in a lo-bind tube, which we hope should reach you within a week (DHL tracking number: ==XXXXXXXXXX==). The concentration of the sample pool was measured with Qubit (==XX.X== ng/uL). Bioanalyzer traces of the final sample pool and the submission form are attached in this email.
>
> If there are any further questions or information needed, please let us know!
> 
 >Best regards,
 >==XOXOXO==

**Attach:**
- **Filled-out submission form** (from Step 1)
- **Bioanalyzer report sheet** (from Step 3.1)