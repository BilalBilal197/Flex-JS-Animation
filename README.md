
# Flex - Animations

### Architecture and Technologies
* JavaScript for DOM Manipulation and Current Date/Time Functionality
* CSS3 for animation, hover, three dimensional rendering
* Webpack to bundle script and translate JS as needed



<img width="1436" alt="Screen Shot 2019-11-29 at 11 17 47 AM" src="https://github.com/BilalBilal197/Flex-JS-Animation/blob/master/src/srcImg/contents.png">


### Background and Overview
The main goal in creating this project is to demonstrate two-dimensional and three-dimensional animation using pure JavaScript and CSS3. The animations demonstrate my mastery of the DOM manipulation and DataTime properties of JavaScript library as well as various advance CSS features including transitions and transformation effects. The project is further divided into five parts each part showcasing different kind of visual effects implemented using either CSS3 advance tools, JS DOM or both. The five parts of the projects are named as Shape Shifters, UnMasked, Whacky Box, Hurry Scurry, Tick Tock. The names are choosen keeping in mind the visual effects the respective part delivers. The unique names assist users easier to relate the sub-parts of the project. 


<img width="1440" alt="Screen Shot 2019-07-03 at 11 24 19 AM" src="https://github.com/BilalBilal197/Flex-JS-Animation/blob/master/src/srcImg/clock.png">

### Functionality and MVP Features


* Shape Shifters is a loader Animation that shows nine unique kind of animations triggers on load
* Unmasked demonstrate various kind of hover effects that also have great uses for web front end design
* Whacky Box displays a three-dimensional box with unique gif on all faces. 
* Hurry Scurry showcases how different components and features of CSS can be applied to different images while keeping the overall composition of several pieces working together in harmony
* Tick Tock is a mix of watch and clock that exhibits current time on the watch as well as a functionality of a clock 

```javascript DOM Manipulation and Current Time functions
    function display(){
    mytime=setTimeout('time()',1000)
    }
function time() {
    let dt = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
    // let dm = new Date().getDay() + ":" + new Date().getMonth();
    document.getElementById('date').innerHTML = dt;
    // document.getElementById('month&day').innerHTML = dm;
    display();
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
* Add a seventh animation demonstrating different kinds of spinning effecs













