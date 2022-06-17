function start_it(){
    document.getElementById("div_1").hidden=false;
    document.getElementById("hide_it").hidden=true;
    var hour=now.getHours();
var mintues=now.getMinutes();
if (hour >= 8 && hour <= 11 && mintues >= 0) { 
    document.getElementById("div_1").hidden=false;
    document.getElementById("hide_it").hidden=true;
}
}
function ans1r(){
    synth=window.speechSynthesis;
    utterThis=new SpeechSynthesisUtterance("Correct");
        synth.speak(utterThis);
        setTimeout('', 1200000);
        document.getElementById("op1t").innerHTML="Bhujangasana";
        document.getElementById("op2t").innerHTML="Halasana";
        document.getElementById("op3t").innerHTML="Cobra Pose";
        document.getElementById("op4t").innerHTML="Both A & C";
        document.getElementById("quiz_q_text").innerHTML="Name the pose";
        document.getElementById("image").src="https://image.shutterstock.com/image-vector/woman-cobra-pose-doing-yoga-260nw-2015933822.jpg";
        document.getElementById("op1b").setAttribute( "onClick", "javascript: ans2w();" );
        document.getElementById("op2b").setAttribute( "onClick", "javascript: ans2w();" );
        document.getElementById("op3b").setAttribute( "onClick", "javascript: ans2w();" );
        document.getElementById("op4b").setAttribute( "onClick", "javascript: ans2r();" );
}
    
function ans1w(){
    synth=window.speechSynthesis;
    utterThis=new SpeechSynthesisUtterance("O! O! Try Again");
        synth.speak(utterThis);

}
function ans2r(){
    synth=window.speechSynthesis;
    utterThis=new SpeechSynthesisUtterance("Correct");
        synth.speak(utterThis);
        setTimeout('', 1200000);
        document.getElementById("op1t").innerHTML="12";
        document.getElementById("op2t").innerHTML="7";
        document.getElementById("op3t").innerHTML="10";
        document.getElementById("op4t").innerHTML="8";
        document.getElementById("quiz_q_text").innerHTML="How many different asanas dose Surya Namaskar comprise of";
        document.getElementById("image").hidden="true";
        document.getElementById("op1b").setAttribute( "onClick", "javascript: ans3r();" );
        document.getElementById("op2b").setAttribute( "onClick", "javascript: ans3w();" );
        document.getElementById("op3b").setAttribute( "onClick", "javascript: ans3w();" );
        document.getElementById("op4b").setAttribute( "onClick", "javascript: ans3w();" );
        console.log("done");
}
    
function ans2w(){
    synth=window.speechSynthesis;
    utterThis=new SpeechSynthesisUtterance("O! O! Try Again");
        synth.speak(utterThis);

}
function ans3r(){
    synth=window.speechSynthesis;
    utterThis=new SpeechSynthesisUtterance("Correct");
        synth.speak(utterThis);
        setTimeout('', 1200000);
        document.getElementById("op1t").innerHTML="Padmasana";
        document.getElementById("op2t").innerHTML="Savasana";
        document.getElementById("op3t").innerHTML="Sheershasana";
        document.getElementById("op4t").innerHTML="Halasana";
        document.getElementById("quiz_q_text").innerHTML="Which asana is helpful in maintaining normal blood pressure?";
        document.getElementById("image").hidden="true";
        document.getElementById("op1b").setAttribute( "onClick", "javascript: ans4w();" );
        document.getElementById("op2b").setAttribute( "onClick", "javascript: ans4r();" );
        document.getElementById("op3b").setAttribute( "onClick", "javascript: ans4w();" );
        document.getElementById("op4b").setAttribute( "onClick", "javascript: ans4w();" );
        console.log("done");
}
    
function ans3w(){
    synth=window.speechSynthesis;
    utterThis=new SpeechSynthesisUtterance("O! O! Try Again");
        synth.speak(utterThis);

}
function ans4r(){
    synth=window.speechSynthesis;
    utterThis=new SpeechSynthesisUtterance("Correct");
        synth.speak(utterThis);
        setTimeout('', 600);
        document.getElementById("div_1").hidden="true";
        document.getElementById("me").hidden="false";
        synth=window.speechSynthesis;
    utterThis=new SpeechSynthesisUtterance("Thank You Have a healthy day! Devloped By Advait Patel Class 7th A. TMS");
        synth.speak(utterThis);
}
    
function ans4w(){
    synth=window.speechSynthesis;
    utterThis=new SpeechSynthesisUtterance("O! O! Try Again");
        synth.speak(utterThis);
        
}