$(document).ready(function() {
    function showChangePassword() {
        $("#login").hide();
        $("#changepw").show();
    }
    function showLogin() {
        $("#login").show();
        $("#changepw").hide();
    }
    $("#changepsw").on("click", showChangePassword);
    $("#changepsw2").on("click", showChangePassword);
    $("#login2").on("click", showLogin);

    $("#myBtn").click(function() {
        $("#myModal").modal();
    });
});