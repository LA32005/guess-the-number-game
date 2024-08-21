var answer = document.getElementById('answer');
var guess_input = document.getElementById('guess');
var Mysubmit = document.getElementById('enter');

Mysubmit.onclick = function (){
    var randomNum = Math.floor(Math.random() * 10) + 1;
    answer.value = randomNum;

    var guess = Number(guess_input.value);

    if (guess==randomNum){
        answer.style.background = "lightgreen";
    }
    else if(isNaN(guess)){ // or you can use if (type of(guess) !== "number"
        window.alert("Please Enter a Number")
    }
    else{
        answer.style.background = "red";
    }
}
