var strats = [['Pistols Only', 'Only use pistol'], ['The Sneaker', 'Sneak the whole round'], ['Trampoline', 'Jump whenever you are not standing still'], ['Which direction?', 'Only walk backwards'], ['The one-tapper', 'You are not allowed to spray'], ['Silent Killer', 'Silenced weapons only'], ['Am I playing Fortnite?', 'Only use Shotguns'], ['The sharp shooter', 'Only use Snipers'], ['Dont drop it!', 'Bind your drop key to LMB'], ['High Sens', 'Set your sensitivity to the maximum'], ['Low Sens', 'Set your sensitivity to 0.1'], ['Who needs a mouse?', 'Bind your shootkey to a key on the keyboard'], ['Thats enough for me', 'Only use one magazine'], ['Who needs a gun?', 'Only use abilities and the knive'], ['Half is enough', 'Only shoot enemies if your weapon has less than half a magazine or less'], ['CS:GO', 'Dont use abilities'], ['My W-Key is stuck', 'You have to hold W for the whole round. Sneaking is forbidden'], ['We dont need to run!', 'You are only allowed to crouch'], ['Please be silent!', 'You are only allowed to shift'], ['Where is my Oscar?', 'All callouts have to be related to movies'], ['This fits my agent', 'You can only buy a weapon that starts with the letter your agents starts with. If there is no weapon you need to use a stinger'],  ['Kill my double please', 'You have eliminate doubles of your teams agents first. Only after that you can shoot other enemies'], ['Watch out', 'You are not allowed to pull out your knife'], ['Bugs Bunny', 'You have to jump during the whole round'], ['You wont get up here!', 'You are not allowed to jump'], ['The floor is lava', 'You are not allowed to touch the ground before the spike was planted. You can touch the ground during buy phase']];
var roundsPlayed = 0;
var stratsLeft = [];
var newStratIndex = 0;
window.onload = function() {
    start();
};
document.addEventListener('keydown', generateStrat);


function generateStrat(){

    //Generate index of next strat
    newStratIndex = Math.floor(Math.random()*stratsLeft.length);

    //remove strat from list and display it
    console.log(stratsLeft.length + ' | ' + newStratIndex + '|' + stratsLeft[newStratIndex][1]);
    document.getElementById("stratTitleText").textContent = stratsLeft[newStratIndex][0];
    document.getElementById("stratText").textContent = stratsLeft[newStratIndex][1];

    navigator.clipboard.writeText(stratsLeft[newStratIndex][0] + ' | ' + stratsLeft[newStratIndex][1]);

    if(stratsLeft.length > 2){
        stratsLeft.splice(newStratIndex, 1);
    }else{
        resetList();
    }
}

function resetList(){
    stratsLeft = strats.slice();
}

function start(){
    resetList();
}