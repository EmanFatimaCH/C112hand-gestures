Webcam.set({
width: 350,
height: 300,
image_format: 'png',
png_quality: 90
});
    
camera = document.getElementById("camera");
    
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
    }
    
    console.log('ml5 version',ml5.version);

    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/yW-qqq8SM/model.json',modelLoaded);

    function modelLoaded(){
        console.log('model loaded');
        }
        
        function speak(){
        var synth = window.speechSynthesis;
        speak_data_1 = "The first prediction is " + prediction_1;
        var utterThis = new SpeechSynthesisUtterance(speak_data_1);
        synth.speak(utterThis);
        }

        function check(){
            var img = document.getElementById('captured_image');
            classifier.classify(img,gotResult)
            }
            
            function gotResult(error, results){
            if (error) {
            console.error(error);
            } else{
            console.log(results);
            document.getElementById("result_geture_name").innerHTML = results[0].label;
            document.getElementById("result_gestur_name2").innerHTML = results[1].label;
            prediction_1=results[0].label;
            prediction_2=results[1].label;
            speak();
            if (results[0].label == "good")
            {
            document.getElementById("update_emoji").innerHTML = "&#128077;";
            }

            if (results[0].label == "bad")
{
document.getElementById("update_emoji").innerHTML = "&#128078;";
}

if (results[0].label == "peace")
{
document.getElementById("update_emoji").innerHTML = "&#9996;";
}

if (results[1].label == "hello")
{
document.getElementById("update_emoji2").innerHTML = "&#128075;";
}

if (results[1].label == "nice")
{
document.getElementById("update_emoji2").innerHTML = "&#128076;";
}

if (results[1].label == "rock")
{
document.getElementById("update_emoji2").innerHTML = "&#129304;";
}
}
}
    