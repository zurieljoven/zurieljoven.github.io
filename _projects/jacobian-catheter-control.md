---
title: Jacobian Estimation for Pneumatic Catheter Control
year: 2023
period: "2023"
category: course
field: medical robotics
status: done
status_label: completed
lab: jhu course project
role: modeling & control
tools: python, ros, electromagnetic tracking
keywords: [robotics, controls, catheter, soft robotics]
summary: model-free control of a soft pneumatic catheter
figures:
  - src: ""
    placeholder: "[ catheter setup ]"
    caption: "fig. 1 — testbed"
    labels: "1 catheter · 2 em tracker"
    callouts:
      - { x1: 190, y1: 130, x2: 45, y2: 50, label: "1", delay: 0.4 }
      - { x1: 280, y1: 80, x2: 335, y2: 35, label: "2", delay: 0.6 }
  - { src: "", placeholder: "[ tip tracking ]", caption: "fig. 2 — tip error" }
featured: true
thumb: ""
---

Soft pneumatic catheters are difficult to model analytically because their shape depends on nonlinear material behavior and contact. This project estimated the catheter's Jacobian online — the local mapping from actuation pressures to tip motion — enabling closed-loop control without an explicit physical model.

The empirical Jacobian was updated continuously from observed tip motion, letting the controller adapt as conditions changed.

## Contributions

1. Built the pneumatic actuation and electromagnetic tip-tracking testbed.
2. Implemented online Jacobian estimation from measured tip motion.
3. Demonstrated closed-loop tip positioning under model-free control.
