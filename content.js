/*
  ================================
  EDIT YOUR PORTFOLIO HERE
  ================================
  You can change the text below without touching the website design.
  Keep quotation marks and commas intact.
  For links, use the full https:// address.
*/

const portfolio = {
  hero: {
    eyebrow: "PROTEIN BIOCHEMISTRY · STRUCTURAL BIOLOGY",
    name: "Sanmitro Bhattacherjee",
    role: "Researcher exploring proteins, biomolecular interactions & molecular mechanisms.",
    summary: "I work at the intersection of protein biochemistry, structural biology and computational approaches, with a growing interest in understanding how molecular structure governs biological function.",
    cv: "CV.pdf" // Put your CV PDF in this folder and name it CV.pdf
  },

  about: {
    title: "From molecules to mechanism.",
    text: "My research journey has moved from molecular biology and recombinant protein work toward a broader interest in structure–function relationships. I enjoy combining experimental biochemistry with structural and computational approaches to ask how proteins interact, how those interactions shape function, and how molecular mechanisms can be understood in greater detail.",
    focus: [
      "Protein biochemistry",
      "Structural biology",
      "Biomolecular interactions",
      "Structure–function relationships",
      "Protein engineering",
      "Computational biology"
    ]
  },

  research: [
    {
      number: "01",
      title: "Protein structure & function",
      text: "Understanding how sequence, conformation and molecular architecture determine protein behaviour and activity."
    },
    {
      number: "02",
      title: "Biomolecular interactions",
      text: "Investigating protein–DNA, protein–protein and protein–ligand interactions at the molecular level."
    },
    {
      number: "03",
      title: "Mechanism & biophysics",
      text: "Connecting biochemical measurements and structural models to explain molecular mechanisms."
    }
  ],

  experience: [
    {
      date: "10/2026 — PRESENT",
      title: "Associate Researcher",
      org: "Provis Biolabs",
      text: "Working on recombinant proteins and enzyme-focused research involving planned protein expression, UF/DF, TFF, purification, formulation, and biochemical activity assays."
    },
    {
date: "02/2026-10/2026",
      title: "Technical Assistant and Team Lead — Nanopore Diagnostics",
      org: "Haystack Analytics",
      text: "Worked across nucleic-acid extraction, nanopore library preparation, sequencing runs and reporting in a pathogen-diagnostics workflow."
    },
    {
date: "02/2025 — 07/2025",
      title: "MSc Researcher",
      org: "University of Sheffield",
      text: "Biochemical and structural characterization of PfHU, a DNA-compacting heat-unstable protein from the Plasmodium falciparum apicoplast."
    }
  ],

  projects: [
    {
      title: "PfHU: biochemical & structural characterization",
      text: "Using apicoplast's indispensablity as the Achilles' heel of the parasite, I dived into characterizing the DNA-compacting protein from the P. falciparum apicoplast using recombinant expression, purification, EMSA, SDS-PAGE and structural bioinformatics.",
      tags: ["Protein purification", "EMSA", "AlphaFold2", "ChimeraX"]
    },
    {
      title: "Recombinant protein purification & formulation",
      text: "As a downstream process and purification researcher, I am managing parallel projects by ideating and improving purification strategies of enzymes and non-enzymatic proteins across endonucleases, serine proteases, hydrolases, metalloenzymes, and so on.",
      tags: ["Q Sepharose", "SP Sepharose", "Phenyl Sepharose", "TFF", "UF/DF"]
    },
    {
      title: "Molecular docking & redocking",
      text: "Self-directed computational work using AutoDock Vina and ChimeraX to reproduce known protein–ligand poses and assess docking performance.",
      tags: ["AutoDock Vina", "ChimeraX", "Docking"]
    },
    {
      title: "Nanopore pathogen diagnostics",
      text: "Managed a team of 3 and showcased more than 91% accuracy in diagnosis across 50+ deployments. As a Lead, I took care of inventory and sample management as well as co-ordinated between stores, production, and laboratories.",
      tags: ["Oxford Nanopore", "Library prep", "Diagnostics"]
    }
  ],

  skills: [
    {
      title: "Protein science",
      items: ["Recombinant protein expression", "Immobilized Metal Ion Affinity Chromatography", "Ion-exchange chromatography", "Hydrophobic-interaction chromatography", "Size Exclusion Chromatography", "Protein formulation"]
    },
    {
      title: "Biochemical analysis",
      items: ["SDS-PAGE", "Western blotting", "EMSA", "A280", "Bradford assay", "Activity assays (HABA, BAEE, BAPNA, GD4K-na)"]
    },
    {
      title: "Structural & computational",
      items: ["AlphaFold2", "ChimeraX", "Jalview", "AutoDock Vina", "Molecular docking", "Introductory NGS analysis", "R / RStudio"]
    },
    {
      title: "Bioprocessing",
      items: ["UF/DF", "TFF", "Buffer exchange", "Protein concentration", "Chromatography optimisation"]
    },
    {
      title: "Molecular biology",
      items: ["PCR / RT-PCR / qPCR", "CRISPR/Cas9", "DNA/RNA Extraction", "Transformation", "Agarose Gel Electrophoresis", "Oxford Nanopore Sequencing", "Cell culture", "ELISA"]
    },
    {
      title: "Research interests",
      items: ["Protein–DNA interactions", "Protein–protein interactions", "Protein–ligand interactions", "Disease mechanisms", "Biophysics", "Therapeutic proteins"]
    }
  ],

  contact: {
    heading: "Let's talk science.",
    text: "I am interested in research opportunities, collaborations and conversations around protein science, structural biology and biomolecular mechanisms.",
    links: [
      { label: "Email", url: "mailto:sanmitrobhattacherjee@gmail.com", copy: "sanmitrobhattacherjee@gmail.com" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/sanmitrobhattacherjee" },
      { label: "GitHub", url: "https://github.com/sanmitrobhattacherjee/sanmitrobhattacherjee.github.io" }
    ]
  },

  footerName: "Sanmitro Bhattacherjee"
};
