---
sidebar_position: 3
---

# Driver Selection

## Overview

This section will cover the basics of what 'drivers' are, what types are readily available, and their respective benefits and drawbacks. Keep in mind throughout this guide that this is only to give all the basic information regarding the drivers and what they can do. At the end of the day, the driver selection will be based on what matters most to you in an IEM: bass, clarity, physical footprint, etc.

Thus, reading each driver's operation, benefits, and drawbacks to create your own opinion is crucial.

## What are drivers? What do they do?

'Drivers', also called Transducers in general is any technology that converts any set energy from one form to another. A common example of this is everyday phone screens, which take in DC current and convert that into light --commonly done with LEDs or retina displays.

In IEMs this is often done in a similar fashion but from electricity (DC) to moving waves (sound) that can be picked up by our ears (which are also transducers in themselfs).

## Types of Drivers

Currently, in the IEMs sphere, the most common types of drivers are:

1. Dynamic Drivers (DD)
2. Balenced Armature (BA)
3. Electrostatic Drivers (EST)
4. Plannar Drivers (PD)

5. Piazoeletric Drivers (PED)

Each one of these drivers have their own benefits and drawbacks when used to creat IEMs, but certain drivers are often better for specific applications than others.

## How To Pick Driver Configurations (Context)

As you will see in this section, many of the drivers mentioned (DD, Planar) are often good enough on their own, but others like BA and Electrostatic often require additional drivers—either of the same type or a different variety—to faithfully produce the full human hearing range. This forces us to choose certain variations and combinations of drivers that can complement each other to counteract the shortcomings of others.

When deciding what drivers you are going to use, remember to keep in mind that "more is not often better." You may have already seen this come up in your own research, but many IEM manufacturers choose to cram large quantities of drivers (often BAs) into their IEMs, and still fall short in terms of producing a sound that is palatable to the ear. This is because of a fundamental concept: range vs. loudness level.

Sonic range is a major factor in how well your IEMs can reproduce sound. If you only cover a portion of the sound spectrum, it can cause parts of your audio to go "missing," as the drivers cannot comfortably produce those frequencies due to their physical limitations. This is why, when creating a configuration for your drivers, try your best to include enough drivers to cover the full range of frequencies that will be output by your device—but don't go overboard trying to cover everything.

Currently, drivers often struggle to reproduce frequencies lower than ~10 Hz and higher than ~18 kHz. This is usually not a concern, as most people cannot regularly discern those frequencies in practical applications like music listening—there's usually too much going on to notice something that low or that high. Though, with critical listening and benchmarking, it is possible. The idea is to choose the right amount of Woofers (Regular or Sub), Full-Range, and High-Frequency drivers, so each one only produces the portion of sound it's best capable of producing.

### How Do I Know What Drivers Are Good for Which Scenario?

When deciding on which driver to use for a portion of the frequency spectrum, you can often look up something called a frequency response. These are typically graphs that have frequency on the x-axis and loudness level (dB) on the y-axis. This allows you to see how loudly a driver can reproduce a given frequency. Based on this data, you can determine which portion of the frequency spectrum you want to assign to a specific driver.

You can usually find these by searching something like:
`{Driver Name} Frequency Response Measurements` or `{Driver Name} .frd measurements`.

As you've already seen, I mentioned something called .frd files. These files contain the actual frequency response measurements from a measurement rig (we use a 711 coupler for our project files). They can be imported into a crossover simulator like Vituix to gain a better understanding of how a driver performs in a given environment and alongside other drivers, and how it affects the overall sound.

Additionally, these measurements often come with a .zma file. These are the impedance response files, showing how "hard" it is to operate a driver at certain frequencies. You'll commonly see subwoofer drivers exponentially spike in impedance as they approach midrange or higher frequencies. This happens because higher frequencies require the driver to move back and forth very quickly, while these drivers are designed for slower oscillating frequencies. As a result, they struggle to move fast enough, causing interference between the mechanical energy (the physical membrane trying to move) and the electrical energy (asking it to move). This loss in energy transfer is essentially the AC current's version of resistance—similar to what you see in DC circuits, for those familiar with electrical physics.

In the next section you will learn about crossover design(s) that will better give you context into how to create a configuration of drivers that best suites your purposes.

### Dynamic Drivers (DD)

Dynamic Drivers also called 'DD' drivers for short. Are for our all intent and purposes tiny speakers that contain 3 primary things, a voice coil, a permenant magnaet, and a diaphram.

When electric current that carries the audio signal is sent to the driver it energizes the voice coil that sits inside of the round magnaet and causes the newly created magnetic field of the voice coil to interact with the already present magnetic field of the permenant magnet.

![A cross-section of a Dynamic Driver](https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.tonmeister.ca%2Fwordpress%2Fwp-content%2Fuploads%2Fspkr_cross_section.png&f=1&nofb=1&ipt=da7285687fc75d9852a158ffa43a02affd32d336020cbb36b4bfeb9b4f9dfac2)

