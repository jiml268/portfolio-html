const infotext = document.querySelector('.intro');
console.log.infotext
infotext.addEventListener('mouseover', changecolor)




function changecolor(e) {
    console.log(e.target)
    console.log(e.target.style)
    console.log(e.target.className)
    if (e.target.nodeName !== "SPAN") {
        return
    }
    if (e.target.className !== "chande-color-name") {
        if (e.target.style.color !== "gray") {
            e.target.style.color = "gray"
        } else {
            e.target.style.color = "black"
        }
    } else {
        if (e.target.style.color !== "#735cad") {
            e.target.style.color = "#735cad"
        } else {
            e.target.style.color = "blue"
        }
    }
}
