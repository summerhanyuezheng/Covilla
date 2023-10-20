//navtop里的destination动态

let navShow = document.querySelector(".navshow")
let navDesBtn = document.querySelector(".navBtn")

navDesBtn.addEventListener("click", () => {
  let computedDisplay = window.getComputedStyle(navShow).display
  if (computedDisplay == "none") {
    navShow.style.display = "block"
    navShow.style.transform = "scale(1)"
  } else {
    navShow.style.transform = "scale(0.8)"
    navShow.style.display = "none"
  }
})

document.addEventListener("click", event => {
  if (!navDesBtn.contains(event.target) && !navShow.contains(event.target)) {
    navShow.style.transform = "scale(0.8)"
    navShow.style.display = "none"
  }
})

//<-------------------------------->
//navTop 导航切换
console.log("导航切换")
let back = document.querySelector(".back")
let morePage = document.querySelector(".morePage")
let navtopcovilla = document.querySelector(".navtop .covilla")
let navBtn = document.querySelector(".navBtn")
console.log(back)

window.addEventListener("scroll", () => {
  console.log(window.scrollY) //垂直方向滚动距离  不带单位
  // 滚动到400px时背景完全显示
  if (window.scrollY <= 400) {
    back.style.top = window.scrollY / 5 - 80 + "px"
    morePage.style.opacity = window.scrollY / 5 + "%"
    // Interpolate between white and black colors
    const fraction = window.scrollY / 400 // This will give a value between 0 (at the top) and 1 (at 400px).
    const r = Math.round(255 - fraction * 255)
    const g = Math.round(255 - fraction * 255)
    const b = Math.round(255 - fraction * 255)
    navtopcovilla.style.color = `rgb(${r}, ${g}, ${b})`
    navBtn.style.color = `rgb(${r}, ${g}, ${b})`
  } else {
    back.style.top = 0
    morePage.style.opacity = 1
    navtopcovilla.style.color = "#000000"
    navBtn.style.color = "#000000"
  }
})

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
//<---------------------------->
//box3里的<button>CHOOSE A DESTINATION</button>动态
let box3btn = document.querySelector(".box3btn")
let box3show = document.querySelector(".box3show")

box3btn.onclick = () => {
  if (window.getComputedStyle(box3show).opacity == "0") {
    box3show.style.opacity = 1
    box3show.style.transform = "scale(1)"
    box3show.style.boxShadow = "0 0 9px 1px rgba(192, 192, 192, 0.4)"
  } else {
    box3show.style.transform = "scale(0.8)"
    box3show.style.opacity = 0
  }
}

document.addEventListener("click", event => {
  if (!box3btn.contains(event.target) && !box3show.contains(event.target)) {
    box3show.style.transform = "scale(0.8)"
    box3show.style.opacity = 0
  }
})

//<------------------------------------>
//box3里面四个cardItem动态
let cardItems = document.querySelectorAll(".cardItem")

cardItems.forEach(cardItem => {
  cardItem.addEventListener("mouseenter", () => {
    cardItem.style.scale = 1.05
    cardItem.style.zIndex = "1"
    cardItem.style.borderRadius = "10px"

    cardItem.style.boxShadow = "0 0 9px 1px rgba(192, 192, 192, 0.3)"
  })

  cardItem.addEventListener("mouseleave", () => {
    cardItem.style.scale = 1
    cardItem.style.zIndex = "0"
    cardItem.style.borderRadius = "0px"
    cardItem.style.boxShadow = "none"
  })
})

//<------------------------------------>
//box2 轮播图代码

console.log("js script")
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")
let inner = document.querySelector(".box2inner")
let firstImg = document.querySelector(".firstImg")
// clone是firstImg 的复制，用来之后无缝切换使用
// let clone = firstImg.cloneNode()
// 把复制的图片加入到inner里
// inner.appendChild(clone)

console.log(next)
let images = document.querySelectorAll(".box2inner img")

let index = 1
images[index].style.transform = "scale(1.2)"

