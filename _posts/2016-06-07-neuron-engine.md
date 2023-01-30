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
### Minimal Requirements ###
- CPU: Quad Core (Intel Core i7 900 series, AMD Buldozzer series or later)
- VGA: OpenCL 1.2 and OpenGL 4.4 (core profile) capable with atleast 1GB GDDR5 dedicated memory
(Nvidia GeForce 400 series, Nvidia GeForce 500 series, Nvidia GeForce 600 series, Nvidia GeForce 700 series, ATI Radeon HD 5000 series, AMD Radeon HD 6000 Series, AMD Radeon HD 7000 Series or later)
- Memory: 4GB


### Operating System Support ###
- Windows XP/Vista/7/8/10
- GNU/Linux 3.8 or later
- OpenBSD/FreeBSD
- OSX
- iOS
- Android
- Playstation 3/4
- Xbox 360/One
- Nintendo Wii (U)


### Host Architecture Support ###
- x86/i386
- x86_64/amd64
- ARM
- ARM64
- PowerPC
- Cell


### Device Architecture Support ###
- Parallella
- AMD A4 or later
- AMD GCN 1.0 or later
- Intel Haswell or later
- Nvidia Kepler or later


### Drivers ###
- Nvidia GeForce video cards must have atleast 310 driver version installed (Windows XP/Vista/7/8, Ubuntu Linux 12.04 or later).
- AMD Radeon HD video cards must have atleast Catalyst 14.12 driver version installed (Windows XP/Vista/7/8, Ubuntu Linux 12.04 or later).


### Game Architecture Goals ###
- World Simulation - Graphics & Physics -> primary
- Round Fighting with RPG elements (ex. Mortal Kombat) -> primary
- First-Person Shooter (ex. Counter-Strike, Battlefield) -> primary
- Action RPG & Hack'n'Slash (ex. Mass Effect, Path of Exile & Diablo) -> primary
- Sports (ex. Pro Evolution Soccer, FIFA & NBA 2K)
- Real-Time Strategy (ex. StarCraft)
- MMO - (ex. PlanetSide & World of Warcraft) -> still not sure

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
