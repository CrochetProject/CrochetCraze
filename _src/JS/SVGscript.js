window.addEventListener('DOMContentLoaded', init, false)
//GSsvg is ID of <object> containing Granny Square SVG
function init(){
    // let svgObject = document.getElementById('GSobject').contentDocument;
    let chain = document.getElementsByClassName('chain');
    let doubleStitch = document.getElementsByClassName('doubleStitch');
    let slipSt = document.getElementsByClassName('slipSt');

    for ( let i = 0; i < chain.length; ++i ){
        chain[i].addEventListener('mouseover', stitchHighlight, false);
        chain[i].addEventListener('mouseout', stitchMouseOut, false);
    }
    for ( let i = 0; i < doubleStitch.length; ++i ){
        doubleStitch[i].addEventListener('mouseover', stitchHighlight, false);
        doubleStitch[i].addEventListener('mouseout', stitchMouseOut, false);
    }
    for ( let i = 0; i < slipSt.length; ++i ){
        slipSt[i].addEventListener('mouseover', stitchHighlight, false);
        slipSt[i].addEventListener('mouseout', stitchMouseOut, false);
    }
}
function stitchHighlight(){
    this.classList.toggle("on");
    const divDBST = document.getElementById('divDBST');
    const divCH = document.getElementById('divCH');
    const divSlipSt = document.getElementById('divSlipSt');

    if(this.classList.contains("chain")){
        divCH.classList.toggle("display");
    }else if(this.classList.contains("doubleStitch")){
        divDBST.classList.toggle("display");
    }else if(this.classList.contains("slipSt")){
        divSlipSt.classList.toggle("display");
    }else{}

    this.addEventListener('mousemove', (e) => {
        const height = divDBST.offsetHeight;
        const width = divDBST.offsetWidth;
        // pos= `(${pageX}, ${pageY})`;
        var w = window.innerWidth;

        if(w > 1000){
            setTimeout(() => {
                divDBST.style.left = `${e.clientX + width/2}px`;//setting position based off X pos
                divDBST.style.top = `${e.clientY - height}px`;//setting position based off Y pos
                divCH.style.left = `${e.clientX + width/2}px`;
                divCH.style.top = `${e.clientY - height}px`;
                divSlipSt.style.left = `${e.clientX + width/2}px`;
                divSlipSt.style.top = `${e.clientY - height}px`;
            }, 0);
        }
        else if(w > 720){
            setTimeout(() => {
                divDBST.style.left = `${e.clientX}px`;//setting position based off X pos
                divDBST.style.top = `${e.clientY - height}px`;//setting position based off Y pos
                divCH.style.left = `${e.clientX + width/2}px`;
                divCH.style.top = `${e.clientY - height}px`;
                divSlipSt.style.left = `${e.clientX + width/2}px`;
                divSlipSt.style.top = `${e.clientY - height}px`;
            }, 0);
        }else{}
    });
}
function stitchMouseOut(){
    this.classList.toggle("on");
    const divDBST = document.getElementById('divDBST');
    const divCH = document.getElementById('divCH');
    const divSlipSt = document.getElementById('divSlipSt');
    if(this.classList.contains("chain")){
        divCH.classList.toggle("display");
    }else if(this.classList.contains("doubleStitch")){
        divDBST.classList.toggle("display");
    }else if(this.classList.contains("slipSt")){
        divSlipSt.classList.toggle("display");
    }else{}
}