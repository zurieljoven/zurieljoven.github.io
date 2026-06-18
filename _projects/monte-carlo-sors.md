---
title: Monte Carlo Modeling of SORS
year: 2024
period: "2024 — 2025"
category: research
field: biophotonics
status: done
status_label: completed
lab: barman lab · jhu
role: lead, simulation & theory
tools: python, monte carlo, photon transport
keywords: [SORS, monte carlo, photon transport, raman spectroscopy, simulation]
summary: photon transport simulations characterizing SORS across turbid media
links:
  - { label: "Analyst, 2024", url: "https://pubs.rsc.org/en/content/articlelanding/2024/an/d4an01044b" }
featured: true
thumb: ""
highlights:
  - { type: "paper", label: "Analyst, 2024", url: "https://pubs.rsc.org/en/content/articlelanding/2024/an/d4an01044b" }
  - { type: "award", label: "1st Place — FACSS Student Poster, SciX 2024" }
figures:
  - src: ""
    placeholder: "[ simulation geometry ]"
    caption: "fig. 1 — photon transport"
    labels: "1 source · 2 detector"
    callouts:
      - { x1: 130, y1: 80, x2: 45, y2: 35, label: "1", delay: 0.4 }
      - { x1: 255, y1: 80, x2: 335, y2: 35, label: "2", delay: 0.6 }
  - { src: "", placeholder: "[ depth-offset scaling ]", caption: "fig. 2 — scaling law" }
---

Material-agnostic Monte Carlo simulations characterizing how spatially offset Raman spectroscopy (SORS) behaves across turbid media with varying optical properties. Establishes scaling laws relating source–detector offset to sampling depth, enabling geometry-based instrument design without iterative physical calibration.

Published in *Analyst* (2024), 150th Anniversary Collection.

## Contributions

1. Implemented GPU-accelerated Monte Carlo engine for SORS photon transport.
2. Systematically varied scattering and absorption coefficients across a parameter space spanning tissue-relevant materials.
3. Derived analytical scaling laws for depth prediction and lateral localization as functions of offset geometry.
