var loop = window.setInterval(()=>{
    currDate = new Date();
    endDate = new Date("April 3, 2023 04:30");

    sub = new Date(endDate-currDate)

    dateString = (sub.getMonth()+":"+sub.getDate()+":"+sub.getHours()+":"+sub.getMinutes()+":"+sub.getSeconds());
    document.getElementById("timer").innerText= dateString
}, 1)

let imgs = document.getElementsByTagName("img")

function clearImg(){
    for(let i=0; i<imgs.length; i++){
        imgs[i].style.opacity = "0"
    }
}

clearImg()
imgs[0].style.opacity = "0.5"
var currPic = 1

var change = window.setInterval(()=>{
    imgs[currPic].style.opacity = "0.5"
    let picBefore = currPic-1
    if (picBefore == -1){
        picBefore = imgs.length-1
    }
    console.log(picBefore)
    imgs[picBefore].style.opacity = "0"
    currPic=currPic + 1
    if (currPic == imgs.length){
        currPic= 0;
    }
}, 10000)
