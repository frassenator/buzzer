let players = [];
let buzzerClicks = {};
let isHost = false;

function joinGame() {
    let screenName = document.getElementById("screenName").value;
    if (screenName.trim() !== "") {
        players.push(screenName);
        document.getElementById("actualScreenName").value = screenName;
        document.getElementById("userControls").style.display = "none";
        document.getElementById("hostView").style.display = "none";
        document.getElementById("hostControls").style.display = "none";
    }
}

function buzz() {
    if (players.length > 0) {
        let screenName = players[0];
        let timestamp = new Date().getTime();
        buzzerClicks[screenName] = timestamp;
        displayFirstPlayer();
    }
}

function resetBuzzer() {
    buzzerClicks = {};
    displayFirstPlayer();
}

function displayFirstPlayer() {
    let firstPlayer = getFirstPlayer();
    if (firstPlayer) {
        document.getElementById("firstPlayer").innerHTML = "First Player: " + firstPlayer;
    } else {
        document.getElementById("firstPlayer").innerHTML = "";
    }
}

function getFirstPlayer() {
    let sortedClicks = Object.entries(buzzerClicks).sort((a, b) => a[1] - b[1]);
    if (sortedClicks.length > 0) {
        return sortedClicks[0][0];
    }
    return null;
}

function authenticateHost() {
    let password = document.getElementById("password").value;
    if (password == "password") {
        isHost = true;
        alert("Logged in as host");
        document.getElementById("hostControls").style.display = "none";
        document.getElementById("hostView").style.display = "block";
        document.getElementById("resetButton").disabled = false;
    } else {
        alert("Invalid password. You are not the game show host.");
    }
}
