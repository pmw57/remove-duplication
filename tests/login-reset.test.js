describe.only("login reset", function () {
    /*
       Structure
       - .form-group
         - input
         - .inputstatusmodal
           - .error
           - .feedback
    */
    function loginResetHandler() {
        const resetHandler = login.eventHandler.loginReset;
        resetHandler();
    }
    const $emailGroup = $("#login .form-group").has(".input-check");
    const $emailInput = $emailGroup.find("input");
    const $emailError = $emailGroup.find(".error");
    const $emailFeedback = $emailGroup.find(".feedback");
    it("resets the login form", function () {
        $emailError.html("");
        $("#login").trigger("reset");
        expect($emailError.html()).to.contain("Your");
    });
    describe("when email has value", function () {
        beforeEach(function () {
            $emailInput.val("test value");
        });
        it("Shows a message", function () {
            $emailError.html("");
            loginResetHandler();
            expect($emailError.html()).to.equal("Your E-mail");
        });
    });
});
