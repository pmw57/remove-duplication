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

    function passwordSubmitHandler(evt) {
        validate.checkFormEmpty("#changepw");
        if ($("#changepw .warning").length !== 0) {
            evt.preventDefault();
        }
    }

    function passwordResetHandler() {
        inputStatus.resetForm($("#changepw"));
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
            passwordSubmit: passwordSubmitHandler,
            passwordReset: passwordResetHandler
        }
    };
}());