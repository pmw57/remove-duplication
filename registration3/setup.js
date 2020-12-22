$(document).ready(function() {
    $("#changepsw").on("click", function() {
        $("#login").css("display", "none");
        $("#changepw").css("display", "block");
    });
    $("#changepsw2").on("click", function() {
        $("#login").css("display", "none");
        $("#changepw").css("display", "block");
    });
    $("#login2").on("click", function() {
        $("#login").css("display", "block");
        $("#changepw").css("display", "none");
    });

    $("#myBtn")
        .click(function() {
            $("#myModal").modal();
        });
});