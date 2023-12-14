const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    console.log("Clicked the save button!");
    e.preventDefault()
}