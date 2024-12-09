
//     console.log("HELLO");
//     let video = document.getElementById('vid');
//     video.addEventListener('play', vidPlay);
//     video.addEventListener('pause',vidPause);
//     video.addEventListener('seeked', vidMovedTo);
//     console.log(video.currentTime);
//     console.log(video.seekable);
//
// function vidPlay(){
//     console.log("user played");
//     let video = document.getElementById('vid');
//     video.addEventListener('seeked', vidMovedTo);
// }
// function vidPause() {
//     console.log("user paused");
//     let video = document.getElementById('vid');
//     video.addEventListener('seeked', vidMovedTo);
//     console.log(video.currentTime);
//     console.log(video.seekable);
//
// }
// function vidMovedTo(){
//     let video = document.getElementById('vid');
//     console.log("user is seeked to:");
//     console.log(video.currentTime);
// }



function lastModified()
{
    let modiDate=new Date(document.lastModified);
    let showAs=(modiDate.getMonth()+1)+ "/" +modiDate.getDate()+ "/" +modiDate.getFullYear();
    return showAs
}
document.write ("Last updated on ")
document.write (lastModified() );
document.write ("");

//works ^^^



