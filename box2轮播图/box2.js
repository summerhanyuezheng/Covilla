//box2 轮播图代码
console.log("js script")
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")
let inner = document.querySelector(".box2inner")
let firstImg = document.querySelector(".firstImg")
// clone是firstImg 的复制，用来之后无缝切换使用
// let clone = firstImg.cloneNode()
//把复制的图片加入到inner里
// inner.appendChild(clone)

console.log(next)
let images = document.querySelectorAll(".box2inner img")

let index = 1
images[index].style.transform = "scale(1.2)"

next.onclick = () => {
  index++
  // Reset all images scale
  images.forEach(img => (img.style.transform = "scale(1)"))

  if (index == 5) {
    setTimeout(() => {
      index = 0
      inner.style.transition = `none`
      inner.style.transform = `translate(-${index * 600}px)`
      // Scale the image at index 0 when index is 5
      images[1].style.transform = "scale(1.2)"
    }, 500)
  } else {
    // Scale current image
    images[index].style.transform = "scale(1.2)"
  }

  //在最后一张点击next button时， 以0.5s过渡到clone的第一张

  inner.style.transition = `0.5s`
  inner.style.transform = `translate(-${index * 640}px)`
  console.log(index)
}

prev.onclick = () => {
  index--
  images.forEach(img => (img.style.transform = "scale(1)")) // Reset all images scale
  if (index == -1) {
    setTimeout(() => {
      index = 4
      inner.style.transition = `none`
      inner.style.transform = `translate(-${index * 640}px)`
      images[3].style.transform = "scale(1.2)"
    }, 500)
  } else {
    images[index].style.transform = "scale(1.2)" // Scale current image
  }

  inner.style.transform = `translate(-${index * 640}px) `
  inner.style.transition = `0.5s`
  console.log(index)
}
