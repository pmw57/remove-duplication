describe("login input email", function () {
    /*
       Structure
       - .form-group
         - input
         - .inputstatusmodal
           - .error
           - .feedback
    */
    const $emailGroup = $("#login .form-group").has("[name='E-mail']");
    const $emailInput = $emailGroup.find("input");
    const $emailError = $emailGroup.find(".error");
    function loginInputHandler() {
        const inputHandler = login.eventHandler.loginInput;
        const evt = {target: $emailGroup.get(0)};
        inputHandler(evt);
    }
    after(function () {
        $("#login").trigger("reset");
    });
    it("email is real", function () {
        $emailInput.val("test@example.com");
        $emailError.html("");
        loginInputHandler();
        expect($emailError.html()).to.equal("E-mail is Ok: Your data has been entered correctly");
    });
    it("is not an email", function () {
        $emailInput.val("not an email");
        $emailError.html("");
        loginInputHandler();
        expect($emailError.html()).to.equal("E-mail is Incorrect: Please enter it correctly");
    });
    it("email is empty", function () {
        $emailInput.val("");
        $emailError.html("");
        loginInputHandler();
        expect($emailError.html()).to.equal("E-mail is Empty: Please enter data into this input");
    });
});
