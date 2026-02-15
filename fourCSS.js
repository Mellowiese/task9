const nameInput = document.getElementById("nameInput");
const errorMessage = document.getElementById("errorMessage");

function handleSubmit() {
    const name = nameInput.value.trim();
    if (name === "") {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Where's the Name? >:(";
        errorMessage.className = "text-danger text-center mt-2";
        return false;
    } else {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Alright! Click Next to continue.";
        errorMessage.className = "text-success text-center mt-2";
        return true;
    }
}

nameInput.addEventListener("input", function() {
    errorMessage.style.display = "none";
});