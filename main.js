  function setup() {
   video = createCapture(VIDEO);
   video.size(550, 500);

   cnavas = createCanvas(550, 550);
   canvas.position(560,150);

   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
  }
  
  function gotPoses(results)  
  {
   if(results.lengtht > 0)
   {
    console.log(results);
   }
  }

  function modelLoaded()  {
      console.log('PoseNet Is Initalized!');
  }

  function draw() {
  background('#969A97');
  }
