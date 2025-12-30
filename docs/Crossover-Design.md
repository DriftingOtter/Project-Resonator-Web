---
sidebar_position: 4
---

# Crossover Design

## Overview

This section will cover the basics of what a passive crossover is, why it is essential for any multi-driver IEM, and how it functions to divide audio frequencies. Keep in mind throughout this guide that this is only to give all the basic information regarding crossovers. The practical steps of designing the circuit in a simulator and selecting specific components will be covered in later sections.

At the end of the day, a well-designed crossover is what allows a collection of individual drivers to perform together as a single, coherent system. Thus, understanding its function is crucial before you start building.

# What is a Crossover?

A 'crossover' is an analogue audio filter circuit. Its job is to take a single, full-range audio signal and split it into multiple separate frequency bands. You can think of it as a traffic controller for sound, directing different frequencies to the specific drivers that are designed to handle them.

In our IEMs, we exclusively use **passive crossovers**. This means they are built from components that do not require an external power source to function. They are placed in the signal path between the amplifier (your source) and the drivers themselves.

# Why Are Crossovers Necessary?

As we covered in the 'How To Pick Driver Configurations' section, most individual drivers have a limited range where they perform optimally. Simply wiring all your drivers together in parallel would cause significant problems. Crossovers are necessary for three main reasons:

1.  **Driver Specialization:** A single driver struggles to reproduce the entire human hearing range (20 Hz to 20 kHz) effectively. Crossovers allow us to send only the bass frequencies to a woofer, which is large and designed to move slowly, while sending only the treble frequencies to a tweeter, which is small and designed to move very quickly.
2.  **Preventing Destructive Interference:** When two drivers try to produce the same frequency, their sound waves can interfere and cancel each other out. This creates dips and peaks in the frequency response, resulting in a distorted or "hollow" sound. A crossover minimizes this overlap to ensure a smooth transition between drivers.
3.  **Protecting Drivers:** Delicate high-frequency drivers like BAs or ESTs are not built to handle the high power levels of low-frequency bass signals. Sending them a full-range signal can physically damage or destroy them. A crossover acts as a shield, filtering out these harmful frequencies.

# How Crossovers Work: The Components of Frequency Division

Passive crossovers are built using three types of basic electronic components. By combining them, we can create filters that precisely control which frequencies go to which driver.

![Schematic symbols for a resistor, capacitor, and inductor](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNOz6Do4KSc9omGTjt_5dkVHd9mu8AHs6qjg&s)

* **Capacitors:** A capacitor blocks low-frequency DC signals but allows high-frequency AC signals to pass. In a crossover, this makes them perfect for creating a **high-pass filter**, ensuring only high frequencies reach your tweeter.
* **Inductors:** An inductor is a coil of wire that does the opposite of a capacitor. It allows low frequencies to pass but blocks high frequencies. This makes them the key component in a **low-pass filter** for your woofer or bass driver (not commonly used in IEMs due to their large size).
* **Resistors:** A resistor does not filter frequencies but instead adds resistance to the circuit, reducing the amount of signal (volume) passing through it. This is called **attenuation** and is critical for level-matching drivers that have different sensitivity levels.

# Types of Crossover Filters & Configurations

By combining the components above, we can create different types of filters and arrangements depending on how many drivers we are using.

## Filter "Order" and Slope

The "order" of a filter determines how sharply it cuts off frequencies. This is also called the "slope" and is measured in decibels (dB) per octave.

![Frequnecy Response Graph Of Various Order Filters](https://www.electronics-tutorials.ws/wp-content/uploads/2018/05/filter-fil57.gif)

* **First-Order (6 dB/octave):** The simplest filter, using only one component. It has a very gradual slope, meaning there is more frequency overlap between drivers.
* **Second-Order (12 dB/octave):** A steeper slope that offers better separation between drivers. This is a very common choice in IEMs.
* **Higher-Orders (18 dB/octave or more):** Offer even steeper slopes but are more complex to design and can introduce other issues if not implemented correctly.

## Common Configurations

The arrangement of your filters depends on how many drivers you are dedicating to different frequency ranges.

![Crossover Diagram Of A Speaker Monitor 3-Way Crossover](https://audiojudgement.com/images/2016/05/3way-crossover.jpg)

* **2-Way System:** The most common starting point. This uses a low-pass filter for a woofer and a high-pass filter for a tweeter.
* **3-Way System:** Adds a dedicated mid-range driver. This requires a low-pass for the woofer, a high-pass for the tweeter, and a **band-pass filter** (a combination of a high-pass and low-pass) for the mid-range driver.
* **4-Way (and beyond):** More complex designs can further divide the spectrum. For example, dedicating separate drivers to sub-bass, mid-bass, low-mids, and highs, with each driver getting its own specific filter circuit. This approach values efficiency and specialization over sheer driver count.

In the next sections on **Component Picking** and **Tuning with VituixCAD**, you will learn how to take these concepts and design a functional crossover circuit for your specific drivers using their `.frd` and `.zma` measurement files.

# Citations & Image Credits

1. Kirby Meets Audio, “How to Pick a Crossover Type,” YouTube, Oct. 20, 2017, https://www.youtube.com/watch?v=X5OJgxfIMZo (accessed Sep. 6, 2025).
2. Kirby Meets Audio, “How To Pick A Crossover Type | Step 2 | DIY Speaker Building,” YouTube, Jan. 21, 2021, https://www.youtube.com/watch?v=uXGzA7qBfGY (accessed Sep. 6, 2025).
3. Kirby Meets Audio, “How To Build A Speaker Crossover (AND NOT MESS IT UP!),” YouTube, Nov. 3, 2017, https://www.youtube.com/watch?v=pNj9Bn3S-1E (accessed Sep. 6, 2025).
4. Crinacle, “How hard is it ACTUALLY to start an IEM brand?,” YouTube, May 27, 2023, https://www.youtube.com/watch?v=tCqV3ZRcZ9g (accessed Sep. 6, 2025).
5. Crinacle, “This IEM has been on my wall for 9 years,” YouTube, Nov. 25, 2023, https://www.youtube.com/watch?v=m_UeWAbFR4U (accessed Sep. 6, 2025).
6. Crinacle, “How To Read Headphone Graphs (in 6 EASY levels),” YouTube, Nov. 5, 2022, https://www.youtube.com/watch?v=5dSXPsIJrhc (accessed Sep. 6, 2025).
7. Crinacle, “Is Harman In-Ear BAD? (with Sean Olive),” YouTube, Dec. 2, 2023, https://www.youtube.com/watch?v=kdystdGv7_Q (accessed Sep. 6, 2025).
8. “Resistor, Capacitor, and Inductor Symbols,” Learning about Electronics, https://www.learningaboutelectronics.com/Articles/Resistor-capacitor-and-inductor-symbols.php (accessed Sep. 6, 2025).
9. "Speaker Crossover Design," Audio Judgement, [https://audiojudgement.com/speaker-crossover-design/](https://www.google.com/search?q=https://audiojudgement.com/speaker-crossover-design/) (accessed Sep. 6, 2025).
10. "Basic Electronic Components," Physics and Radio-Electronics, [https://www.physics-and-radio-electronics.com/electronic-devices-and-circuits/passive-components/basicelectroniccomponents.html](https://www.physics-and-radio-electronics.com/electronic-devices-and-circuits/passive-components/basicelectroniccomponents.html) (accessed Sep. 6, 2025).
11. "Passive Crossover Network," Electronics Tutorials, [https://www.electronics-tutorials.ws/filter/filter\_8.html](https://www.electronics-tutorials.ws/filter/filter_8.html) (accessed Sep. 6, 2025).
