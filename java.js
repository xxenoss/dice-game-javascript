function rolldice(){
        var rand_number1 = Math.floor(Math.random()*6)+1
        var rand_number2 = Math.floor(Math.random()*6)+1

        document.getElementById("player1dice").setAttribute("src", "Images/" +rand_number1 + ".png");
        document.getElementById("player2dice").setAttribute("src", "Images/" +rand_number2 + ".png");

        if (rand_number1 > rand_number2){
            document.getElementsByClassName("dice-title")[0].textContent ="Player One Won";
        }
        else if (rand_number1 < rand_number2){
            document.getElementsByClassName("dice-title")[0].textContent ="Player Two Won";

        }
        else if (rand_number1===rand_number2){
            document.getElementsByClassName("dice-title")[0].textContent ="It's a Draw."

        }
}
function play(){
    rolldice()
}
document.getElementById("againbtn").addEventListener("click", play);


rolldice();



