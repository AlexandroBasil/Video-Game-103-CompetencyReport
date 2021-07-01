// character one
let characterOneName="Courage, <br> The Cowardly Dog";
let characterOnePoints=100;

function displayCharacter(){
    document.getElementById("info-c1").innerHTML=`<p><b>Name:</b> ${characterOneName}</p>
            <p><b>Points:</b> ${characterOnePoints}</p>`;
}
displayCharacter();

// character two
let characterTwoName="Eustace Bagge"
let characterTwoPoints=100;

function displayCharacterTwo(){
    document.getElementById("info-c2").innerHTML=`<p><b>Name:</b> ${characterTwoName}</p>
            <p><b>Points:</b> ${characterTwoPoints}</p>`;
}
displayCharacterTwo();


// character one attack
function attack(){
    document.getElementById("console").innerHTML=`<p>Attacking Eustace . . . </p>`;
    //discount points from character
    var newPointsTwo=characterTwoPoints-20;
    //conditional statement
    if (newPointsTwo<0){
    document.getElementById("console").innerHTML=`<p>Y O U <br> H A V E <br> D E F E A T E D <br> E V I L</p>`;
    document.getElementById("btn-attack").style.display="none";
    }else{
    //update the variable
    characterTwoPoints=newPointsTwo;
    //update the display
    displayCharacterTwo();
    }

}

// character two attack
function attackTwo(){
    document.getElementById("console").innerHTML=`<p>Attacking Courage... </p>`;
    //discount points from character
    var newPoints=characterOnePoints-20;
    //conditional statement
    if (newPoints<0){
    document.getElementById("console").innerHTML=`<p>G A M E <br> O V E R</p>`;
    document.getElementById("btn-attack").style.display="none";
    }else{
    //update the variable
    characterOnePoints=newPoints;
    //update the display
    displayCharacter();
    }

}
