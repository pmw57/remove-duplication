const changePassword = (function() {
    function passwordInputHandler() {
        var inputattr = $(this).find(".input-check").attr("name");
        var inputstr = $(this).find(".input-check").val().trim();
        if (inputattr === "E-mail") {
            return validate(this, "email");
        }
        if (inputattr === "Password") {
            if (inputstr === "") {
                return inputStatus.warning(this, inputattr + " is empty");
            }
            var fakeReg = /(.)\1{2,}/;
            if (fakeReg.test(inputstr)) {
                return inputStatus.warning(this, inputattr + " is Fake text: Please remove repetition");
            }
            var pswReglow = /^([a-zA-Z0-9]{0,5})$/;
            if (pswReglow.test(inputstr)) {
                return inputStatus.warning(this, inputattr + " is Incorrect: Please enter at least 6 characters");
            }
            var pswRegheigh = /^([a-zA-Z0-9]{13,})$/;
            if (pswRegheigh.test(inputstr)) {
                return inputStatus.warning(this, inputattr + " is Incorrect: Please enter no more than 12 characters");
            }
            inputStatus.ok(this, inputattr + " is OK: Your data has been entered correctly");
        } else if (inputattr === "Password Retype") {
            var $passwordInput = $("#changepw [name=Password]");
            if (inputstr === "") {
                return inputStatus.warning(this, inputattr + " is empty");
            }
            if ($passwordInput.val() !== inputstr) {
                return inputStatus.warning(this, inputattr + " is Incorrect: Password doesn't match retyped password");
            }
            inputStatus.ok(this, inputattr + " is OK: Your data has been entered correctly");
        }
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