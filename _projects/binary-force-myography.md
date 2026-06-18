---
title: Binary Force Myography
year: 2018
period: "2018"
category: miscellaneous
field: sensing
status: done
status_label: completed
lab: undergraduate project
role: design & prototyping
tools: arduino, fsr sensors, 3d printing
keywords: [sensing, hardware, prosthetics, myography]
summary: low-cost gesture sensing from muscle volume
figures:
  - src: ""
    placeholder: "[ wearable band ]"
    caption: "fig. 1 — band"
    labels: "1 fsr array · 2 strap"
    callouts:
      - { x1: 170, y1: 130, x2: 45, y2: 45, label: "1", delay: 0.4 }
      - { x1: 240, y1: 155, x2: 335, y2: 200, label: "2", delay: 0.6 }
  - { src: "", placeholder: "[ gesture map ]", caption: "fig. 2 — gestures" }
featured: true
thumb: ""
---

Force myography infers gestures from the change in limb volume as muscles contract, sensed through force-resistive sensors pressed against the skin — a simpler, lower-cost alternative to electromyography. This project tested how much could be recovered from a deliberately minimal, binary version of the signal.

The result was a low-cost wearable band that classified a useful set of hand gestures from a handful of thresholded sensors.

## Contributions

1. Designed a wearable band housing force-resistive sensors around the forearm.
2. Built a binary thresholding scheme for gesture classification.
3. Evaluated accuracy across a set of common hand gestures.
