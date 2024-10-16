window.addEventListener('DOMContentLoaded', init, false)



//GSsvg is ID of <object> containing Granny Square SVG

// console.log("hello");


function init(){

    console.log("hello");
    let svgObject = document.getElementById('GSobject').contentDocument;
// let svg = svgObject.contentDocument;
    console.log(svgObject);

    let chain = svgObject.getElementsByClassName('chain');
    console.log(chain.length);
    let doubleStitch = svgObject.getElementsByClassName('doubleStitch');
    let slipSt = svgObject.getElementsByClassName('slipSt');

    console.log("page is fully loaded");
    // console.log(chain.className);
    // window.alert("hello");

    for ( let i = 0; i < chain.length; ++i ){
        chain[i].addEventListener('mouseover', stitchHighlight, false);
        console.log("this chain has a listener");
    }
    for ( let i = 0; i < doubleStitch.length; ++i ){
        doubleStitch[i].addEventListener('mouseover', stitchHighlight, false);
        console.log("this doubleStitch has a listener");
    }
    for ( let i = 0; i < slipSt.length; ++i ){
        slipSt[i].addEventListener('mouseover', stitchHighlight, false);
        console.log("this slipSt has a listener");
    }
    // event.stopPropagation();

}

function stitchHighlight(){
    // console.log(this);
    console.log("Inside stitchHighlight");
    this.style.filter = "drop-shadow(0px 0px 25px rgb(245 237 22 / 1))";
    this.style.stroke = "yellow";
    this.style.strokeWidth = "10px";
    this.addEventListener('mouseout', stitchMouseOut, false);




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
    this.style.filter = "none";
    // this.style.strokeWidth = "none";
    this.style.stroke = "none";
}

