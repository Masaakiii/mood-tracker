const calendar = document.getElementById("calendar")

for (let i = 1; i <= 31; i++) {
  const daybox = document.createElement("div")
  daybox.textContent = i
  calendar.appendChild(daybox)
}

for (let i = 0; i < firstDay; i++) {
  const blank = document.createElement("div")
  blank.classList.add("blank")
  calendar.appendChild(blank)
}

for (let i = 1; i <= totalDays; i++) {
  const baybox = dicument.createElement("div")
  daybox.textContent = i
  daybox.classList.add("day")
  calendar.appendChild(daybox)
}

// 以下為月曆功能
const today = new Date()
const year = today.getFullYear()
const month = today.getMonth() //0為1月

const firstDay = new Date(year, month, 1).getDay() //回傳0~6
//取得當月總天數
const totalDays = new Date(year, month + 1, 0).getDate()
//用迴圈產生格子
