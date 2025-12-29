# Golden Gate cloning

## Design checklist
- Insert's restriction sites located within the primer biding region and sufficiently away from the ends of a fragment: [Cleavage Close to the End of DNA Fragments | NEB](https://www.neb.com/en/tools-and-resources/usage-guidelines/cleavage-close-to-the-end-of-dna-fragments)
- Dropout's restriction sites located within the dropout region
- Non-palindromic overhangs
- Ideally overhangs should be completely different such that no amount of hybridization can occur.
- Dropout region cannot have recognition sites too close to each other because otherwise two restriction enzymes might not be able to fit next to each other and cut simultaneously. Keep at least 10 nt between the recognition sites.
- Restriction enzymes from a list of enzymes cited for use in Golden Gate Assembly: see stared enzymes in [Type IIS Restriction Enzymes | NEB](https://www.neb.com/en/tools-and-resources/selection-charts/type-iis-restriction-enzymes)
- For verification:
	- A unique restriction site in the insert (if possible)
	- A unique restriction site in the dropout
	- A unique restriction site in the backbone
- None of the restriction enzymes should be sensitive to methylation:
	- [NEBuffer Activity/Performance Chart with Restriction Enzymes | NEB](https://www.neb.com/en/tools-and-resources/usage-guidelines/nebuffer-performance-chart-with-restriction-enzymes#notes)
	- [Effects of CpG Methylation on Restriction Enzyme Cleavage | NEB](https://www.neb.com/en/tools-and-resources/usage-guidelines/effects-of-cpg-methylation-on-restriction-enzyme-cleavage)
	- [Dam and Dcm Methylases of E. coli | NEB](https://www.neb.com/en/tools-and-resources/usage-guidelines/dam-and-dcm-methylases-of-e-coli)
- Verify using [NEBridge Golden Gate](https://goldengate.neb.com/)

## Procedure
1. Set up a 10 uL reaction:

| Reagent                     | Stock conc. | Range of final amount | Common final amount | Common vol. (uL) | Notes                                                                               |
| --------------------------- | ----------- | --------------------- | ------------------- | ---------------- | ----------------------------------------------------------------------------------- |
| T4 DNA Ligase Buffer        | 10X         | 1X                    | 1X                  | 1                | Contains DTT, vortex thoroughly                                                     |
| Backbone                    |             | 1-4 nM                | 1.25 nM             |                  | Total DNA <1/2 reaction volume; 2:1 ratio of insert:backbone (could go up to 5:1)   |
| Insert                      |             | 2X backbone           | 2.5 nM              |                  | PCR-amplified and purified (purification can be skipped if cloning a single insert) |
| T4 DNA Ligase               | 400 U/uL    | 20-100 U/uL           | 40 U/uL             | 1                | More ligase => more misligation; best to avoid high concentration stock ligase      |
| Type IIS restriction enzyme | 20 U/uL     | .2-1 U/uL             | 1 U/uL              | .5               | Both enzymes <10% reaction volume                                                   |
| MilliQ                      |             | to 10-20 uL           |                     | to 10            |                                                                                     |

- Control conditions (optional):
	- No insert – for checking the background of false positives
	- Backbone + water only – for checking if the transformation worked at all

2. Incubate in a thermocycler (lid: 75C):
	- **Single** insert: **37C - 5 min**
	- **Library**: **37C - 1 hour**
	- **Multiple** inserts or **non-BsaI**:
		- Initial digestion: **37C - 5 min**
		- Cycle **30 times** (can go up to 60 for diminishing returns):
			- Annealing: **16C - 1-5 min** (choose 5 min to be safe)
			- Digestion: **37C - 1-5 min** (choose 5 min to be safe) – make sure to finish with digestion to avoid backbone re-ligation
3. Incubate at **65-80C (depends on restriction enzyme) for 20 min** to inactivate T4 ligase and restriction enzyme.
4. *(Optional)* Add **fresh restriction enzyme**, incubate at **37C for 5 min** and heat inactivate at **65-80C for 10 min**.
	- Helps to digest any empty backbone that may still remain.
5. Chill for **5 min to 4C** for electroporation or chemical transformation.
6. Verification options:
	1. After ligation: Run agarose gel electrophoresis, comparing the backbone and the ligation product. The ligation product is expected to [show more bands](https://www.thermofisher.com/lt/en/home/brands/thermo-scientific/molecular-biology/molecular-biology-learning-center/molecular-biology-resource-library/spotlight-articles/checking-t4-dna-ligase-activity.html) **Make sure to use an SDS-containing loading dye, not TriTrack.**
	2. After transformation: Perform colony PCR. Either insert or dropout region must have unique primer sites. After PCR, run [index](../../../1%20Nucleic%20acids/12%20Gels/12.01%20Agarose%20gel%20electrophoresis/index.md) to visualize which colonies had the expected sites.
	3. After overnight culture + plasmid purification:
		1. Perform a restriction analysis:
			- Backbone vs plasmid after GG: determines if the size is correct
			- Linearized backbone vs linearized plasmid after GG using backbone restriction site vs linearized plasmid after GG using GG restriction site vs linearized plasmid after GG using dropout restriction site: determines if the insert is present and if there is only 
			- Linearized backbone vs linearized plasmid after GG using GG restriction site
		2. Send off for sequencing
# Resources
- [Golden Gate Assembly Kit | NEB](https://www.neb.com/en/-/media/nebus/files/manuals/manuale1601.pdf?rev=fcd64d2080cf4c27b87c370bc1e6bad1&hash=C490FE2C760F0E3692DCAF047E759F62)
- [Golden Gate (24 Fragment) Assembly Protocol | NEB](https://www.neb.com/en/protocols/2018/06/05/golden-gate-24-fragment-assembly-protocol)
- [13-Fragment Golden Gate Assembly Protocol using SapI | NEB](https://www.neb.com/en/protocols/2021/01/11/13-fragment-golden-gate-assembly-with-sapi)
- [Golden Gate Assembly | Bennett Lab Wiki](https://wiki.rice.edu/confluence/display/BIODESIGN/Golden+Gate+Assembly)