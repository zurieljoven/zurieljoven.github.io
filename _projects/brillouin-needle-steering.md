---
title: Brillouin Needle Steering
year: 2024
period: "2024 —"
category: research
field: biophotonics × robotics
status: active
status_label: active research
lab: yun lab · mgh
role: instrument & control
tools: optics, ros, matlab
keywords: [brillouin, biophotonics, robotics, needle steering, fiber optics]
summary: stiffness-guided steering of biopsy needles
figures:
  - src: ""
    placeholder: "[ needle tip optics ]"
    caption: "fig. 1 — tip probe"
    labels: "1 fiber · 2 bevel"
    callouts:
      - { x1: 160, y1: 90, x2: 40, y2: 35, label: "1", delay: 0.4 }
      - { x1: 260, y1: 185, x2: 340, y2: 215, label: "2", delay: 0.6 }
  - { src: "", placeholder: "[ steering trajectory ]", caption: "fig. 2 — trajectory" }
featured: true
thumb: ""
highlights:
  - { type: "award", label: "NSF GRFP" }
---

Beveled needles deflect as they advance through tissue. By placing a Brillouin probe at the needle tip, the instrument senses the mechanical properties of tissue immediately ahead and uses that signal to guide steering toward — or around — structures of a given stiffness.

This couples a real-time optical measurement to a steering control loop, turning a passive biopsy needle into a stiffness-aware instrument.

## Contributions

1. Integrated a fiber-coupled Brillouin probe into the needle tip.
2. Modeled the relationship between tip stiffness readings and deflection.
3. Closed the loop between optical sensing and steering actuation.
