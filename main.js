score=0;
function start_it(){
    document.getElementById("div_1").hidden=false;
    document.getElementById("hide_it").hidden=true;
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
        score+=1;
        document.getElementById("score").innerHTML="Score: "+score;
}
    
function ans1w(){
    synth=window.speechSynthesis;
    utterThis=new SpeechSynthesisUtterance("O! O! Try Again");
        synth.speak(utterThis);
        score-=1;
        document.getElementById("score").innerHTML="Score: "+score;
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
        score+=1;
        document.getElementById("score").innerHTML="Score: "+score;
}
    
function ans2w(){
    synth=window.speechSynthesis;
    utterThis=new SpeechSynthesisUtterance("O! O! Try Again");
        synth.speak(utterThis);
        score-=1;
        document.getElementById("score").innerHTML="Score: "+score;
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
        score+=1;
        document.getElementById("score").innerHTML="Score: "+score;
}
    
function ans3w(){
    synth=window.speechSynthesis;
    utterThis=new SpeechSynthesisUtterance("O! O! Try Again");
        synth.speak(utterThis);
        score+=1;
        document.getElementById("score").innerHTML="Score: "+score;
}
function ans4r(){
    synth=window.speechSynthesis;
    utterThis=new SpeechSynthesisUtterance("Correct");
        synth.speak(utterThis);
        setTimeout('', 1200000);
        document.getElementById("op1t").innerHTML="18 June";
        document.getElementById("op2t").innerHTML="21 June";
        document.getElementById("op3t").innerHTML="20 June";
        document.getElementById("op4t").innerHTML="21 July";
        document.getElementById("quiz_q_text").innerHTML="Which day is celebrated as 'International Yoga Day'?";
        document.getElementById("image").hidden="true";
        document.getElementById("op1b").setAttribute( "onClick", "javascript: ans5w();" );
        document.getElementById("op2b").setAttribute( "onClick", "javascript: ans5r();" );
        document.getElementById("op3b").setAttribute( "onClick", "javascript: ans5w();" );
        document.getElementById("op4b").setAttribute( "onClick", "javascript: ans5w();" );
        score+=1;
        document.getElementById("score").innerHTML="Score: "+score;
}
    
function ans4w(){
    synth=window.speechSynthesis;
    utterThis=new SpeechSynthesisUtterance("O! O! Try Again");
        synth.speak(utterThis);
        score-=1;
        document.getElementById("score").innerHTML="Score: "+score;
}
function ans5r(){
    synth=window.speechSynthesis;
    utterThis=new SpeechSynthesisUtterance("Correct");
        synth.speak(utterThis);
        setTimeout('', 1200000);
        document.getElementById("op1t").innerHTML="Deffussion";
        document.getElementById("op2t").innerHTML="Union";
        document.getElementById("op3t").innerHTML="Breaking into two part";
        document.getElementById("op4t").innerHTML="Surya Namaskar";
        document.getElementById("quiz_q_text").innerHTML="Yoga is derived from a sanskrit word meaning?";
        document.getElementById("image").hidden="true";
        document.getElementById("op1b").setAttribute( "onClick", "javascript: ans6w();" );
        document.getElementById("op2b").setAttribute( "onClick", "javascript: ans6r();" );
        document.getElementById("op3b").setAttribute( "onClick", "javascript: ans6w();" );
        document.getElementById("op4b").setAttribute( "onClick", "javascript: ans6w();" );
        score+=1;
        document.getElementById("score").innerHTML="Score: "+score;
}
    
function ans5w(){
    synth=window.speechSynthesis;
    utterThis=new SpeechSynthesisUtterance("O! O! Try Again");
        synth.speak(utterThis);
        score-=1;
        document.getElementById("score").innerHTML="Score: "+score;
}
function ans6r(){
    synth=window.speechSynthesis;
    utterThis=new SpeechSynthesisUtterance("Correct");
        synth.speak(utterThis);
        setTimeout('', 1200000);
        document.getElementById("op1t").innerHTML="Vajarasana";
        document.getElementById("op2t").innerHTML="Mayurasana";
        document.getElementById("op3t").innerHTML="Surya Namaskar";
        document.getElementById("op4t").innerHTML="Pranayam";
        document.getElementById("quiz_q_text").innerHTML="What is breathing exersize called in yoga?";
        document.getElementById("image").hidden="true";
        document.getElementById("op1b").setAttribute( "onClick", "javascript: ans7w();" );
        document.getElementById("op2b").setAttribute( "onClick", "javascript: ans7w();" );
        document.getElementById("op3b").setAttribute( "onClick", "javascript: ans7w();" );
        document.getElementById("op4b").setAttribute( "onClick", "javascript: ans7r();" );
        score+=1;
        document.getElementById("score").innerHTML="Score: "+score;
}
    
function ans6w(){
    synth=window.speechSynthesis;
    utterThis=new SpeechSynthesisUtterance("O! O! Try Again");
        synth.speak(utterThis);
        score-=1;
        document.getElementById("score").innerHTML="Score: "+score;
}

function ans7r(){
    synth=window.speechSynthesis;
    utterThis=new SpeechSynthesisUtterance("Correct");
        synth.speak(utterThis);
        setTimeout('', 600);
        document.getElementById("div_1").hidden="true";
        document.getElementById("title_welcome").innerHTML="Congratulation!"+" Your Score is "+score;
        synth=window.speechSynthesis;
        utterThis=new SpeechSynthesisUtterance("Thank You Have a healthy day! Devloped By Advait Patel Class 7th A TMS");
        console.log("Success")
        synth.speak(utterThis);
        score+=1;
        document.getElementById("score").innerHTML="Score: "+score;
}
    
function ans7w(){
    synth=window.speechSynthesis;
    utterThis=new SpeechSynthesisUtterance("O! O! Try Again");
        synth.speak(utterThis);
        score-=1;
        document.getElementById("score").innerHTML="Score: "+score;
        
}