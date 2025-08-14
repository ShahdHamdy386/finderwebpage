var lighticon = document.getElementById("lighticon");
var thememenu = document.getElementById("thememenu");
var lightmode = document.getElementById("lightmode");
var darkmode = document.getElementById("darkmode");
var checklight = document.querySelector(".checklight");
var checkdark = document.querySelector(".checkdark");
var colorcontrolbutton = document.getElementById("colorcontrolbutton");
var colorMenu = document.getElementById("colorMenu");



lighticon.addEventListener("click", function activated(){
    if (thememenu.style.display == "block"){
        thememenu.style.display = "none";
    }
    else{
        thememenu.style.display = "block";
    }
})


lightmode.addEventListener("click", function () {
    checklight.style.display = "inline";
    checkdark.style.display = "none";
    lighticon.className = "fa-solid fa-sun";
    thememenu.style.display = "none";
    document.documentElement.style.setProperty("--background", "white");
    document.documentElement.style.setProperty("--font", "black");
    document.documentElement.style.setProperty("--secbackground", "#eef1f6");
});

darkmode.addEventListener("click", function () {
    checkdark.style.display = "inline";
    checklight.style.display = "none";
    lighticon.className = "fa-regular fa-moon";
    thememenu.style.display = "none"; 
    document.documentElement.style.setProperty("--background", "#111827");
    document.documentElement.style.setProperty("--font", "white");
    document.documentElement.style.setProperty("--secbackground", "#333d4c");
});

colorcontrolbutton.addEventListener("click", function (event) {
    event.stopPropagation(); 
    colorMenu.style.display = "block";
});


var exit=document.getElementById("exit")
var menu=document.getElementById("menu")

exit.addEventListener("click", function () {
    colorMenu.style.display = "none";
    menu.style.display = "none";

});

var colorPicker = document.getElementById("colorpicker");
var colorCode = document.getElementById("colorcode");

colorPicker.addEventListener("input", function () {
    colorCode.textContent = colorPicker.value;
});

colorPicker.addEventListener("input", function () {
    const pickedColor = colorPicker.value; 
    colorCode.textContent = pickedColor;
    document.documentElement.style.setProperty("--primarycolor", pickedColor);
});


var menulist=document.getElementById("menulist");
var exit2=document.getElementById("exit2");
var menu=document.getElementById("menu");

exit2.addEventListener("click", function () {
    menulist.style.display = "none";
});

menu.addEventListener("click", function () {
    menulist.style.display = "block";
});
