---
title: Smart Driver for Orthopedic Screw Extraction
year: 2025
period: "2025 — 2026"
category: course
field: medical robotics
status: done
status_label: completed
lab: mit course project
role: mechanical design & sensing
tools: solidworks, embedded c, load cells
keywords: [robotics, medical devices, hardware, orthopedics]
summary: torque-sensing driver for stripped-screw removal
figures:
  - src: ""
    placeholder: "[ driver assembly ]"
    caption: "fig. 1 — driver"
    labels: "1 chuck · 2 torque sensor"
    callouts:
      - { x1: 190, y1: 195, x2: 60, y2: 215, label: "1", delay: 0.4 }
      - { x1: 190, y1: 100, x2: 335, y2: 45, label: "2", delay: 0.6 }
  - { src: "", placeholder: "[ torque profile ]", caption: "fig. 2 — torque trace" }
featured: true
thumb: ""
---

Removing orthopedic hardware is routinely complicated by stripped or seized screw heads. This project developed a powered driver that senses torque and engagement in real time, alerting the surgeon before a screw head fails and adapting its approach to maximize purchase.

The design pairs a torque-sensing drivetrain with a feedback display, targeting safer and faster hardware extraction.

## Contributions

1. Designed the torque-sensing drivetrain and interchangeable bit interface.
2. Implemented embedded sensing and a real-time engagement display.
3. Validated extraction performance against stripped-screw test fixtures.
