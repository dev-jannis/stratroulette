var strats = [["Pistols Only", "Only use pistol", 0, 0], ["The Sneaker", "Sneak the whole round", 0, 0], ["Trampoline", "Jump whenever you are not standing still", 0, 0], ["Which direction?", "Only walk backwards", 0, 0], ["The one-tapper", "You are not allowed to spray", 0, 0], ["Silent Killer", "Silenced weapons only", 0, 0], ["Am I playing Fortnite?", "Only use Shotguns", 0, 0], ["The sharp shooter", "Only use Snipers", 0, 0], ["Don't drop it!", "Bind your drop key to LMB", 0, 0], ["High Sens", "Set your sensitivity to the maximum", 0, 0], ["Low Sens", "Set your sensitivity to 0.1", 0, 0], ["Who needs a mouse?", "Bind your shootkey to a key on the keyboard", 0, 0], ["Thats enough for me", "Only use one magazine", 0, 0], ["Who needs a gun?", "Only use abilities and the knive", 0, 0], ["Half is enough", "Only shoot enemies if your weapon has less than half a magazine or less", 0, 0], ["CS:GO", "Don't use abilities", 0, 0], ["My W-Key is stuck", "You have to hold W for the whole round. Sneaking is forbidden", 0, 0], ["We don't need to run!", "You are only allowed to crouch", 0, 0], ["Please be silent!", "You are only allowed to shift", 0, 0], ["Where is my Oscar?", "All callouts have to be related to movies", 0, 0], ["This fits my agent", "You can only buy a weapon that starts with the letter your agents starts with. If there is no weapon you need to use a stinger", 0, 0],  ["Kill my double please", "You have eliminate doubles of your teams agents first. Only after that you can shoot other enemies", 0, 0], ["Watch out", "You are not allowed to pull out your knife", 0, 0], ["Bugs Bunny", "You have to jump during the whole round", 0, 0], ["You won't get up here!", "You are not allowed to jump", 0, 0], ["The floor is lava", "You are not allowed to touch the ground before the spike was planted. You can touch the ground during buy phase", 0, 0], ["Voice actor", "Make voice effects with your mouse for every action", 0, 0], ["Am I deaf?", "Set your games master volume to 0", 0, 0], ["Where are the coming from?", "Put on your headset backwards", 0, 0], ["Protect the TP", "Two players have to instantly jump into the TP and can only leave once the spike is planted", 2, 4]];
var roundsPlayed = 0;
var attacking = 0;
//angreifen = 1 | verteidigen = 2
var map = -1;
//haven = 1 | split = 2 | fracture = 3 | bind = 4 | breeze = 5 | icebox = 6 | ascent = 7
var stratsLeft = [];
var newStratIndex = 0;
window.onload = function() {
    start();
};
document.addEventListener('keydown', (generateStrat));


function generateStrat(){
    var possibleChallenges = 0;
    stratsLeft.forEach(element => {
        if((element[2] != 0 && element[2] != attacking) || (element[3] != 0 && element[3] != map)){
        }else{
            possibleChallenges++;
        }
    });
    console.log(possibleChallenges);

    if(possibleChallenges < 1){
        resetList();
    }
    
    do{
        newStratIndex = Math.floor(Math.random()*stratsLeft.length);
    }while((stratsLeft[newStratIndex][2] != 0 && stratsLeft[newStratIndex][2] != attacking) || (stratsLeft[newStratIndex][3] != 0 && stratsLeft[newStratIndex][3] != map));
    console.log(stratsLeft[newStratIndex][3] + " | " + map);    

    //remove strat from list and display it
    document.getElementById("stratTitleText").textContent = stratsLeft[newStratIndex][0, 0];
    document.getElementById("stratText").textContent = stratsLeft[newStratIndex][0];

    navigator.clipboard.writeText(stratsLeft[newStratIndex][0] + ' | ' + stratsLeft[newStratIndex][1]);

        stratsLeft.splice(newStratIndex, 1);
}


function resetList(){
    stratsLeft = strats.slice();
}

function start(){
    resetList();
}

function setMode(attackBool){
    if(attackBool){
        document.getElementById("attackerButton").style.background = "#696969";
        document.getElementById("defenderButton").style.background = "#ffffff";
        attacking = 1;
    }else{
        document.getElementById("defenderButton").style.background = "#696969";
        document.getElementById("attackerButton").style.background = "#ffffff";
        attacking = 2;
    }
    console.log(attackBool);
}

function setMap(){
    var whichMap = document.getElementById("mapPickID").value;
    switch(whichMap){
        case "haven":
            map = 1;
        break;
        case "split":
            map = 2;
        break;
        case "fracture":
            map = 3;
        break;
        case "bind":
            map = 4;
        break;
        case "breeze":
            map = 5;
        break;
        case "icebox":
            map = 6;
        break;
        case "ascent":
            map = 7;
        break;
    }
    console.log(map);
}
