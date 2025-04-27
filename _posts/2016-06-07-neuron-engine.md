---
layout: post_content
title: Neuron Simulation Engine
description: Advanced simulation engine based on C++ Unified Abstraction Library
tagline: Brain Abuse
tags: Programming C++ CMake Vulkan OpenCL
thumb: neuron_thumb.webp
category: Project
status: wip
---
==== Desktop Requirements ====

Minimal Requirements:
Operating System: Windows XP, Ubuntu Linux 12.04 LTS x86, OpenBSD/FreeBSD x86, OSX
CPU: Dual Core (Intel Core 2 Duo, AMD Athlon or later)
VGA: OpenGL 3.3 (core profile) capable with atleast 256MB GDDR3 dedicated memory
(Nvidia GeForce 8000 series, Nvidia GeForce 9000 series, Nvidia GeForce 200 series, ATI Radeon HD 2000 series, ATI Radeon HD 3000 series, AMD Radeon HD 4000 Series or later)
Memory: 1GB DDR3

Recommended Requirements:
Operating System: Windows 7, Ubuntu Linux 12.10 x64, OpenBSD/FreeBSD x64, OSX
CPU: Quadriple Core (Intel Core i7 900 series, AMD Buldozzer series or later)
VGA: CUDA/OpenCL 1.1 and OpenGL 4.3 (core profile) capable with atleast 512MB GDDR5 dedicated memory
(Nvidia GeForce 400 series, Nvidia GeForce 500 series, Nvidia GeForce 600 series, Nvidia GeForce 700 series, ATI Radeon HD 5000 series, AMD Radeon HD 6000 Series, AMD Radeon HD 7000 Series or later)
Memory: 2GB DDR3


==== Mobile (Embedded) Devices Requirements ====

...


==== Operating System Support ====

Core Profile:
Windows XP/Vista/7/8
GNU/Linux 2.6 or later (all distributions)
OpenBSD/FreeBSD
OSX
iOS
Android
Playstation 3/4
Xbox 360/One
Nintendo Wii (U)

Compatibility Profile [uncertain]:
Playstation 2
Xbox
Nintendo Gamecube
Sega Dreamcast


==== CPU Architecture Support ====

x86/i386
x86_64/amd64
ARM
ARM64
PowerPC
Cell

==== Parallel Architecture Support ====

Parallella (OpenCL)
Nvidia (CUDA)
AMD Radeon (OpenCL)
Intel Sandy Bridge (OpenCL)
AMD APU (OpenCL)


==== Drivers ====

Nvidia GeForce video cards must have atleast 310 (certified) driver version installed (Windows XP/Vista/7/8, Ubuntu Linux 12.04 or later).

AMD Radeon HD video cards must have atleast Catalyst 13.2 (certified) driver version installed (Windows XP/Vista/7/8, Ubuntu Linux 12.04 or later).


==== Engine Architecture Goals ====

1. Unified multi-threaded messaging system (+ subsystems) [done]
2. Completely independant and abstract module interface [done]
3. Module updating in a specified order [in progress]
4. Use polymorphism in the messaging system only when updating modules [done]
5. Run-time hardware architecture traits (ex. platform optimizations) [not implemented]
6. Architecture independant massive parallelization [not implemented]
7. API independant rendering interface [done]
8. Dynamic renderer switching (unified buffers) [not implemented]
9. 100% unawareness of what the engine is running [reviewing]


==== Engine Modules ====

Input Module (Support for different devices)
Renderer Module (OpenGL, OpenGLES & Direct3D)
Physics Module
Audio Module
Resource Module
Network Module
Artificial Intelligence Module
Scene Management Module (Updates the renderer according to its module dependancies)


==== Module Plan ====

Input Module:
- only one thread to decide how to handle and recognize multiple input events

Audio Module:
- a thead which processes messages and spawns more threads to play audio files in parallel

Network Module:
- a thread to constantly recieve and send data
- and a second thead to analyze the data

Renderer Module:
- a thead for messaging and matrix manipulation; manages more threads depending
on the number of visible objects
- Raster rendering method
- Raster & Ray-Tracking hybrid rendering method (OpenGL + OpenCL/CUDA)

Resource Modules:
- only one thread to manage specific resource type (ex. models, audio files, textures, save files, etc.)
- all resource modules share common encryption/decryption algorithm

Physics Module:
- a main thread to process messages and environmental laws of physics; manages more
threads depending on the number of dynamic objects

Artificial Intelligence Module:
- a thread to process messages between AI objects; manages more threads depending
on the number of AI objects

Scene Management Module:
- only one thread to construct the whole scene

=====================================

total threads: 9 ensured + extra (depending on module type)


==== Game Architecture Goals ====

1. World Simulation - Graphics & Physics -> primary
2. Round Fighting with RPG elements (ex. Mortal Kombat) -> primary
3. First-Person Shooter (ex. Counter-Strike, Battlefield) -> primary
4. Action RPG & Hack'n'Slash (ex. Mass Effect, Path of Exile & Diablo) -> primary
5. Sports (ex. Pro Evolution Soccer, FIFA & NBA 2K)
6. Real-Time Strategy (ex. StarCraft)
7. MMO - (ex. PlanetSide & World of Warcraft) -> still not sure