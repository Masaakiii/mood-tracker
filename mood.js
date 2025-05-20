let mood = "🤔"
let moodColor = "black"
let backgroundColor = "white"
let currentMood = ""

const moodDisplay = document.getElementById("mood")
const canvas = document.getElementById("moodCanvas")
const ctx = canvas.getContext("2d")

function updateCanvas() {
  canvas.style.backgroundColor = backgroundColor
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.font = `${canvas.width * 0.55}px Arial`
  ctx.fillStyle = moodColor
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.fillText(mood, canvas.width / 2, canvas.height / 2)
  canvas.classList.remove("emoji-bounce")
  void canvas.offsetWidth
  canvas.classList.add("emoji-bounce")
}

function setMood(emoji, color, bg = "white") {
  mood = emoji
  currentMood = emoji
  moodColor = color
  backgroundColor = bg
  moodDisplay.textContent = mood
  updateCanvas()
}

document
  .getElementById("happy")
  .addEventListener("click", () => setMood("😊", "green", "#e6ffe6"))
document
  .getElementById("neutral")
  .addEventListener("click", () => setMood("😐", "orange", "#fff8dc"))
document
  .getElementById("sad")
  .addEventListener("click", () => setMood("😢", "red", "#e0f0ff"))
document
  .getElementById("reset")
  .addEventListener("click", () => setMood("🤔", "black", "white"))

window.addEventListener("DOMContentLoaded", updateCanvas)
window.addEventListener("resize", updateCanvas)
