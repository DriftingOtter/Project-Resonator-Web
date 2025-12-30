---
sidebar_position: 2
---

# Tools & Software

## Overview 

Before getting started on the IEM itself, we need to first set up your development environment.

This will include the following applications:
1. VituixCAD
2. KiCAD
3. AutoDesk Fusion 360
4. FPGraphTracer
5. Git _(optional, but recommended)_
6. OpenCTM _(optional)_

These programs will allow us to create certain components of an IEM more efficiently and quickly.

Before installing these, let's set up our project directory.

Even though Project Resonator already has a well-organized setup, I suggest creating a separate directory for your IEM. This allows you to always have a backup of the original project files, preventing accidental overwrites and reducing the need to re-download files if you make mistakes or want to experiment with new ideas.

## Project Directory Setup
1. Navigate to a location on your computer where you would like to store the project (most likely in the Documents folder).
2. Create a new directory. Naming it something like `Project_Name_Year` will help with organization and version tracking.
3. Inside this folder, create four additional directories:
    - `Driver_Data`
    - `Crossover_Circuit`
    - `Crossover_PCB`
    - `Shell_Design`

These will serve as organizational 'bins' for your prototyping files and data, making it easier to access them later.

## VituixCAD Installation  
VituixCAD is a loudspeaker simulation program traditionally used to design crossover circuits for desktop and large-size speakers. However, in this project, we will use it to visualize our driver's frequency response and other critical graphs that help analyze driver performance in relation to our tuning.

For this project, I will be using the pre-2.0.0 version of the software as it is easier to use. However, you may opt for the latest version if you prefer. If you're new to simulation software or want to follow this guide step by step, I suggest using the archived version.

1. Go to Internet Archive's [Wayback Machine](https://archive.org/)
2. Paste "https://kimmosaunisto.net/"
3. Locate any version of the software before `2018/04/25`, as this is the last date before the software was updated to v2.0.0
4. Download and install the application

## KiCAD Installation
KiCAD is a schematic capture and PCB design software that we will use to create the actual crossover circuit. The final PCB design can be sent to major PCB manufacturers for production.

To install KiCAD:

1. Visit the [KiCAD Website](https://www.kicad.org/)
2. Click the 'Download' button and follow the installation instructions for your operating system.
3. On the download page, you may see a list of mirrors (servers hosting the KiCAD files). Choose a familiar one or the first available option.
4. Download and install the software.

## AutoDesk Fusion 360 Installation
Fusion 360 is a CAD (Computer-Aided Design) application used for developing, rendering, and stress-testing designs. It is widely used in various fields, from mechanical parts to furniture design. In our case, we will use it to design the IEM shell, which houses all the internal components.

### Installation for Students/Academics
If you are a student, you can get Fusion 360 and other Autodesk software for free through the educational program.

1. Visit the [AutoDesk Education Portal](https://www.autodesk.com/education/edu-software/fusion)
2. Click "Download AutoDesk Fusion"
3. Select your role (e.g., "student")
4. Enter your email and provide the required details to sign up
5. You may need to verify your university enrollment before downloading
6. Once signed in, go to "All Products and Services" and download Fusion 360
7. Install and log in to the software

### Installation for Free Trial
If you do not qualify for the student version, you can use the 30-day free trial.

1. Visit the [Fusion 360 Free Trial](https://www.autodesk.com/products/fusion-360/free-trial)
2. Click "Download Free Trial"
3. Create an AutoDesk account if you don’t have one
4. Follow the installation instructions

## FPGraphTracer Installation
FPGraphTracer, developed by fprawn labs, is a graph-tracing tool that helps extract Frequency Response (`.frd`) and Impedance Response (`.zma`) files from manufacturer-provided spec sheets.

Since individual drivers may have slight frequency and impedance response variations, relying solely on manufacturer data is not ideal. The best way to obtain accurate data is to buy the drivers, solder them, and test them on a measurement coupler. However, this method requires expensive testing equipment, making it impractical for beginners.

Using FPGraphTracer allows us to estimate how the IEM will sound before assembling it. We will extract driver data from manufacturer-provided spec sheets, take a screenshot of the graphs, and trace the frequency and impedance responses within the software.

To install FPGraphTracer:

1. Visit the [FPGraphTracer Website](http://labs.fprawn.com/fpgraphtracer/)
2. Scroll down to the "Download Now" section and install the appropriate version for your OS.
3. A basic usage guide is available under the download section for a quick overview of how the software works.

## Git Installation
Git is a version control system that tracks changes to your project. It stores changes using a 'commit hash'—a unique identifier for each change. This allows you to roll back to previous versions if necessary or create separate branches for different project iterations.

To install Git:

1. Visit the [Git Website](https://git-scm.com/downloads)
2. Select your operating system and follow the installation instructions.
   - If you are using macOS, it may prompt you to install Git via Homebrew. If you don’t have Homebrew installed, visit [Homebrew’s website](https://brew.sh/) and follow the installation guide.

## OpenCTM Installation
OpenCTM is a compression format for 3D geometry. It allows us to compress `.stl` CAD files for IEM shells, making it easier to store and commit them to Git for future reference or sharing on GitHub.

To install OpenCTM:

1. Visit the [OpenCTM Download Page](https://sourceforge.net/projects/openctm/)
2. Click the green "Download" button
3. Install the program normally

## Summary
With the installation of these programs, we now have an efficient setup for building and designing IEMs. We can:
- Gather driver data using **FPGraphTracer**
- Design crossover circuits using **VituixCAD**
- Create PCB designs with **KiCAD**
- Model and refine shell designs in **Fusion 360**

From here, we will delve into the actual creation of IEMs, starting with driver selection and the different types of drivers used in IEMs by major manufacturers. We will also explore their advantages and common configurations.
