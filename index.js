var strats = [["Pistols Only", "Only use pistol", 1, 0], ["The Sneaker", "Sneak the whole round", 1, 0], ["Trampoline", "Jump whenever you are not standing still", 1, 0], ["Which direction?", "Only walk backwards", 1, 0], ["The one-tapper", "You are not allowed to spray", 1, 0], ["Silent Killer", "Silenced weapons only", 1, 0], ["Am I playing Fortnite?", "Only use Shotguns", 1, 0], ["The sharp shooter", "Only use Snipers", 1, 0], ["Don't drop it!", "Bind your drop key to LMB", 1, 0], ["High Sens", "Set your sensitivity to the maximum", 1, 0], ["Low Sens", "Set your sensitivity to 0.1", 1, 0], ["Who needs a mouse?", "Bind your shootkey to a key on the keyboard", 1, 0], ["Thats enough for me", "Only use one magazine", 1, 0], ["Who needs a gun?", "Only use abilities and the knive", 1, 0], ["Half is enough", "Only shoot enemies if your weapon has less than half a magazine or less", 1, 0], ["CS:GO", "Don't use abilities", 1, 0], ["My W-Key is stuck", "You have to hold W for the whole round. Sneaking is forbidden", 1, 0], ["We don't need to run!", "You are only allowed to crouch", 1, 0], ["Please be silent!", "You are only allowed to shift", 1, 0], ["Where is my Oscar?", "All callouts have to be related to movies", 1, 0], ["This fits my agent", "You can only buy a weapon that starts with the letter your agents starts with. If there is no weapon you need to use a stinger", 1, 0],  ["Kill my double please", "You have eliminate doubles of your teams agents first. Only after that you can shoot other enemies", 1, 0], ["Watch out", "You are not allowed to pull out your knife", 1, 0], ["Bugs Bunny", "You have to jump during the whole round", 1, 0], ["You won't get up here!", "You are not allowed to jump", 1, 0], ["The floor is lava", "You are not allowed to touch the ground before the spike was planted. You can touch the ground during buy phase", 1, 0], ["Voice actor", "Make voice effects with your mouse for every action", 0, 0], ["Am I deaf?", "Set your games master volume to 0", 0, 0], ["Where are the coming from?", "Put on your headset backwards", 0, 0]];
var roundsPlayed = 0;
var attacking = 0;
var map = -1;
var stratsLeft = [];
var newStratIndex = 0;
window.onload = function() {
    start();
};
document.addEventListener('keydown', (generateStrat));


function generateStrat(){
    if(stratsLeft.length > 2){
        stratsLeft.splice(newStratIndex, 1);
    }else{
        resetList();
    }

    newStratIndex = Math.floor(Math.random()*stratsLeft.length);

    //Generate index of next strat
    

    //remove strat from list and display it
    console.log(stratsLeft.length + ' | ' + newStratIndex + '|' + stratsLeft[newStratIndex][1]);
    document.getElementById("stratTitleText").textContent = stratsLeft[newStratIndex][0, 0];
    document.getElementById("stratText").textContent = stratsLeft[newStratIndex][1];

    navigator.clipboard.writeText(stratsLeft[newStratIndex][0, 0] + ' | ' + stratsLeft[newStratIndex][1]);
}

function resetList(){
    stratsLeft = strats.slice();
    if(attacking == 1){
        setMode(true);
    }else if(attacking == 2){
        setMode(false);
    }
}

function start(){
    resetList();
}

function setMode(attacking){
    if(attacking){
        attacking = 1;
        stratsLeft.forEach(element => {
            if(element[2] == 2){
                stratsLeft.splice(stratsLeft.indexOf(element), 1)
        }});
    }else{
        attacking = 2;
        stratsLeft.forEach(element => {
            if(element[2] == 1){
                stratsLeft.splice(stratsLeft.indexOf(element), 1)
        }});
    }
    console.log(stratsLeft);
}

function setMap(){

}