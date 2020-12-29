$(".navbar-header button").click(function animateClosingCross() {
    $(".bar1").toggleClass("blue");
    $(".bar1").toggleClass("rotate45dg");
    $(".bar2").toggleClass("opacity");
    $(".bar3").toggleClass("rotate-45dg");
});
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

$("#myBtn").on("click", function loginClickHandler() {
    $("#myModal").modal();
});
