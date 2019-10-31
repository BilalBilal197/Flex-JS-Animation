// import './styles/index.css';

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('app').innerText = "Hello World!";
});

function forward() {
    var elem1 = document.getElementById("myAnimation"); 
    var elem2 = document.getElementById("myAnimation2");   
    var elem3 = document.getElementById("myAnimation3");  
    var elem4 = document.getElementById("myAnimation4");
    var elem5 = document.getElementById("myAnimation5");
    // var elem6 = document.getElementById("myAnimation6"); 
    var pos1 = 0;
    var pos2 = 350;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos1 !== 350) {
        pos1++; 
        elem1.style.left = pos1 + 'px'; 
        elem2.style.top = pos1 + 'px'; 
        elem3.style.top = pos1 + 'px'; 
        elem3.style.left = pos1 + 'px'; 
      }
      if (pos2 !== 0) {
        pos2--;
        elem4.style.left = pos2 + "px";
        elem5.style.top = pos2 + "px";
      }
    }
  }

function backward() {
    var elem1 = document.getElementById("myAnimation"); 
    var elem2 = document.getElementById("myAnimation2"); 
    var elem3 = document.getElementById("myAnimation3"); 
    var elem4 = document.getElementById("myAnimation4");
    var elem5 = document.getElementById("myAnimation5");
    // var elem6 = document.getElementById("myAnimation6");  
    var pos1 = 350;
    var pos2 = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos1 !== 0 ) {
        pos1--; 
        elem2.style.top = pos1 + 'px'; 
        elem1.style.left = pos1 + 'px'; 
        elem3.style.top = pos1 + 'px'; 
        elem3.style.left = pos1 + 'px'; 
      }
      if (pos2 !== 350) {
        pos2++;
        elem4.style.left = pos2 + "px";
        elem5.style.top = pos2 + "px";
      }
    }
  }