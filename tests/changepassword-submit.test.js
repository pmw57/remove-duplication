describe("change password submit", function () {
    /*
       Structure
       - .form-group
         - input
         - .inputstatusmodal
           - .error
           - .feedback
    */
    const fakeEvt = {
        preventDefault: function fakeFunc() {}
    };
    function changePasswordSubmitHandler() {
        const SubmitHandler = changePassword.eventHandler.passwordSubmit;
        SubmitHandler(fakeEvt);
    }
    after(function () {
        $("#changepw").trigger("reset");
    });
    const $emailGroup = $("#changepw .form-group").has("[name='E-mail']");
    const $emailInput = $emailGroup.find("input");
    const $emailError = $emailGroup.find(".error");
    it("email has value", function () {
        $emailInput.val("test value");
        $emailError.html("");
        changePasswordSubmitHandler();
        expect($emailError.html()).to.equal("Your E-mail is OK");
    });
    it("email is empty", function () {
        $emailInput.val("");
        $emailError.html("");
        changePasswordSubmitHandler();
        expect($emailError.html()).to.equal("Your E-mail is empty");
    });
    const $passwordGroup = $("#changepw .form-group").has("[name='Password']");
    const $passwordInput = $passwordGroup.find("input");
    const $passwordError = $passwordGroup.find(".error");
    it("password has value", function () {
        $passwordInput.val("test value");
        $passwordError.html("");
        changePasswordSubmitHandler();
        expect($passwordError.html()).to.equal("Your Password is OK");
    });
    it("password is empty", function () {
        $passwordInput.val("");
        $passwordError.html("");
        changePasswordSubmitHandler();
        expect($passwordError.html()).to.equal("Your Password is empty");
    });
    const $retypeGroup = $("#changepw .form-group").has("[name='Password Retype']");
    const $retypeInput = $retypeGroup.find("input");
    const $retypeError = $retypeGroup.find(".error");
    const $retypeFeedback = $retypeGroup.find(".feedback");
    it("retype has value", function () {
        $retypeInput.val("test value");
        $retypeError.html("");
        changePasswordSubmitHandler();
        expect($retypeError.html()).to.equal("Your Password Retype is OK");
    });
    it("retype is empty", function () {
        $retypeInput.val("");
        $retypeError.html("");
        changePasswordSubmitHandler();
        expect($retypeError.html()).to.equal("Your Password Retype is empty");
    });
});
