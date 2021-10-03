const copy = document.getElementById('copy');

let colors = ["#40E0D0","#FF7F50","#6495ED","#FFBF00","#DE3163","#FFA600","#B200FF","#FF005D","#5694EE","#72E824"];
let i = 0, color;
document.querySelector("a").addEventListener("click", () => {
    color = document.getElementById("input").value;
    if (color && isColor(color)) {
        document.getElementById("input").value = '';
    } else {
        color = getRandomGradient();
        if (Math.random() < 0.5) {
            i = i < colors.length - 1 ? ++i : 0;
            color = colors[i];
        }
    }
    document.querySelector("body").style.background = color;
});

function isColor(strColor){
    const s = new Option().style;
    s.color = strColor;
    const test1 = s.color.replaceAll(' ', '') === strColor.replaceAll(' ', '');
    const test2 = /^#[0-9A-Fa-f]{6}$/i.test(strColor);
    const test3 = /^#[0-9A-Fa-f]{8}$/i.test(strColor);
    return test1 || test2 || test3;
}

function getRandomGradient() {
    const random1 = Math.floor(Math.random() * colors.length);
    const random2 = Math.floor(Math.random() * colors.length);
    const degree = Math.floor(Math.random() * 360);
    return `linear-gradient(${degree}deg, ${colors[random1]}, ${colors[random2]})`
}

/*
let color = ["#40E0D0","#FF7F50","#6495ED","#FFBF00","#DE3163","#FFA600","#B200FF","#FF005D","#5694EE","#72E824"];
let i = 0;
document.querySelector("p").addEventListener("click", () => {
    i = i < color.length ? ++i : 0;
    document.querySelector("body").style.background = color[i];
});

*/
const button = document.querySelector('a');
button.addEventListener('click', function(e){

    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples);

     setTimeout(() => {
         ripples.remove()
        },1000);
     })

let copyTimeout;
copy.onclick = async ev => {
    clearTimeout(copyTimeout);
    try {
        await navigator.clipboard.writeText(color);
        ev.target.innerText = "Copied to clipboard";
    } catch (e) {
        ev.target.innerText = "Unable to copy";
    }
    copyTimeout = setTimeout(() => ev.target.innerText = "Click to copy color", 1200);
};
