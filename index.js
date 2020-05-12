
const bg = document.querySelector('#bg')
const text = document.querySelector('#text')
console.log(bg)
console.log(text)

function overText () {
text.style.cursor = 'pointer'
text.src = 'titlepage/entervirtualtour.png'
}

function placeBG () {
const bgAR = bg.width / bg.height
//   console.log("bgAR " + bgAR)
const textAR = text.width / text.height
//   console.log("textAR " + textAR)
const winAR = innerWidth / innerHeight
//   console.log("winAR " + winAR)
const bgVStextHeight = text.height / bg.height
const bgVStextWidth = text.width / bg.width
// console.log(`${bgVStextHeight}, ${bgVStextWidth}`)
bg.style.position = 'absolute'
text.style.position = 'absolute'
text.style.zIndex = 2
if (winAR > bgAR) { // when screen is wider than bg ratio
    console.log("i'm here")
    bg.style.width = innerHeight * bgAR + 'px'
    bg.style.height = innerHeight + 'px'
    text.style.width = bgVStextWidth * innerHeight * bgAR + 'px'
    text.style.height = bgVStextHeight * innerHeight + 'px'
    bg.style.top = '0px'
    bg.style.left = (innerWidth / 2) - (bg.width / 2) + 'px'
    text.style.top = '34vh'
    text.style.left = (innerWidth / 2) - (bg.width / 2) + (bg.width * 0.58) + 'px'
    console.log(`${text.style.width}, ${text.style.height}, ${text.style.top}, ${text.style.left}`)
    // 231.951px, 218.262px, 34vh, 727.6px
} else { // when screen is tighter than bg ratio
    bg.style.width = innerWidth + 'px';
    bg.style.height = innerWidth / bgAR + 'px';
    text.style.width = bgVStextWidth * innerWidth + 'px';
    text.style.height = bgVStextHeight * (innerWidth / bgAR) + 'px';
    bg.style.top = (innerHeight / 2) - (bg.height / 2) + 'px';
    bg.style.left = '0px';
    text.style.top = (innerHeight / 2) - (bg.height / 2) + (bg.height * 0.34) + 'px';
    text.style.left = '58vw';
    console.log(`${text.style.width}, ${text.style.height}, ${text.style.top}, ${text.style.left}`)
}
}

function openTextLink () {
const url = 'location1.html'
const win = window.open(url, '_self')
}

window.addEventListener('load', placeBG)
window.addEventListener('resize', placeBG)

text.addEventListener('mouseover', overText)
text.addEventListener('click', openTextLink)
