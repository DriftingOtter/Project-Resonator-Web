---
sidebar_position: 3
---

# FAQ & Troubleshooting

## Frequently Asked Questions

### Is this IEM actually good?
The Project Resonator IEM is designed as a **"Reference Template."** It uses high-quality components (Knowles/Sonion drivers) and targets a widely accepted tuning standard (similar to the DUSK). However, as stated in the project intro, I have not personally mass-produced or verified every single unit. It is a starting point for *you* to refine.

### Can I build this if I don't own a 3D printer?
Yes. You do not need to own the equipment yourself.
* **PCBs:** Can be ordered from JLCPCB or PCBWay.
* **Shells:** Can be printed via 3D printing services (like PCBWay's SLA service or local 3D print shops).
* **Assembly:** You *will* need a soldering iron and some steady hands. That part cannot be outsourced easily.

### Can I change the tuning?
Absolutely. That is the point of this project!
* **To change bass:** Adjust the resistor values on the woofer circuit.
* **To change treble:** Swap the dampers (filters) in the acoustic tubes or adjust the capacitor values on the tweeter branch.
* Check the [Crossover Tuning](/docs/Crossover-Tuning) page to see how component changes affect the graph.

## Troubleshooting Common Issues

### 1. The drivers don't fit in the shell!
* **Cause:** 3D printing tolerances vary between machines. Resin also shrinks slightly when curing.
* **Solution:** Do not force them! You will crack the shell. Use a small round file or sandpaper to gently widen the internal cavity. Next time, adjust the "Offset" tolerance in Fusion 360 (see the [Shell Design](/docs/Shell-Design) guide) and reprint.

### 2. No sound from one side / One driver is silent.
* **Cause:** Usually a "cold solder joint" on the PCB or a burnt driver.
* **Solution:**
    * Check your soldering connections under a magnifying glass. They should be shiny and smooth, not dull or balled up.
    * **Warning:** BA drivers are extremely sensitive to heat. If you held the soldering iron on the pad for more than 2-3 seconds, you might have fried the internal voice coil.

### 3. The IEM sounds "thin" or has no bass.
* **Cause:** A seal leak.
* **Solution:**
    * Check if the shell is fully sealed (no holes in the faceplate glue up).
    * Check if the drivers are sealed into their acoustic tubes. If air escapes around the driver spout instead of going down the tube, you lose all bass pressure. Add a tiny amount of UV resin around the driver snout to seal it.

### 4. High-frequency harshness or "sibilance."
* **Cause:** Unfiltered peaks from the BA drivers.
* **Solution:** You may need to add an acoustic damper (Knowles filter) to the end of the sound tube. These are tiny mesh screens that smooth out treble peaks. Try a "Green" or "White" damper.
