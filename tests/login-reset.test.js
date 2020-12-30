describe("login reset", function () {
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
        const evt = {target: undefined};
        resetHandler(evt);
    }
    after(function () {
        $("#login").trigger("reset");
    });
    const $emailGroup = $("#login .form-group").has("[name='E-mail']");
    const $emailInput = $emailGroup.find("input");
    const $emailError = $emailGroup.find(".error");
    it("uses reset event to reset the form", function () {
        $emailError.html("");
        $("#login").trigger("reset");
        expect($emailError.html()).to.equal("E-mail");
    });
    it("shows email message", function () {
        $emailError.html("");
        loginResetHandler();
        expect($emailError.html()).to.equal("E-mail");
    });
    it("shows password message", function () {
        const $passwordGroup = $("#login .form-group").has("[name=Password]");
        const $passwordInput = $passwordGroup.find("input");
        const $passwordError = $passwordGroup.find(".error");
        $passwordInput.val("test value");
        $passwordError.html("");
        loginResetHandler();
        expect($passwordError.html()).to.equal("Password");
    });
});
