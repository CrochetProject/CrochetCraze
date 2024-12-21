console.log("hello");
function lastModified()
{
    let modiDate=new Date(document.lastModified);
    let showAs=(modiDate.getMonth()+1)+ "/" +modiDate.getDate()+ "/" +modiDate.getFullYear();
    return showAs
}
document.write ("Last updated on ")
document.write (lastModified() );
document.write ("");

function Menubar() {
    var x = document.getElementById("navCont");
    if (x.classList.contains("scrolled")) {
        x.classList.toggle("responsive");
    } else {
        x.classList.toggle("responsive");
    }
}
document.addEventListener("DOMContentLoaded", function () {

    let footer = document.getElementsByTagName("footer");
    let body = document.getElementsByTagName("body");
    var bodyHeight = body.style.height;
    console.log(bodyHeight);
    var windowHeight = window.innerHeight;
    console.log(windowHeight);

    if (bodyHeight > windowHeight) {
        footer.style.bottom = `0`;
    }else {}


    const isHoverableDevice = window.matchMedia('(hover: hover) and (pointer: fine)');
    console.log(isHoverableDevice);
    let scrollTimeout;
    let prevScrollPos = window.scrollY; //positionY before scroll
    // console.log(`Before: ${prevScrollPos}`);
    const menu = document.getElementById("navCont");

    if(isHoverableDevice.matches === false) {
        menu.classList.add("stick");
        menu.style.padding = "0";
    }
    else{
        window.addEventListener("scroll", function () {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(function () {
                const currentScrollPos = window.scrollY;//positionY after scroll
                console.log(`After: ${currentScrollPos}`);

                if (currentScrollPos > prevScrollPos) {
                    menu.style.transform = "translateY(-100%)";//retract
                } else {
                    menu.style.transform = "translateY(0)";//stay
                }

                if (currentScrollPos > 0) {
                    menu.classList.add("scrolled");
                } else {
                    menu.classList.remove("scrolled");
                }
                prevScrollPos = currentScrollPos;

            }, 15);

        });
    }
    $('a[href^="#"]').on("click", function (e) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $("html, body").animate(
                {
                    scrollTop: target.offset().top,
                },
                500
            );
            Menubar(); // Toggle menu
        }
    });
});

