let players = [];
let firstPlayer = "";

function joinGame() {
    let screenName = document.getElementById("screenName").value;
    if (screenName.trim() !== "") {
        players.push(screenName);
        document.getElementById("playerView").style.display = "none";
        document.getElementById("hostView").style.display = "block";
    }
}

function resetBuzzer() {
    firstPlayer = "";
    document.getElementById("firstPlayer").innerHTML = "";
}

// Simulating the buzzer click event
function simulateBuzzerClick() {
    if (players.length > 0) {
        firstPlayer = players[0];
        document.getElementById("firstPlayer").innerHTML = "First Player: " + firstPlayer;
    }
}
