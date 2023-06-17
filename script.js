let players = [];
let firstPlayer = "";
let isHost = false;

function joinGame() {
    let screenName = document.getElementById("screenName").value;
    if (screenName.trim() !== "") {
        players.push(screenName);
        document.getElementById("playerView").style.display = "none";
        document.getElementById("hostView").style.display = "block";
        document.getElementById("resetButton").disabled = false;
    }
}

function authenticateHost() {
    let password = document.getElementById("password").value;
    if (password === "test123") {
        isHost = true;
        document.getElementById("hostControls").style.display = "block";
    } else {
        alert("Invalid password. You are not the game show host.");
    }
}

function resetBuzzer() {
    if (isHost) {
        firstPlayer = "";
        document.getElementById("firstPlayer").innerHTML = "";
    } else {
        alert("You are not authorized to reset the buzzer.");
    }
}

// Simulating the buzzer click event
function simulateBuzzerClick() {
    if (players.length > 0) {
        firstPlayer = players[0];
        document.getElementById("firstPlayer").innerHTML = "First Player: " + firstPlayer;
    }
}
