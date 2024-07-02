let total = 0;
function handleCLikBtn(target){
    const selectedItemsElement = document.getElementById('selected-items')
  const itemName = (target.parentNode.childNodes[1].innerText)
  const exsitingItem = document.getElementsByTagName('li')
  for(let items of exsitingItem){
    if(items.innerText == itemName){
        alert('Already added ')
        return
    }
  }
  const li = document.createElement('li')
  li.innerText = itemName
  console.log(li)
  selectedItemsElement.appendChild(li)
//   console.log(target.parentNode.childNodes[5].innerText.split(' ')[1])
   const priceSrring = (target.parentNode.childNodes[5].childNodes[1].innerText)
   const price = parseFloat(priceSrring)
   total = total+price
   console.log(total)
   const showTotal = document.getElementById('total')
   showTotal.innerText = total
  




  
}
//   const priviousSnowRosePriceElement = document.getElementById('snow-rose-price')
//   const priviousSnowRosePriceString = priviousSnowRosePriceElement.innerText
//   const priviousSnowRosePrice = parseFloat(priviousSnowRosePriceString)
// //   console.log(priviousSnowRosePrice)
//   const priviousBlackRosePriceElement = document.getElementById('black-rose-price')
//   const priviousBlackRosePriceString = priviousBlackRosePriceElement.innerText
//   const priviousBlackRosePrice = parseFloat(priviousBlackRosePriceString)
// //   console.log(priviousBlackRosePrice)
//   const priviousBlueRosePriceElement = document.getElementById('blue-rose-price')
//   const priviousBlueRosePriceString = priviousBlueRosePriceElement.innerText
//   const priviousBlueRosePrice = parseFloat(priviousBlueRosePriceString)
// //   console.log(priviousBlueRosePrice)
//   const total = priviousBlackRosePrice+priviousBlueRosePrice+priviousSnowRosePrice
//   console.log(total)