this interaction generates a physical force on the voice coil, causing it to move forwards and backwards, this voice coil is usuualy also attached to some kind of membrane or 'cover' that is usually the black rubbery materialyou see from the outside of the speaker that you can see moving.

Though what I just explained is the most common design of drivers, (Electrodynamic Speaker Driver) there are other methods which are often used too, such as Plannar, and Pizeo-eletric which we will talk about later.

#### Application

Dynamic drivers have been around for a long time and thus are one of the cheapest (in most cases) and
most consistent audio transducers in the market. They are often used as single, double, or in mixed hybrid
iems to often produce a large, and 'thumpy' bass sound -- though they can produce most of the human hearing range too.

As previously stated, DD drivers often excel at having excellent cost-to-effective ratios as they produce
a great bass response which allows music to often have more weight and impact when listened to.

### Balenced Armature Drivers (BA)

Balanced Armature Drivers are very similar to DD drivers as talked about previously, but with the major difference coming at the point where the voice coil would be in a traditional DD driver. Unlike a Dynamic
Driver, a BA driver contains a centrally 'balanced' rod also called an 'armature' hence in the name balanced armature, this rod is balanced exactly on the ring of the round magnet, and it is placed exactly in the middle of the magnetic field, as to create a net force of zero on the armature, thus perfectly balancing it.

![A cross-section of a Balenced Armature Driver](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmynewmicrophone.com%2Fwp-content%2Fuploads%2F2020%2F04%2Fmnm_Balanced_Armature_Type_2_With_Labels-1.jpg&f=1&nofb=1&ipt=a16b9f0e807033f9a917c7297923f0f6a5840018439d0da2a7fd72a538789f03)

When electricity is sent to the metal coil wrapped around the armature, it causes the magnet's electromagnetic field to interact with the one created by the coil, which pushes or pulls the armature in reference based on the audion current sent to the driver, this armature then intern pushes and pulls a diaphragm, similar to the membrane in aDD driver which moves the air around the entrance of the spout of the driver which created the
sound you hear.

#### Application

Balanced Armature drivers have been utilized often only really in hearing aids and in-ear monitors as their often small size works well with the tight constraints of an IEM shell. Often used in pairs within a crossover network to work together to produce high-quality audio. BA drivers are often used to produce a more detailed and technical sound, what that means in terms of the audial heading range is that most BA drivers are excellent at producing the mids to high frequency with extreme efficiency, often only falling off at the extreme ends of the spectrum. There have been major improvements to the technology that has allowed some to achieve sound production at even the 10-20hz range, and vice versa on the upper end.

To achieve the best setup for BA driver-based IEMs, often most manufacturers utilize a hybrid/multi-driver setup or muti-count BA driver setup to compensate for the inefficiencies within their drivers to create a fuller and more rich sound.

Commonly this is done via a crossover circuit, which is a Analogue Audio filter circuit that splits a inputed signal into multiple sepereate sections that can be modified and processing via differnt devices or in our case, drivers. this allows certain BA drivers to handle the highs, mids, bass seperatly depending on their frequnecy response.

We will go over what crossover circuits are and how to create them in accordance later in this guide. But in general, IEMs are best used when you require a high degree of clarity within a small physical footprint.

### Electrostatic Drivers (ESTD)

> "Electrostatic drivers, comparitively are more complicated in their operations and thus I will only go over the overarching concept in how they operate."

The configuration of the driver is setup with 2 electrostaticly conductive sheets/grids of metal in a pole/tube shaped shell, in between these conductive grids is placed a ultra-thin membrane film that usually has a high resistivity coating as to spread a constant charge across the entire membraine for low distortion.

![A cross-section of a Electrostatic Driver](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.soundguys.com%2Fwp-content%2Fuploads%2F2018%2F09%2FElectrostatic.gif&f=1&nofb=1&ipt=6bced80e65bb65d53edfcaca154a9f54a130e9c27965aaa397c1af0e56ccc77a)

When a current is sent into the driver, it causes the grids to generate static electricity which in turn pulls and pushes on the membrane in the middle of the two grids, thus creating physical motion to generate sound.

#### Application

EST drivers are often used in high-end audio as they have a very small physical footprint compared to DD drivers and have extreme efficiency in producing audio across a large portion of the audible human hearing range, with minimal to almost no harmonic distortion due to their dual grid system which cancels out any over/undertones resonances.

Furthermore, since EST can produce ultra-high frequencies from 15kHz+ they are often built and set up as tweeters reserved for purely the ultra-high frequencies to deliver the most detail. (Not limited to)*

But a common drawback is that often EST drivers lack the gravity when producing sound at the lower end of the spectrum and thus don't produce as impactful of a 'thump' for the bass, and so as mentioned previously, they are often reserved for a certain frequency range within a hybrid driver configuration which allows them to work in the most effective frequency range whilst being supported by other DD, BA, etc. drivers which help create a 'fuller' sound.

### Plannar Drivers (PD)

