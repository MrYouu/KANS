//  The JavaScript code is property to Mr. You (Kristiyan Valchev) and can only be viewed
//  If you want to use part of the code, please first contact me: krisvalchev@gmail.com

var isOpened = false;
function openCloseSideMenu()
{
    if (isOpened)
    {
        document.getElementById("pageHolder").style.transform = "translateX(0px)";
        document.getElementById("html").style.overflowY = "auto";
        document.getElementById("sideMenuCloseButton").style.display = "none";

        document.getElementById("threeLineButton 1").style.transform = "rotate(0deg)";
        document.getElementById("threeLineButton 1").style.top = "1";
        document.getElementById("threeLineButton 2").style.transform = "translateX(0%)";
        document.getElementById("threeLineButton 2").style.opacity = "1";
        document.getElementById("threeLineButton 3").style.transform = "rotate(0deg)";
        document.getElementById("threeLineButton 3").style.bottom = "0";

        isOpened = false;
    }
    else if (!isOpened)
    {
        document.getElementById("pageHolder").style.transform = "translateX(-210px)";
        document.getElementById("html").style.overflowY = "hidden";
        document.getElementById("sideMenuCloseButton").style.display = "unset";

        document.getElementById("threeLineButton 1").style.transform = "rotate(45deg)";
        document.getElementById("threeLineButton 1").style.top = "calc(50% - 1.5px)";
        document.getElementById("threeLineButton 2").style.transform = "translateX(-100%)";
        document.getElementById("threeLineButton 2").style.opacity = "0";
        document.getElementById("threeLineButton 3").style.transform = "rotate(-45deg)";
        document.getElementById("threeLineButton 3").style.bottom = "calc(50% - 1.5px)";

        window.scroll(
        {
            top: 0
        });

        isOpened = true;
    }
}

function scrollToContent()
{
    window.scroll(
    {
        top: 560
    });
}