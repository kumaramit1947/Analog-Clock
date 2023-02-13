function makeClockFrame() {
    let clockFrame = document.createElement("div");
    clockFrame.classList.add("clock-frame");
    let clockBrand=document.createElement("div");
    clockBrand.textContent="SAMAY";
    clockBrand.classList.add("clock-brand");
    clockFrame.append(clockBrand);
    let clockCenter = document.createElement("div");
    clockCenter.classList.add("clock-center");
    clockFrame.append(clockCenter);
    let rotateAngle = 30;
    for (let i = 12; i > 0; i--) {
        let numberPlate = document.createElement("div");
        numberPlate.classList.add("numbers-plate");
        let numberBox = document.createElement("div");
        numberBox.classList.add("number-box");
        numberBox.textContent = i;
        numberBox.style.transform = `rotate(-${rotateAngle * i}deg)`;
        numberPlate.append(numberBox);
        numberPlate.style.transform = `translateX(-50%) rotate(${rotateAngle * i}deg)`;
        clockFrame.append(numberPlate);
    }
    return clockFrame;
}
function makeClockHands(){
    let hourHand=document.createElement("div");
    hourHand.classList.add("hour-hand","clock-hand");
    let minuteHand=document.createElement("div");
    minuteHand.classList.add("minute-hand","clock-hand");
    let secondHand=document.createElement("div");
    secondHand.classList.add("second-hand","clock-hand");
    return {hourHand, minuteHand, secondHand};
}
function setClockHands(hourHand, minuteHand, secondHand){
    const time=new Date();
    const hr=time.getHours();
    const min=time.getMinutes();
    const sec=time.getSeconds();
    let transformStr="translate(-50%,-50%) ";
    secondHand.style.transform=transformStr+`rotate(${sec*6}deg)`;
    minuteHand.style.transform=transformStr+`rotate(${(min+(sec/60))*6}deg)`;
    hourHand.style.transform=transformStr+`rotate(${(hr+(min/60)+(sec/3600))*30}deg)`;
}
let clockInterior = document.getElementsByClassName("clock-interior")[0];
const {hourHand, minuteHand, secondHand} = makeClockHands();
let clockFrame = makeClockFrame();
clockFrame.append(hourHand);
clockFrame.append(minuteHand);
clockFrame.append(secondHand);
setClockHands(hourHand, minuteHand, secondHand);
clockInterior.append(clockFrame);
setInterval(()=>{setClockHands(hourHand, minuteHand, secondHand)},1000);
