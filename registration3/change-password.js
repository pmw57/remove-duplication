const changePassword = (function() {
    function passwordInputHandler() {
        const validators = {
            "E-mail": "email",
            "Password": "password",
            "Password Retype": "retype"
        };
        const inputGroup = this;
        const name = $(inputGroup).find(".input-check").attr("name");
        validate(inputGroup, validators[name]);
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