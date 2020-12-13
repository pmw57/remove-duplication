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
    describe("email is fake", function () {
        beforeEach(function () {
            $emailInput.val("aaabbb@example.com");
        })
        it("shows a message", function () {
            $emailError.html("");
            passwordInputHandler();
            expect($emailError.html()).to.equal("E-mail is Fake text: Please remove repetition");
        });
    });
    describe("email is real", function () {
        beforeEach(function () {
            $emailInput.val("test@example.com");
        })
        it("shows a message", function () {
            $emailError.html("");
            passwordInputHandler();
            expect($emailError.html()).to.equal("E-mail is Ok: Your data has been entered correctly");
        });
    });
    describe("is not an email", function () {
        beforeEach(function () {
            $emailInput.val("not an email");
        })
        it("shows a message", function () {
            $emailError.html("");
            passwordInputHandler();
            expect($emailError.html()).to.equal("E-mail is Incorrect: Please enter it correctly");
        });
    });
    describe("email is empty", function () {
        beforeEach(function () {
            $emailInput.val("");
        })
        it("shows a message", function () {
            $emailError.html("");
            passwordInputHandler();
            expect($emailError.html()).to.equal("E-mail is empty");
        });
    });
});
