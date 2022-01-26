<!-- ---
title: Obstacle Avoiding Bot
tags: [arduino,l298n,hcsr04]
layout: article
mode: normal
type: article
sharing: true
author: Sharath Golluri
show_author_profile: true
show_title: true
full_width: false
header: true
cover: /assets/images/blog/thumbnails/Obstacle Avoiding Bot.png
--- -->

---
title: Obstacle Avoiding Bot
published: 2021-12-05
summary: 'To make an autonomous basic obstacle avoiding robot.'
tags: [arduino,l298n,hcsr04]
---
## Aim
To make an autonomous basic obstacle avoiding robot.

<!--more-->
## Hardware used
-   1-Arduino Uno.
-   1-Ultrasonic sensor HC-SR04
-   1-Arduino motor shield
-   1 – External 9v power supply for Arduino as well as motors.
-   2-BO motors
-   1-Caster wheel for support
-   1-Mini breadboard

## Details
The obstacle avoiding robot uses ultrasonic sensors for its movements. The ultrasonic sensor is attached in front of the robot.Whenever the robot is going on the desired path the ultrasonic sensor transmits the ultrasonic waves continuously from its sensor head. Whenever an obstacle comes ahead of it the ultrasonic waves are reflected back from an object and that information is passed to the arduino. The arduino controls the motors based on ultrasonic signals.

<Image
  src='/static/images/blog/Obstacle-avoiding-bot/3.png'
  alt='1'
  width='auto'
  height='auto'
/>

## Working principle


<Image
  src='/static/images/blog/Obstacle-avoiding-bot/1.png'
  alt='1'
  width='auto'
  height='auto'
/>

<Image
  src='/static/images/blog/Obstacle-avoiding-bot/2.png'
  alt='1'
  width='auto'
  height='auto'
/>
<div>{%- include extensions/youtube.html id='ZUdX-jNvlTo' -%}</div>


<Image
  src='/static/images/blog/thumbnails/Obstacle Avoiding Bot.png'
  alt='1'
  width='auto'
  height='auto'
/>