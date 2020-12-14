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
    it("password doesn't match", function () {
        $passwordInput.val("validpassword");
        $retypeInput.val("mistypedpassword");
        $retypeError.html("");
        passwordInputHandler();
        expect($retypeError.html()).to.equal("Password Retype is Incorrect: Password doesn't match retyped password");
    });
    it("password matches", function () {
        $passwordInput.val("testpassword");
        $retypeInput.val("testpassword");
        $retypeError.html("");
        passwordInputHandler();
        expect($retypeError.html()).to.equal("Password Retype is Ok: Your data has been entered correctly");
    });
    it("password is empty", function () {
        $retypeInput.val("");
        $retypeError.html("");
        passwordInputHandler();
        expect($retypeError.html()).to.equal("Password Retype is Empty: Please enter data into this input");
    });
});
