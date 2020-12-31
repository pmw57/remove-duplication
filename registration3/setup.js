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
const $formChangepasswordLink = $("#changepsw");
const $modalChangepasswordLink = $("#changepsw2");
$formChangepasswordLink.on("click", showChangePassword);
$modalChangepasswordLink.on("click", showChangePassword);
const $loginLink = $("#login2");
$loginLink.on("click", showLogin);

const $loginButton = $("#myBtn");
$loginButton.on("click", function loginClickHandler() {
    $("#myModal").modal();
    $("#login").show();
});
