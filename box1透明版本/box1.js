//navtop里的destination动态

let navShow = document.querySelector(".navshow")
let navDesBtn = document.querySelector(".navBtn")

navDesBtn.onclick = () => {
  if (navShow.style.opacity == 0) {
    navShow.style.opacity = 1
    navShow.style.scale = 1
  } else {
    navShow.style.scale = 0.8
    navShow.style.opacity = 0
  }
}
console.log(navShow)
//<-------------------------------->
//navtop里的contact us动态
let navContact = document.querySelector(".navContact")

navContact.onmouseenter = () => {
  navContact.style.scale = 1.1

  navContact.style.backgroundColor = "grey"
}
navContact.onmouseout = () => {
  navContact.style.scale = 1
  navContact.style.backgroundColor = "#FFF"
}
