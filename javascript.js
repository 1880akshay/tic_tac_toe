var game=1;
function fill(box) {
    if(game==1){
        document.getElementById(box).value= "X";
        game--;
        document.getElementById(box).disabled="disabled";
        winner();
    }
    else {
        document.getElementById(box).value= "O";
        game++;
        document.getElementById(box).disabled="disabled";
        winner();
    }
}
function winner() {
    if (document.getElementById("box1").value== "X" && document.getElementById("box2").value== "X" && document.getElementById("box3").value== "X"
    || document.getElementById("box1").value== "X" && document.getElementById("box4").value== "X" && document.getElementById("box7").value== "X"
    || document.getElementById("box1").value== "X" && document.getElementById("box5").value== "X" && document.getElementById("box9").value== "X"
    || document.getElementById("box4").value== "X" && document.getElementById("box5").value== "X" && document.getElementById("box6").value== "X"
    || document.getElementById("box7").value== "X" && document.getElementById("box8").value== "X" && document.getElementById("box9").value== "X"
    || document.getElementById("box2").value== "X" && document.getElementById("box5").value== "X" && document.getElementById("box8").value== "X"
    || document.getElementById("box3").value== "X" && document.getElementById("box6").value== "X" && document.getElementById("box9").value== "X"
    || document.getElementById("box3").value== "X" && document.getElementById("box5").value== "X" && document.getElementById("box7").value== "X") { 

        alert("Congratulations! Player X is the winner.");     
    }

    else if (document.getElementById("box1").value== "O" && document.getElementById("box2").value== "O" && document.getElementById("box3").value== "o"
    || document.getElementById("box1").value== "O" && document.getElementById("box4").value== "O" && document.getElementById("box7").value== "O"
    || document.getElementById("box1").value== "O" && document.getElementById("box5").value== "O" && document.getElementById("box9").value== "O"
    || document.getElementById("box4").value== "O" && document.getElementById("box5").value== "O" && document.getElementById("box6").value== "O"
    || document.getElementById("box7").value== "O" && document.getElementById("box8").value== "O" && document.getElementById("box9").value== "O"
    || document.getElementById("box2").value== "O" && document.getElementById("box5").value== "O" && document.getElementById("box8").value== "O"
    || document.getElementById("box3").value== "O" && document.getElementById("box6").value== "O" && document.getElementById("box9").value== "O"
    || document.getElementById("box3").value== "O" && document.getElementById("box5").value== "O" && document.getElementById("box7").value== "O") {


        alert("Congratulations! Player O is the winner.");
    }

    else if ( document.getElementById("box1").value!= "" &&
    document.getElementById("box2").value!= "" &&
    document.getElementById("box3").value!= "" &&
    document.getElementById("box4").value!= "" &&
    document.getElementById("box5").value!= "" &&
    document.getElementById("box6").value!= "" &&
    document.getElementById("box7").value!= "" &&
    document.getElementById("box8").value!= "" &&
    document.getElementById("box9").value!= "") {

        alert("Match draw!");
    }
}