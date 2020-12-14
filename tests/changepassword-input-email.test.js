describe("change-password input email", function () {
    /*
       Structure
       - .form-group
         - input
         - .inputstatusmodal
           - .error
           - .feedback
    */
    const $emailGroup = $("#changepw .form-group").has("[name='E-mail']");
    const $emailInput = $emailGroup.find("input");
    const $emailError = $emailGroup.find(".error");
    function passwordInputHandler() {
        const passwordHandler = changePassword.eventHandler.passwordInput;
        const thisArg = $emailGroup.get(0);
        passwordHandler.call(thisArg);
    }
    after(function () {
        $("#changepw").trigger("reset");
    });
    it("email is fake", function () {
        $emailInput.val("aaabbb@example.com");
        $emailError.html("");
        passwordInputHandler();
        expect($emailError.html()).to.equal("E-mail is Fake text: Please remove repetition");
    });
    it("email is real", function () {
        $emailInput.val("test@example.com");
        $emailError.html("");
        passwordInputHandler();
        expect($emailError.html()).to.equal("E-mail is Ok: Your data has been entered correctly");
    });
    it("is not an email", function () {
        $emailInput.val("not an email");
        $emailError.html("");
        passwordInputHandler();
        expect($emailError.html()).to.equal("E-mail is Incorrect: Please enter it correctly");
    });
    it("email is empty", function () {
        $emailInput.val("");
        $emailError.html("");
        passwordInputHandler();
        expect($emailError.html()).to.equal("E-mail is Empty: Please enter data into this input");
    });
});
