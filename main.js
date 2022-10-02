var SpeechRecognition = window.webkitSpeechRecognition;
/*window.webkitURLSpeechRecognition is a web speech api used 
to recognize what is said and convert it into speech*/
var recognititon = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognititon.start()
}
recognititon.onresult = function(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML=Content;
    if (Content == "take my selfie") {
        speak();
        
    }
   
}
    function speak(){
        var synth = window.speechSynthesis;
        var spek_data = "Taking your selfie in 5 minutes" ;
        var utterthis = new SpeechSynthesisUtterance(spek_data) ;
        synth.speak(utterthis);
        Webcam.attach(camera);
        setTimeout(function()
    {
        take_snapshot();
        save();
    }, 5000);

    }
    Webcam.set({
        width:360,
        height:250,
        image_format:'png',
        png_quality:90

    });
    var camera = document.getElementById("camera");
    function take_snapshot(){
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
        }
        )
    }
    setTimeout(function()
    {
        take_snapshot();
    }, 5000);
function save(){
 var link =document.getElementById("link");
 var image=document.getElementById("selfie_image").src;
 link.href=image;
 link.click();
    
    
}