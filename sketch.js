function setup() {
 
    createCanvas(600, 600);
      
    background("white");
      
    }
    
    function draw() {
    
    stroke("black");
      
    fill("black");
      
    if(mouseIsPressed){
      
    rect(mouseX, mouseY, 10, 10, 10);
    
    }
    }
    