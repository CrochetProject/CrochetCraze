window.addEventListener('DOMContentLoaded', init, false)
//GSsvg is ID of <object> containing Granny Square SVG
function init(){
    let svgObject = document.getElementById('GSobject').contentDocument;
    let chain = svgObject.getElementsByClassName('chain');
    let doubleStitch = svgObject.getElementsByClassName('doubleStitch');
    let slipSt = svgObject.getElementsByClassName('slipSt');
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
    const info = document.getElementById('DbStBubble');
    // document.addEventListener('mousemove', (e) => {
    //     info.style.display = "content";
    //     const height = info.offsetHeight;
    //     const width = info.offsetWidth;
    //     console.log(width); //sizing of div#info.info
    //     console.log(height);
    //     // pos= `(${pageX}, ${pageY})`;
    //
    //
    //
    //     setTimeout(() => {
    //         info.style.left = `${e.clientX + width/2}px`;
    //         info.style.top = `${e.clientY - height}px`;
    //
    //     }, 20);
    // });
}
function stitchMouseOut(){
    this.classList.toggle("on");
}