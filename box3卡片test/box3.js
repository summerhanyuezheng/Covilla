//box3里面四个cardItem动态
let cardItems = document.querySelectorAll(".cardItem")

cardItems.forEach(cardItem => {
  cardItem.addEventListener("mouseenter", () => {
    cardItem.style.scale = 1.05
    cardItem.style.zIndex = "1"
    cardItem.style.borderRadius = "10px"
  })

  cardItem.addEventListener("mouseleave", () => {
    cardItem.style.scale = 1
    cardItem.style.zIndex = "0"
    cardItem.style.borderRadius = "0px"
  })
})
