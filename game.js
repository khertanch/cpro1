p1_name=localStorage.getItem("player1_name");
p2_name=localStorage.getItem("player2_name");

p1_score=0;
p2_score=0;

document.getElementById("player1_name").innerHTML=p1_name +":";
document.getElementById("player2_name").innerHTML=p2_name+":";

document.getElementById("player1_score").innerHTML=p1_score;
document.getElementById("player2_score").innerHTML=p2_score;

document.getElementById("player_question").innerHTML="question turn-"+p1_name;
document.getElementById("player_answer").innerHTML="answer turn -"+p2_name;

function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log(word);

    letter1=word.charAt(1);
    console.log(letter1);
    letter2=word.charAt(Math.floor(word.length/2));
    console.log(letter2);
    letter3=word.charAt(word.length-1);
    console.log(letter3);

    remove1=word.replace(letter1,"_");
    remove2=remove1.replace(letter2,"_");
    remove3=remove2.replace(letter3,"_");
    console.log(remove3);

    question="<h4 id='display'>Q."+remove3+"</h4>";
    input_box="<br>answer:<input type='text' id='input_check_box'>";
    check_btn="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row=question+input_box+check_btn;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}
question_turn="player1";
answer_turn="player2";

function check(){
get_answer=document.getElementById("input_check_box").value;
answer=get_answer.toLowerCase();


if(answer==word){

if(answer_turn=="player1"){

p1_score=p1_score+1;
document.getElementById("player1_score").innerHTML=p1_score;
}
else{
    p2_score=p2_score+1;
    document.getElementById("player2_score").innerHTML=p2_score;
}

}

if(answer_turn=="player1"){
answer_turn="player2";
document.getElementById("player_answer").innerHTML="Answer Turn-" + p2_name;
}
else{
answer_turn="player1";
document.getElementById("player_answer").innerHTML="Answer Turn-" + p1_name

}
if(question_turn=="player2"){
    question_turn="player1";
    document.getElementById("player_question").innerHTML="Question Turn-" + p1_name;
}
else{
    question_turn="player2";
    document.getElementById("player_question").innerHTML="Question Turn-" + p2_name;
}
document.getElementById("output").innerHTML="";

}