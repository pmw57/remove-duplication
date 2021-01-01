const changePassword = (function makeChangePassword() {
    const retypeValidator = {
        "Password Retype": [
            validate.fn.hasContent,
            validate.createMatcher({
                fieldname: "Password",
                error: "Password doesn't match retyped password"
            })
        ]
    };
    function passwordInputHandler(evt) {
        validate.check(evt.target, retypeValidator);
    }
    function passwordResetHandler() {
        inputStatus.resetForm($("#changepw"), validate.fn.getName);
    }
    function passwordSubmitHandler(evt) {
        validate.checkFormEmpty("#changepw");
        if ($("#changepw .warning").length > 0) {
            evt.preventDefault();
        }
    }
    $("#changepw .form-group").on(
        "focusin focusout input",
        passwordInputHandler
    );
    $("#changepw").on("submit", passwordSubmitHandler);
    $("#changepw").on("reset", passwordResetHandler);
    return {
        eventHandler: {
            passwordInput: passwordInputHandler,
            passwordReset: passwordResetHandler,
            passwordSubmit: passwordSubmitHandler
        }
    };
}());