Instead of a cone-shaped diaphragm like in Dynamic Drivers or a tiny rod-like in BAs, planar drivers use a large, flat diaphragm—basically, a super-thin film stretched across a frame. This diaphragm is embedded with a pattern of electrical traces or wires (acting like a voice coil).

On both sides of the diaphragm are arrays of magnets arranged in such a way that the entire diaphragm is evenly surrounded by a uniform magnetic field.

![A cross-section of a Plannar Driver](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsoundgearlab.com%2Fwp-content%2Fuploads%2F2018%2F09%2Fdynamic-driver-working-principal.png&f=1&nofb=1&ipt=d690bc626658ea31db439f15b2bfaa7f9ae46f32b0a618549a01425b0d343580)

When the audio signal is passed through the diaphragm's embedded wires, it interacts with the magnetic field and causes the entire flat diaphragm to move back and forth—pushing air across its full surface area to generate sound.

#### Applications

Plannars are often considsered a almost 'middle-ground' in terms of sound signatures, in how their sound is often considered 'very netural', not nessearliy favoring heavily into the bass like dynamic drivers, or too much intothe highs like electrostatic designs.

Thus, they are primarely used for only producing the mids within an IEMs, though it should be said that they canusually produce the entire audible human hearing range, but often are best suited for the mids as the even distribution of the membrane's movement causes the sound to not tetter to either end of the spectrum.

Additionally, due to their low distortion and fast response, are similar to Piezo-electric drivers in that sense that if an unbiased, and fast transient sound is your goal, it can looked into with a hybrid setup to fully support its fall-off points. Lastly, it's important to consider their sheer size. As the drivers are often much larger than something like balanced armature or electrostatic drivers, they often require a larger physical footprint that may be a bottleneck if that is a major goal for your IEM.

### Piezo-Electric Drivers (PED)

Piezoelectric drivers are the most different from the bunch we have discussed till now. They are often considered 'specialists' as long as drivers are considered.

They utilize a physical concept of piezoelectric effect, which in essence is when voltage is applied to a thin metal sheet, it causes it to bend and stretch, thus causing the air around it to move and be pushed as well and thus produce sound.

![A cross-section of a Piezoelectric Driver](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fheadphonesaddict.com%2Fwp-content%2Fuploads%2F2023%2F05%2FPiezoelectric-drvier-structure.jpg&f=1&nofb=1&ipt=e095107bbf34cee610ab46acc5f3734f4d644cf0983daf4b98a1bf969b653f82)

This method of sound producing is often very precices and ultra fast, and thus PED are considered on the fastestin terms of sound producing and can produce super clear sound in the 1-5kHz ranges (when used for audio gear), and can even go into higher frequnecies if used for other applications.

#### Applications

These drivers are often used when ultra-fast sound producing is required, in which harmonic distortion is less of a worry and instead, the generation of sound is more prudent.

As such, the drivers often fall drastically below the 1kHz frequnecy range, and are often setup with hybrid driver configuration and thus, heavily require the assitance of other drivers to deliever a fully compasing soundscape. Addionally, since the sound is often made by a metal strip, if not tuned properly the sound can often be overly harsh, and thus requires careful tunning to allow high detailed and tacticality without metalic harshness.

## Citations & Image Credits

1. "Transducer," Wikipedia, https://en.wikipedia.org/wiki/Transducer (accessed Apr. 21, 2025). 
2. "Electrodynamic speaker driver," Wikipedia, https://en.wikipedia.org/wiki/Electrodynamic_speaker_driver (accessed Apr. 21, 2025). 
3. "Headphones," Wikipedia, https://en.wikipedia.org/wiki/Headphones#Balanced_armature (accessed Apr. 21, 2025). 
4. "Electrostatic loudspeaker," Wikipedia, https://en.wikipedia.org/wiki/Electrostatic_loudspeaker (accessed Apr. 21, 2025).
5. "Magnetostatic loudspeaker," Wikipedia, https://en.wikipedia.org/wiki/Magnetostatic_loudspeaker (accessed Apr. 21, 2025). 
6. [1] "Piezoelectric speaker," Wikipedia, https://en.wikipedia.org/wiki/Piezoelectric_speaker (accessed Apr. 21, 2025).
7. Geoff, "B&O Tech: How to make a loudspeaker driver (a primer)," earfluff and eyecandy, https://www.tonmeister.ca/wordpress/2014/01/31/bo-tech-how-to-make-a-loudspeaker-driver-a-primer/ (accessed Apr. 21, 2025). 
8. A. Fox, "The complete guide to balanced armature IEMS/earphones," My New Microphone, https://mynewmicrophone.com/the-complete-guide-to-balanced-armature-iems-earphones/ (accessed Apr. 21, 2025). 
9. A. Wykes, "Headphone driver types: Which one's just right?," SoundGuys, https://www.soundguys.com/driver-types-19347/ (accessed Apr. 21, 2025). 
10. SoundGearLab-Team, "6 types of headphone drivers explained: Dynamic, planar, etc [guide]," SoundGearLab, https://soundgearlab.com/guide/types-of-headphone-drivers/ (accessed Apr. 21, 2025).
