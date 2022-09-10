noseX = 0;
noseY = 0;

function takeSnapshot(){
save("FliteredSelfie.png");

}
function preload(){
 mustachio = loadImage("https://i.postimg.cc/L4xGSCDL/Acc-Mustache-Filter-removebg-preview.png");
}
function setup(){
    canvas = createCanvas(500,400);
    canvas.position(635,120);
    video = createCapture(VIDEO);
    video.hide();
    video.size(500,400);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);

}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x - "+noseX);
        console.log("nose y - "+noseY);
    }
}
function modelLoaded(){
    console.log("poseNet is initialized");
}
function draw(){
    image(video, 0, 0, 500, 400);
    image(mustachio, noseX-47, noseY-5, 100, 60);
}