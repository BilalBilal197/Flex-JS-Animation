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