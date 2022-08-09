var clock = document.querySelector(".clock");
var lrgebar = document.querySelector(".largebar");
var smlbar = document.querySelector(".smallbar");

var langle=0;
for(i=0;i<=5;i++){
    langle=langle+30;
var newlarge = document.createElement("div");
newlarge.setAttribute("class","largebar");
console.log(newlarge)
newlarge.innerHTML = lrgebar.innerHTML;
console.log(newlarge);
newlarge.style.transform= "rotate(" + langle + "deg)"
clock.appendChild(newlarge);
}
var sangle;
var min = 1;
for(i=0;i<=30;i++){
    min++;
    sangle = min*6;
    
var newsmall = document.createElement("div");
newsmall.setAttribute("class","smallbar");
console.log(newsmall);
newsmall.innerHTML = smlbar.innerHTML;
console.log(newsmall);
newsmall.style.transform = "rotate(" + sangle + "deg)"
clock.appendChild(newsmall);
}