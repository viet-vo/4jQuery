// Global Variables
// ===================================================================================
var win = 0;
var loss = 0;


// Functions to Call
// ===================================================================================


function startGame() {
    var stat1 = [120, 0, 8, "assets/images/evilAbed.jpg"];
    var stat2 = [115, 0, 9, "assets/images/anniesBobs.jpg"];
    var stat3 = [100, 0, 12, "assets/images/troyKickpuncher.jpg"];
    var stat4 = [135, 0, 5, "assets/images/curlyBoi.jpg"];
    var list = [stat1, stat2, stat3, stat4];
    var player = [];
    var opp = [];
}

function selectPlayer() {
    $(".btn").click(function () {
    
    });
}

function selectOpp() {
    $(".btn").click(function () {
    

        opp[1] = opp[1] + opp[2];
    });
}
function pressButton() {
    $(".btn").click(function () {
        console.log("test");
        function tradeBlows() {
            player[1] = player[1] + player[2]
            player[0] = player[0] - opp[1]
            opp[0] = opp[0] - player[1]
        }

    });
}

// Main Process
// ===================================================================================


startGame();
selectPlayer();
selectOpp();
pressButton();



// Test
// ===================================================================================

console.log("test================================================test");