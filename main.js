predection = "";

Webcam.set({
    height: 270,
    width: 350, 
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version:", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/cAFI5kXDA/model.json", modelLoaded);

function modelLoaded()
{
    console.log("model Loaded")
}

function speak()
{
    var synth = window.speechSynthesis;
    dialogue = "Prediction is " + prediction;
    var utterThis = new SpeechSynthesisUtterance(dialogue);
    synth.speak(utterThis);
}

function identify_gesture()
{
    img = document.getElementById("capture_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, result)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(result);
        document.getElementById("text_of_hand_gesture").innerHTML = result[0].label;
        prediction = result[0].label;
        speak();
        if(result[0] = "Amazing")
        {
            document.getElementById("emoji_of_hand_gesture").innerHTML = "&#128076;;";
        }
        if(result[0] = "Victory")
        {
            document.getElementById("emoji_of_hand_gesture").innerHTML = "&#128075;";
        }
        if(result[0] = "Cool")
        {
            document.getElementById("emoji_of_hand_gesture").innerHTML = "&#129304;";
        }
        if(result[0] = "Up")
        {
            document.getElementById("emoji_of_hand_gesture").innerHTML = "&#128070;";
        }
        if(result[0] = "down")
        {
            document.getElementById("emoji_of_hand_gesture").innerHTML = "&#128071;";
        }
    }
}