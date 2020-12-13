describe("change-password input retype", function () {
    /*
       Structure
       - .form-group
         - input
         - .inputstatusmodal
           - .error
           - .feedback
    */
    const $passwordInput = $("#changepw .form-group").has("[name=Password]").find("input");
    const $retypeGroup = $("#changepw .form-group").has("[name='Password Retype']");
    const $retypeInput = $retypeGroup.find("input");
    const $retypeError = $retypeGroup.find(".error");
    function passwordInputHandler() {
        const passwordHandler = changePassword.eventHandler.passwordInput;
        const thisArg = $retypeGroup.get(0);
        passwordHandler.call(thisArg);
    }
    after(function () {
        $("#login").trigger("reset");
    });
    describe("password doesn't match", function () {
        beforeEach(function () {
            $passwordInput.val("validpassword");
            $retypeInput.val("mistypedpassword");
        })
        it("shows a message", function () {
            $retypeError.html("");
            passwordInputHandler();
            expect($retypeError.html()).to.equal("Password Retype is Incorrect: Password doesn't match retyped password");
        });
    });
    describe("password matches", function () {
        beforeEach(function () {
            $passwordInput.val("testpassword");
            $retypeInput.val("testpassword");
        })
        it("shows a message", function () {
            $retypeError.html("");
            passwordInputHandler();
            expect($retypeError.html()).to.equal("Password Retype is Ok: Your data has been entered correctly");
        });
    });
    describe("password is empty", function () {
        beforeEach(function () {
            $retypeInput.val("");
        })
        it("shows a message", function () {
            $retypeError.html("");
            passwordInputHandler();
            expect($retypeError.html()).to.equal("Password Retype is empty");
        });
    });
});
