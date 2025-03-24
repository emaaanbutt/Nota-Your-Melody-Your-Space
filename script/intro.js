$("#name").on("keydown", function(event){
    if (event.key == "Enter")
    {
        event.preventDefault();
        handleNameInput();
    }
});

$("#name").on("blur", handleNameInput);

function handleNameInput(){
    if (!isValid($("#name").val()))
    {
        $("#invalid-name span").addClass("display");
        $("#invalid-name span").removeClass("hidden");
    }
}

$("#name").on("input", function(){
    $("#invalid-name span").removeClass("display");
    $("#invalid-name span").addClass("hidden");
})

function isValid(name)
{
    return name.trim() !== "";
}

let selectedAvatar = "";
const avatars = document.querySelectorAll(".avatar-option img");
avatars.forEach(function(avatar){
    avatar.addEventListener("click", function(){
        avatars.forEach(function(i){
            i.classList.remove("selected");
        });

        this.classList.add("selected");
        selectedAvatar = this.getAttribute("data-value");
    });
});

function isAvatarSelected()
{
    var isSelected = false;
    avatars.forEach(function(avatar){
        if (avatar.classList.contains("selected"))
        {
            isSelected = true;
        }
    });

    return isSelected;
}

function handleAvatarInput()
{
    if (!isAvatarSelected())
    {
        $("#invalid-avatar span").addClass("display");
        $("#invalid-avatar span").removeClass("hidden");
        setTimeout(function(){
            $("#invalid-avatar span").addClass("hidden");
            $("#invalid-avatar span").removeClass("display");
        },5000);    
    }
    
}


$("#btn").on("click", function(){
    if (isValid($("#name").val()) && isAvatarSelected())
    {
        window.location.href = "main.html";
    }
    else{
        handleNameInput();
        handleAvatarInput();
    }
})
