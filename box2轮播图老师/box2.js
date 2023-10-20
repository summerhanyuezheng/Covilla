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
      console.log('nextSettimeout');
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
console.log(index);
  //在最后一张点击next button时， 以0.5s过渡到clone的第一张

  inner.style.transition = `0.5s`
  inner.style.transform = `translate(-${(index-1) * 720}px)`
  console.log(index)
}

prev.onclick = () => {
  index--
  images.forEach(img => (img.style.transform = "scale(1)")) // Reset all images scale
  if (index == -1) {
    setTimeout(() => {
      console.log('index==-1  settimeout');
      index = 3
      inner.style.transition = `none`
      inner.style.transform = `translate(-${(index-1) * 747}px)`
    }, 500)
    images[3].style.transform = "scale(1.2)"
  } else if(index == 0){
    // index == 0 时向右移动是正数
    inner.style.transform = `translate(${(index+1) * 720 + 47 }px) `
    images[index].style.transform = "scale(1.2)" // Scale current image
  }else {
    images[index].style.transform = "scale(1.2)" // Scale current image
    inner.style.transform = `translate(-${(index-1) * 747}px) `
    inner.style.transition = `0.5s`
  }

  console.log(index)
}
