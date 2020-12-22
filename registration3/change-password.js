const changePassword = (function() {
    function passwordsMatchRule(input) {
        return validate.fieldMatches(input.form, "Password", input.value);
    }
    const retypeValidator = {
        "Password Retype": [
            validate.fn.checkEmpty,
            validate.createValidator(passwordsMatchRule, "Password doesn't match retyped password")
        ]
    };

    function passwordInputHandler(evt) {
        validate.check(evt.target, retypeValidator);
    }

    function passwordSubmitHandler(evt) {
        const formGroups = $("#changepw .form-group").has(".check").toArray();
        formGroups.forEach(function(formGroup) {
            var trimmedValue = $(formGroup).find(".check").val().trim();
            var inputName = $(formGroup).find(".check").attr("name");
            if (trimmedValue === "") {
                evt.preventDefault();
                inputStatus.warning(formGroup, "Your " + inputName + " is empty");
            } else {
                inputStatus.ok(formGroup, "Your " + inputName + " is OK");
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