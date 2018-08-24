(function(){
    
           var hei = document.getElementById('sec');
           sec.style.height = window.innerHeight;})();

var state ={
    one:{
        lock:0
    },
    two:{
         lock:0
    },
    three:{
         lock:0
    },
    four:{
         lock:0
    },
    five:{
         lock:0
    },
    pause: 1
    
};
function mouse(event) {
  var X = event.pageX;
    var Y = event.pageY;
    
   
   // alert(X + ' '+ Y);
    if(Y >= 0 && Y<=145 & X>=0){
        if(state.one.lock == 0){
    var tmp = document.getElementById('one');
    tmp.style.animation = 'lineR 1s linear';
         
        setTimeout(function(){tmp.style.animationPlayState = 'paused';},900);
            state.one.lock = 1; 
        }
    }
    
     if(event.clientY >= 145 && event.clientY<=290 & X>=0){
        if(state.two.lock == 0){
    var tmp = document.getElementById('two');
    tmp.style.animation = 'lineL 1s linear';
         
        setTimeout(function(){tmp.style.animationPlayState = 'paused';},900);
            state.two.lock = 1; 
        }
    }
   
     if(event.clientY >= 290 && event.clientY<=435 & X>=0){
        if(state.three.lock == 0){
    var tmp = document.getElementById('three');
    tmp.style.animation = 'lineR 1s linear';
         
        setTimeout(function(){tmp.style.animationPlayState = 'paused';},900);
            state.three.lock = 1; 
        }
    }
     
     if(event.clientY >= 435 && event.clientY<=580 & X>=0){
        if(state.four.lock == 0){
    var tmp = document.getElementById('four');
    tmp.style.animation = 'lineL 1s linear';
         
        setTimeout(function(){tmp.style.animationPlayState = 'paused';},900);
            state.four.lock = 1; 
        }
    }
    
     if(event.clientY >= 580 && event.clientY<=725 & X>=0){
        if(state.five.lock == 0){
    var tmp = document.getElementById('five');
    tmp.style.animation = 'lineR 1s linear';
         
        setTimeout(function(){tmp.style.animationPlayState = 'paused';},900);
            state.five.lock = 1; 
        }
    } 
    
};

var num = 100;
function button(a){ 
    
    var tmp = document.getElementById(a);
    tmp.style.background = 'url(pipi.jpg) ' + num +'px';
    num+=100;
    state.pause = state.pause * (-1);
    
}

var swipe = 0;
setInterval(function(){
    var tmp = document.getElementById('SecOne');
    if(state.pause == 1){
    tmp.style.background =" url(port.jpg) " + swipe + "px";
    swipe -=500;
    }
},1000);