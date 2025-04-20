$(function(){
    let username = localStorage.getItem("username");
    let avatar = localStorage.getItem("avatar");


    $("#name").val(username);

    const avatars = document.querySelectorAll(".avatar-option img");

    avatars.forEach(function(avatar){
        if ($(avatar).attr("src") == avatar){
            avatar.classList.add("selected");
        }
    });

    $("#name").on("input", function(){
        $("#save-btn").show();
    });

    $("#save-btn").on("click", function(){
        let newUsername = $("#name").val();
        localStorage.setItem("username", newUsername);
        $("#save-btn").hide();
    });


});