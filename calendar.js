// 以下為月曆功能
const calendar = document.getElementById("calendar")
const today = new Date()
const year = today.getFullYear()
const month = today.getMonth() //0為1月

const firstDay = new Date(year, month, 1).getDay() //回傳0~6 取得當月總天數
const totalDays = new Date(year, month + 1, 0).getDate() //用迴圈產生格子

// 步驟 1：加空白格子（為了讓第一天正確對齊星期幾）
for (let i = 0; i < firstDay; i++) {
  const blank = document.createElement("div")
  blank.classList.add("blank")
  calendar.appendChild(blank)
}

// 步驟 1：加空白格子（為了讓第一天正確對齊星期幾）
for (let i = 1; i <= totalDays; i++) {
  const daybox = document.createElement("div")
  daybox.textContent = i
  daybox.classList.add("day")

  daybox.addEventListener("click", function () {
    if (currentMood !== "") {
      daybox.textContent = `${i} ${currentMood}`
    }
  })

  calendar.appendChild(daybox)
}
