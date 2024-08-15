
var listJob = document.querySelectorAll(".item");
listJob.forEach(
    (item) => {
        
    }
)
var counter = 0;
function switchItem() {
    var widthList = [261,176,364]
    var itemTarget = document.querySelectorAll(".item")[counter];
    itemTarget.classList.remove("item-selected");
    itemTarget.classList.add("item-deselected");
    
    counter = (counter==2)?0:++counter;
    itemTarget = document.querySelectorAll(".item")[counter];
    realSize = widthList[counter];
    console.log(counter, realSize);
    itemTarget.classList.add("item-selected");
    itemTarget.classList.remove("item-deselected");
    
    itemTarget = document.querySelector(".list");
    setTimeout(() => {itemTarget.style.width = `${realSize}px`},500);
}


setInterval(switchItem,3000);