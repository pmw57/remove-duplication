$(document).ready(function(){
    $("#changepsw").on("click", function(){
        $("#login").css("display","none");
        $("#changepw").css("display","block");
        //e.preventDefault();
    });
    $("#changepsw2").on("click", function(){
        $("#login").css("display","none");
        $("#changepw").css("display","block");
        //e.preventDefault();
    });
    $("#login2").on("click", function(){
        $("#login").css("display","block");
        $("#changepw").css("display","none");
        //e.preventDefault();
    });

    $("#myBtn")
        .click(function () {
            $("#myModal").modal();
    });
});
