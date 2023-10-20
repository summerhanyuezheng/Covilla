var tab = document.querySelectorAll(".tab")
var content = document.querySelectorAll(".content")
var border = document.querySelectorAll(".border")
var inner = document.querySelectorAll(".inner")
var line = document.querySelector(".line")

tab.forEach((v, i) => {
  v.addEventListener("click", function () {
    // 1. Click tab to adjust the progress bar
    line.style.width = `${(i + 1) * 25}%`

    // 2. All border disappear, corresponding border frame appears
    border.forEach(b => {
      b.style.width = "20px"
      b.style.height = "20px"
      b.style.border = "0px solid #000"
    })
    border[i].style.width = "50px"
    border[i].style.height = "50px"
    border[i].style.border = "2px solid #000"

    // 3. The corresponding button and the inner front become black
    inner.forEach(item => {
      item.style.backgroundColor = "#999"
    })
    for (let j = 0; j <= i; j++) {
      inner[j].style.backgroundColor = "#000"
    }

    // 4. Switch the corresponding content below
    content.forEach(c => {
      c.style.display = "none"
    })
    content[i].style.display = "block"
  })
})
