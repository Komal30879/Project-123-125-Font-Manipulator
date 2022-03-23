
right_wrist_x = 0;
left_wrist_x = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    posenet = ml5.poseNet(video,model_loaded);
    posenet.on('pose', gotPoses);
}

function model_loaded(){
    console.log("poseNet is initiated.")
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;
        difference = floor(left_wrist_x-right_wrist_x);

        console.log("left wrist x ="+ left_wrist_x + "right wrist x =" + right_wrist_x);
    }
}

function draw(){
    background('#969A97');

    textSize(difference);
    fill('#F90093');
    text(Komal, 50, 400);
}