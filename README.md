
# Atomic Warriors

### Architecture and Technologies
* JavaScript for DOM Manipulation and Current Date/Time Functionality
* CSS3 for animation, hover, three dimensional rendering
* Webpack to bundle script and translate JS as needed


<img width="1436" alt="Screen Shot 2019-07-03 at 11 17 47 AM" src="https://user-images.githubusercontent.com/34456998/60604117-f600c400-9d84-11e9-9d35-29b6d358b7fe.png">


### Background and Overview
The main goal in creating this project is to demonstrate two-dimensional and three-dimensional animation using pure JavaScript and CSS3. The animations demonstrate my mastery of the DOM manipulation and DataTime properties of JavaScript library as well as various advance CSS features including transitions and transformation effects. The project is further divided into five parts each part showcasing different kind of visual effects implemented using either CSS3 advance tools, JS DOM or both. The five parts of the projects are named as Shape Shifters, UnMasked, Whacky Box, Hurry Scurry, Tick Tock. The names are choosen keeping in mind the visual effects the respective part delivers. The unique names assist users easier to relate the sub-parts of the project. 


<img width="1440" alt="Screen Shot 2019-07-03 at 11 24 19 AM" src="https://user-images.githubusercontent.com/34456998/60604211-2b0d1680-9d85-11e9-8b71-7cf9378a003a.png">

### Functionality and MVP Features


* The Shape Shifter is a loader Animation that shows nine unique kind of animations triggers on load
* The Unmasked demonstrate various kind of hover effects that also have great uses for web front end design
* The Whacky Box 
*
*


* Character can move, jump, and move their shield based on keyboard inputs
+ Walk AD/JL, move shield WS/IK, jump F/;, shield throw G/'
* Character movements are limited appropriately by the environment (cannot jump on air, fall through floor, walk through walls, etc.)
* A character is eliminated if their body contacts the other character's shield or if the other     character lands on their head
* The game correctly identifies when a player is eliminated, ending the round, attributing the point and starting a new round
* The game tracks each player's wins, ending the match when one player hits three wins
* Distinct color for the each character and their shield
* Menu allows players to pause/play game, restart match, and control sound
+ Spacebar pauses/plays and M mute/unmutes sound


```javascript
    move(command){

        switch (command) {
            case "left":
                    this.dx -= 3;
                break;
            case "right":
                    this.dx += 3;
                break;
            case "jump":
                if (this.warriorPos[1] === 461)
                this.dy -= 20;
                break;
            case "up":
                if (this.shieldStance === "low"){
                    this.shieldStance = "middle";
                } else if(this.shieldStance === "middle") {
                    this.shieldStance = "top";
                }
                break;
            case "down":
                if (this.shieldStance === "middle"){
                    this.shieldStance = "low";
                } else if(this.shieldStance === "top") {
                    this.shieldStance = "middle";
                }
                break;
            default:
                break;
        }
    }
```

### Implementation
* Tuesday - Skeleton of character movement is completed
* Wednesday - Characters are able to eliminate one another and second player is added
* Thursday - and the system for winning a match is fully implemented
* Friday -  Stage design complete and round and match system finalized

### Bonus Goals
* Scrolling backstory loop while game is waiting for match to start
* More stages
* Choice of character color
* Shields can be thrown and regenerate appropriately
* AI added













# README

# Introduction 
This is the Flex-animation app. The app demonstrate awesome animations like 2d revolutions, hover effects, 3D effects, a street scene animation and a clock implementation using JS.


# Live Site
to access the app live, go to
https://bilalbilal197.github.io/Flex-JS-Animation/


# technologies used
The technologies for used to build this app include Vanilla Javascript, CSS3 and HTML5.


# Wireframe
![Flex-JS-Animation](./src/srcImg/wireframe.png)

https://wireframe.cc/atMPyJ

# Challenges faced
Vanilla Javascript is best for making 2D animations. although 3D.js is a more suitable library for creating 3D animations but, for the sake of demonstrating the mastery of JavaScript, the 3D animation is implemented using vanilla Javascript. 

# Code snippets
code snippet here

# Future Direction 
The Project will contain the following effects
1. Nine Two Dimentional Loader Animations
2. Nine Hover effects
3. A street scene demonstrating implementation of frame movements
4. 3D Box or Dice
5. A clock implemented using Javascript DOM manipulation


# MVP List

Hosting on github live (10/20/2019)

Using DOM manipulation for the first part (11/04/2019)

learn and implement spinning animation (11/05/2019)

learn general CSS animation and create a seperate section with 6 to 9 2D animations (11/06/19)

create 3D animation using 3D.js (11/07/19)

create a clock using JavaScript DOM Manipulation (11/08/19)

Production README (11/10/2019, 0.5 days)
