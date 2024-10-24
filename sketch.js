function setup() {
    createCanvas(600,600);
    background ("white");
  } 
  
  function draw () {   
    
   stroke("#00BCD4");
   fill("#FC0056"); 
    
   //console.log(mouseIsPressed);  
   if(mouseIsPressed) {
     
    rect(mouseX,mouseY,20,35);
   }
  }  