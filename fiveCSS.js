let crabCount = 0;

function incrementCrabs() {
    crabCount++;
    updateDisplay();
}

function decrementCrabs() {
    if (crabCount > 0) {
        crabCount--;
    }
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById("crabCount");
    display.textContent = crabCount + " Crabs";
}