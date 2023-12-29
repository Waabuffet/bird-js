var bird;
var score;
var pipes = [];
function setup() {
  createCanvas(windowWidth,windowHeight-40);
  bird = new bird;
  pipes.push(new pipe());
  score = new score;
}

function draw() {
  background(0);
  //score.show();
  
  for (var i = pipes.length-1; i >= 0; i--){
    pipes[i].show();
    pipes[i].update();

    if(pipes[i].hits(bird)){

    }

    if(pipes[i].offScreen()){
      pipes.splice(i,1);
    }
  }

  bird.show();
  bird.update();
  
  if (frameCount % 100 == 0){
    pipes.push(new pipe());
  }

}
function keyPressed(){
  if(key == ' '){
    bird.jump();
  }
}