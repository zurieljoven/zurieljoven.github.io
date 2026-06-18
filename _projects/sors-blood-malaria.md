---
title: SORS for Noninvasive Blood Analysis
year: 2024
period: "2024 — 2025"
category: research
field: biophotonics
status: done
status_label: completed
lab: barman lab · jhu
role: spectroscopy & instrument design
tools: raman spectroscopy, python, matlab
keywords: [SORS, malaria, noninvasive, blood analysis, raman spectroscopy]
summary: frequency-resolved SORS for detecting malaria-infected flowing blood
figures:
  - src: ""
    placeholder: "[ optical geometry ]"
    caption: "fig. 1 — instrument geometry"
    labels: "1 excitation · 2 collection"
    callouts:
      - { x1: 120, y1: 90, x2: 45, y2: 35, label: "1", delay: 0.4 }
      - { x1: 265, y1: 90, x2: 335, y2: 35, label: "2", delay: 0.6 }
  - { src: "", placeholder: "[ spectral unmixing ]", caption: "fig. 2 — signal decomposition" }
thumb: ""
---

Extends noninvasive Raman spectroscopy to detect Plasmodium-infected red blood cells in flowing whole blood through overlying tissue layers — without needle or lancet. Uses frequency-domain modulation to separate shallow background from deeper blood signal.

## Contributions

1. Designed frequency-resolved SORS geometry for flowing blood phantoms.
2. Built signal processing pipeline to unmix parasitized from healthy cell spectra.
3. Validated detection sensitivity against brightfield and flow cytometry ground truth.
