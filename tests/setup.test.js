describe("setup", function () {
    after(function () {
        $("#login").css("display", "none");
        $("#changepw").css("display", "none");
    });
    it("when #changepsw clicked, shows change password", function () {
        $("#login").css("display", "block");
        $("#changepw").css("display", "none");
        $("#changepsw").trigger("click");
        expect($("#login").css("display")).to.contain("none");
        expect($("#changepw").css("display")).to.contain("block");
    });
    it("when #changepsw2 clicked, shows change password", function () {
        $("#login").css("display", "block");
        $("#changepw").css("display", "none");
        $("#changepsw2").trigger("click");
        expect($("#login").css("display")).to.contain("none");
        expect($("#changepw").css("display")).to.contain("block");
    });
    it("when #login clicked, shows login", function () {
        $("#login").css("display", "none");
        $("#changepw").css("display", "block");
        $("#login2").trigger("click");
        expect($("#login").css("display")).to.contain("block");
        expect($("#changepw").css("display")).to.contain("none");
    });
});
