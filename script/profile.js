$(function(){
    let username = localStorage.getItem("username");
    let avatar = localStorage.getItem("avatar");


    $("#name").val(username);
    $(".selected-avatar img").attr("src", avatar);

    $("#name").on("input", function(){
        $("#save-btn").show();
    });

    $("#save-btn").on("click", function(){
        let newUsername = $("#name").val();
        localStorage.setItem("username", newUsername);
        $("#save-btn").hide();
    });


});