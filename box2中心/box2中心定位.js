let prev = document.querySelector(".prev")
let next = document.querySelector(".next")
let inner = document.querySelector(".box2inner")
let firstImg = document.querySelector(".firstImg")
let images = document.querySelectorAll(".box2inner img")

let index = 2
images[index].style.transform = "scale(1.05)"

function centerImage() {
  // The width of the scaled image
  const scaledWidth = images[index].width * 1.05
  // Calculate the position needed to center the image in the viewport
  const centerPosition = (window.innerWidth - scaledWidth) / 2
  console.log(index, centerPosition)
  // The position of the image relative to its container
  const imagePosition = (images[index].width + 40) * index // Image width + 40px margin

  console.log(index, imagePosition)

  const translateX = centerPosition - imagePosition
  inner.style.transform = `translateX(${translateX}px)`
}

next.onclick = () => {
  index++
  // Reset all images scale
  images.forEach(img => (img.style.transform = "scale(1)"))

  if (index == 5) {
    setTimeout(() => {
      index = 1
      inner.style.transition = `none`
      images[1].style.transform = "scale(1.05)"
      centerImage()
    }, 500)
  } else {
    // Scale current image
    images[index].style.transform = "scale(1.05)"
    centerImage()
  }
  inner.style.transition = `0.5s`
}

prev.onclick = () => {
  index--
  images.forEach(img => (img.style.transform = "scale(1)")) // Reset all images scale

  if (index == -1) {
    setTimeout(() => {
      index = 3
      inner.style.transition = `none`
      images[3].style.transform = "scale(1.05)"
      centerImage()
    }, 500)
  } else {
    images[index].style.transform = "scale(1.05)" // Scale current image
    centerImage()
  }
  inner.style.transition = `0.5s`
}

// Initially center the first image when the page loads.
centerImage()
