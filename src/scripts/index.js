// import './styles/index.css';

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('app').innerText = "Hello World!";
});

function forward() {
    var elem1 = document.getElementById("myAnimation"); 
    var elem2 = document.getElementById("myAnimation2");   
    var elem3 = document.getElementById("myAnimation3");  
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos !== 350) {
        pos++; 
        elem2.style.top = pos + 'px'; 
        elem1.style.left = pos + 'px'; 
        elem3.style.top = pos + 'px'; 
        elem3.style.left = pos + 'px'; 
      }
    }
  }

function backward() {
    var elem1 = document.getElementById("myAnimation"); 
    var elem2 = document.getElementById("myAnimation2"); 
    var elem3 = document.getElementById("myAnimation3");  
    var pos = 350;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos !== 0 ) {
        
        pos--; 
        elem2.style.top = pos + 'px'; 
        elem1.style.left = pos + 'px'; 
        elem3.style.top = pos + 'px'; 
        elem3.style.left = pos + 'px'; 
      }
    }
  }