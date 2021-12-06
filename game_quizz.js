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
     actual_answer=parseInt(number1) * parseInt(number2);
    var question_number="<h4>" + number1 + "X" + number2 + "</h4>";
    var input_box="<br>Answer: <input type='text' id='input_check_box'>";
    var check_button="<br><br><button class='btn btn-info'  onclick='check()'>CHECK</button>"
    var row =question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
var question_player="player1";
var answer_player="player2";
var update_player1_score=0;
var update_player2_score
function check(){
    get_answer=document.getElementById("input_check_box").value;
    if(get_answer == actual_answer){
        if(answer_player == "player1"){
update_player1_score=player1_score+1;
document.getElementById("player1_score").innerHTML=update_player1_score;
}
else{
    update_player2_score=player2_score+1;
    document.getElementById("player2_score").innerHTML=update_player2_score;
}
}
if(question_player == "player1"){
question_player="player2";
document.getElementById("player_question").innerHTML="Question Turn  - " + player2_name;
}
else{
    question_player="player1";
    document.getElementById("player_question").innerHTML="Question Turn  - " + player1_name;  
}
if(answer_player == "player1"){
    answer_player="player2";
    document.getElementById("player_answer").innerHTML="answer Turn  - " + player2_name;
    }
    else{
        answer_player="player1";
        document.getElementById("player_answer").innerHTML="Answer Turn - " + player1_name;  
    }
}
