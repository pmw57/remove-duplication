const changePassword = (function() {
    const passwordsMatchRule = function (input) {
        const form = input.form;
        const passwordInput = form.elements["Password"];
        return passwordInput.value === input.value;
    }
    const retypeValidator = {
        "Password Retype": [
            validate.fn.checkEmpty,
            validate.createValidator(passwordsMatchRule, "Password doesn't match retyped password")
        ]
    };
    function passwordInputHandler() {
        validate.check(this, retypeValidator);
    }

    function passwordSubmitHandler(evt) {
        $("#changepw .form-group").has(".input-check").each(function() {
            var trimmedValue = $(this).find(".input-check").val().trim();
            var inputName = $(this).find(".input-check").attr("name");
            if (trimmedValue === "") {
                evt.preventDefault();
                inputStatus.warning(this, "Your " + inputName + " is empty");
            } else {
                inputStatus.ok(this, "Your " + inputName + " is OK");
            }
        });
    }

    function passwordResetHandler() {
        inputStatus.resetForm($("#changepw"));
    }

    $("#changepw .form-group").on("focusin focusout input", passwordInputHandler);
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