const changePassword = (function() {
    function checkPasswordDifferent(inputGroup) {
        const $form = $(inputGroup).closest("form");
        const $passwordInput = $form.find("[name=Password]");
        const $retypeInput = $(inputGroup).find("input");
        if ($passwordInput.val() !== $retypeInput.val()) {
            inputStatus.warning(inputGroup, validate.fn.getName(inputGroup) + " is Incorrect: Password doesn't match retyped password");
            return false;
        }
        return true;
    }
    const retypeValidator = {
        "Password Retype": [validate.fn.checkEmpty, checkPasswordDifferent]
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

    $("#changepw .form-group").on("focusin focusout input", validate.check);
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