next.onclick = () => {
  index++
  // Reset all images scale
  images.forEach(img => (img.style.transform = "scale(1)"))

  if (index == 4) {
    setTimeout(() => {
      console.log("nextSettimeout")
      index = 0
      inner.style.transition = `none`
      // inner.style.transform = `translate(-${(index-1) * 720}px)`
      inner.style.transform = `translate(720px)`
      // Scale the image at index 0 when index is 5
      images[index].style.transform = "scale(1.2)"
    }, 500)
  } else {
    // Scale current image
    images[index].style.transform = "scale(1.2)"
  }
  console.log(index)
  //在最后一张点击next button时， 以0.5s过渡到clone的第一张

  inner.style.transition = `0.5s`
  inner.style.transform = `translate(-${(index - 1) * 720}px)`
  console.log(index)
}

prev.onclick = () => {
  index--
  images.forEach(img => (img.style.transform = "scale(1)")) // Reset all images scale
  if (index == -1) {
    setTimeout(() => {
      console.log("index==-1  settimeout")
      index = 3
      inner.style.transition = `none`
      inner.style.transform = `translate(-${(index - 1) * 747}px)`
    }, 500)
    images[3].style.transform = "scale(1.2)"
  } else if (index == 0) {
    // index == 0 时向右移动是正数
    inner.style.transform = `translate(${(index + 1) * 720 + 47}px) `
    images[index].style.transform = "scale(1.2)" // Scale current image
  } else {
    images[index].style.transform = "scale(1.2)" // Scale current image
    inner.style.transform = `translate(-${(index - 1) * 747}px) `
    inner.style.transition = `0.5s`
  }

  console.log(index)
}

//<--------------------------------------------------------->
//box2 每张card 放大效果
const card = document.querySelectorAll(".slide .card")

card.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transition = "0.3s"
    card.style.scale = 1.05
    card.style.zIndex = "1"
    card.style.boxShadow = "0 0 9px 1px rgba(192, 192, 192, 0.3)"
  })

  card.addEventListener("mouseleave", () => {
    card.style.scale = 1
    card.style.zIndex = "0"
    card.style.boxShadow = "none"
  })
})

//<------------------------------------>
// box5里的tab效果
console.log("box5 tab")
var tab = document.querySelectorAll(".tab")
var content = document.querySelectorAll(".content")
var border = document.querySelectorAll(".border")
var box5inner = document.querySelectorAll(".box5inner")
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
    box5inner.forEach(item => {
      item.style.backgroundColor = "rgba(192, 192, 211, 0.3)"
    })
    for (let j = 0; j <= i; j++) {
      box5inner[j].style.backgroundColor = "#000"
    }

    // 4. Switch the corresponding content below
    content.forEach(c => {
      c.style.display = "none"
    })
    content[i].style.display = "block"
  })
})

//<------------------------------------>
//box10里四张agentCard 动态
const eachAgent = document.querySelectorAll(".eachAgent")

eachAgent.forEach(eachAgent => {
  eachAgent.addEventListener("mouseenter", () => {
    eachAgent.style.transition = "0.5s"
    eachAgent.style.scale = 1.05
    eachAgent.style.zIndex = "1"
    eachAgent.style.boxShadow = "0 0 8px 2px rgba(192, 192, 192, 0.5)"
  })

  eachAgent.addEventListener("mouseleave", () => {
    eachAgent.style.scale = 1
    eachAgent.style.zIndex = "0"
    eachAgent.style.boxShadow = "none"
  })
})

//<--------------------------------------->
//scrollArea动态
let bar = document.querySelector(".bar")
let barBox = document.querySelector(".barBox")

//整个文档高度
//document.documentElement.scrollHeight
//文档可视区域高度
// document.documentElement.clientHeight

//滚动box高度
let barBoxH = barBox.clientHeight

