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