var player1_name=localStorage.getItem("player1_name");
var player2_name=localStorage.getItem("player2_name");
var player1_score=0;
var player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name + " : ";
document.getElementById("player2_name").innerHTML=player2_name + " : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML="Answer  Turn - " + player2_name;
function send(){
    var number1=document.getElementById("number1").value;
    var number2=document.getElementById("number2").value;
    var actual_answer=parseInt(number1) * parseInt(number2);
    var question_number="<h4>" + number1 + "X" + number2 + "</h4>";
    var input_box="<br>Answer: <input type='text' id='input_check_box'>";
    var check_button="<br><br><button class='btn btn-info'  onclick='check()'>CHECK</button>"
    var row =question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
