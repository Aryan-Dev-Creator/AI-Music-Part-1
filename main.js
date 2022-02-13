song1 = "";
song2 = "";

function preload()
{
    song1 = loadSound("ATC - Around The World (Lyrics) (La La La La La).mp3");
    song2 = loadSound("Indila - Ainsi Bas La Vida (Lyrics-Letra).mp3");
}

function setup()
{
canvas = createCanvas(600, 500);
canvas.center();

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 600, 500);

    fill('#0000FF');
    stroke('#0000FF');

    circle(rightWristX, rightWristY, 20);
}