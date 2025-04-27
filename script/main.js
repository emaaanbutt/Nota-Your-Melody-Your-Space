$(".heart").on("mouseenter", function(){
    let img = $(this);
    if (!img.hasClass("clicked"))
    {
        $(this).attr("src", "../Assets/Images/heart-hover.png");
    }
}).on("mouseleave", function(){
    let img = $(this);
    if (!img.hasClass("clicked"))
    {
        $(this).attr("src", "../Assets/Images/heart.png");
    }
})


$(".heart").on("click", function(){
    let img = $(this);

    img.toggleClass("clicked")

    if (img.hasClass("clicked"))
    {
        $(this).attr("src", "../Assets/Images/liked.png");
    }
    else{
        $(this).attr("src", "../Assets/Images/heart.png");
    }
    
})

$(".menu-btn").on("mouseenter",function(){
    $(".dropdown-menu").each(function(){
        $(this).attr("style", "display: none !important;");
    });
    let btn = $(this);
    btn.parent().find(".dropdown-menu").attr("style", "display: block !important;");
});


$(".dropdown-menu").on("mouseleave",function(){
    let btn = $(this);
    btn.attr("style", "display: none !important;");
});

$(".icon").on("click", function () {
    $(".icon").removeClass("active"); 
    $(this).addClass("active"); 
});

let username = localStorage.getItem("username");
let avatar = localStorage.getItem("avatar");

$("#greeting h2").text(`Hi ${username}`);
$("#profile img").attr("src", avatar);

$(function(){
    $(".trending-song").on("click", function(){
        window.location.href = "music.html";
    });
});
