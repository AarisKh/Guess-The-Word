player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="question turn"+player1_name;
document.getElementById("player_answer").innerHTML="answer turn-"+player2_name;

function send(){
    wordone=document.getElementById("word").value;
    word=wordone.toLowerCase();
    C1=word.charAt(1);
    console.log(C1);
    lengthbyto=Math.floor(word.length/2);

    C2=word.charAt(lengthbyto);
    console.log(C2);
length=word.length-1;
    C3=word.charAt(length);
    console.log(C3);
    R1=word.replace(C1, "_");
    R2=R1.replace(C2, "_");
R3=R2.replace(C3, "_");
console.log(R3);
question="<h4 id='word_display'>Q."+R3+"</h4>";
input_box="<br>Answer:<input id='input_check_box'>";
check_button="<br> <br> <button onclick='check()' class='btn btn-info'>check</button>";
row=question+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}