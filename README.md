
# Flex - Animations

### Architecture and Technologies
* JavaScript for DOM Manipulation and Current Date/Time Functionality
* CSS3 for animation, hover, three dimensional rendering
* Webpack to bundle script and translate JS as needed


<img width="1436" alt="Screen Shot 2019-07-03 at 11 17 47 AM" src="https://user-images.githubusercontent.com/34456998/60604117-f600c400-9d84-11e9-9d35-29b6d358b7fe.png">


### Background and Overview
The main goal in creating this project is to demonstrate two-dimensional and three-dimensional animation using pure JavaScript and CSS3. The animations demonstrate my mastery of the DOM manipulation and DataTime properties of JavaScript library as well as various advance CSS features including transitions and transformation effects. The project is further divided into five parts each part showcasing different kind of visual effects implemented using either CSS3 advance tools, JS DOM or both. The five parts of the projects are named as Shape Shifters, UnMasked, Whacky Box, Hurry Scurry, Tick Tock. The names are choosen keeping in mind the visual effects the respective part delivers. The unique names assist users easier to relate the sub-parts of the project. 


<img width="1440" alt="Screen Shot 2019-07-03 at 11 24 19 AM" src="https://user-images.githubusercontent.com/34456998/60604211-2b0d1680-9d85-11e9-8b71-7cf9378a003a.png">

### Functionality and MVP Features


* Shape Shifters is a loader Animation that shows nine unique kind of animations triggers on load
* Unmasked demonstrate various kind of hover effects that also have great uses for web front end design
* Whacky Box displays a three-dimensional box with unique gif on all faces. 
* Hurry Scurry showcases how different components and features of CSS can be applied to different images while keeping the overall composition of several pieces working together in harmony
* Tick Tock is a mix of watch and clock that exhibits current time on the watch as well as a functionality of a clock 




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
* Monday - Transition and tranformation effects are implemented on the Unmasked and Shape Shifters
* Tuesday - Three-dimensional rotation effects applied on Whacky Box
* Wednesday - Motion effects on Hurry Scurry are completed
* Thursday - DOM manipulation and current time functionality on Tick Tock finished 
* Friday -  Styled the pages and the parts of the project

### Bonus Goals
* Add the sixth animation showcasing weather effects including sunshine and rain
* Add a seventh animation demonstrating Spinning animations