window.addEventListener("scroll", () => {
  // 获取滚动上去的文档高度
  // console.log("滚动上去的文档高度", document.documentElement.scrollTop)
  let docST = document.documentElement.scrollTop
  let docH = document.documentElement.scrollHeight - document.documentElement.clientHeight // This is the scrollable height
  let barAvailableSpace = barBoxH - bar.clientHeight // space where the bar can move

  let top = (barAvailableSpace * docST) / docH
  // Ensuring the bar doesn't move beyond its space:
  top = Math.min(top, barAvailableSpace)
  bar.style.marginTop = top + "px"
})

//逻辑：//  margin-top / barBoxH  =  docST / docH
//小滚动条离滚动盒子上方的距离 / 整个滚动盒子高度 = 文档滚动上去高度 / 整个文档高度
// margin-top = barBoxH * docST / docH

//<--------------------------------------->
//box1里播放键的动画
document.addEventListener("DOMContentLoaded", function () {
  const videoElement = document.querySelector(".hiddenSmall video")
  const outtercircle = document.querySelector(".outtercircle")
  const innercircle = document.querySelector(".innercircle")
  const bigHiddenCircle = document.querySelector(".bigHiddenCircle")
  const hiddenSmall = document.querySelector(".hiddenSmall")

  outtercircle.addEventListener("mouseover", function () {
    videoElement.play()
    videoElement.style.opacity = 1
    outtercircle.style.backgroundColor = "white"
    innercircle.style.backgroundColor = "#081c3a"
    bigHiddenCircle.style.opacity = 1
    hiddenSmall.style.opacity = 1

    let intervalId1, intervalId2
    intervalId1 = setInterval(() => {
      hiddenSmall.style.border = "solid 20px rgba(192, 192, 211, 0.2)"
      bigHiddenCircle.style.border = "solid 20px rgba(192, 192, 211, 0.5)"
    }, 1000)
    intervalId2 = setInterval(() => {
      bigHiddenCircle.style.border = "solid 20px rgba(192, 192, 211, 0.2)"
      hiddenSmall.style.border = "solid 20px rgba(192, 192, 211, 0.5)"
    }, 2000)
  })

  outtercircle.addEventListener("mouseout", function () {
    videoElement.pause()
    videoElement.style.opacity = 0
    outtercircle.style.backgroundColor = "transparent"
    innercircle.style.backgroundColor = "rgba(192, 192, 211, 0.2)"

    bigHiddenCircle.style.border = "solid 20px rgba(192, 192, 211, 0.2)"

    bigHiddenCircle.style.opacity = 0
    hiddenSmall.style.opacity = 0

    clearInterval(intervalId1)
    clearInterval(intervalId2)
  })
})

//<------------------------------------->
//box11 eachpost放大动画
const eachPost = document.querySelectorAll(".eachPost")

eachPost.forEach(eachPost => {
  eachPost.addEventListener("mouseenter", () => {
    eachPost.style.transition = "1s"
    eachPost.style.scale = 1.05
    eachPost.style.zIndex = "1"
    eachPost.style.boxShadow = "3px 3px 5px rgba(192, 192, 192, 0.3)"
  })

  eachPost.addEventListener("mouseleave", () => {
    eachPost.style.scale = 1
    eachPost.style.zIndex = "0"
    eachPost.style.boxShadow = "none"
  })
})

//<------------------------------------->
//.container11 .picDiv背景图放大
const pic = document.querySelector(".container11 .picDiv")
pic.addEventListener("mouseenter", () => {
  pic.style.backgroundSize = "160%"
  pic.style.transition = "background-size 1s ease"
})

pic.addEventListener("mouseout", () => {
  pic.style.backgroundSize = "150%"
})

//<----------------------------------------------->
//box9轮播图
const box9 = document.querySelector(".box9")

// console.log(lastBox.offsetLeft);
// console.log(window.innerWidth);
box9.addEventListener("mouseenter", () => {
  box9.style.marginLeft = "10px"
})
box9.addEventListener("mousemove", function (e) {
  // 鼠标在浏览器可是窗口的 x坐标
  // console.log(e.clientX);
  if (e.clientX <= window.innerWidth / 2) {
    box9.style.marginLeft = "-100px"
  } else {
    box9.style.marginLeft = "-900px"
  }
})
