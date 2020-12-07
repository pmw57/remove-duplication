const changePassword = (function() {
    function passwordInputHandler() {
        var inputattr = $(this).find(".input-check").attr("name");
        var inputstr = $(this).find(".input-check").val().trim();
        var fakeReg = /(.)\1{2,}/;
        if (inputstr === "") {
            inputStatus.warning(this, inputattr + " is empty");
        } else if (fakeReg.test(inputstr)) {
            inputStatus.warning(this, inputattr + " is Fake text: Please remove repetition");
        } else if (inputattr === "E-mail") {
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            if (!emailReg.test(inputstr)) {
                inputStatus.warning(this, inputattr + " is Incorrect: Please enter it correctly");
            } else {
                inputStatus.ok(this, inputattr + " is Ok: Your data has been entered correctly");
            }
        } else if (inputattr === "Password") {
            var pswReglow = /^([a-zA-Z0-9]{0,5})$/;
            var pswRegheigh = /^([a-zA-Z0-9]{13,})$/;
            if (pswReglow.test(inputstr)) {
                inputStatus.warning(this, inputattr + " is Incorrect: Please enter at least 6 characters");
            } else if (pswRegheigh.test(inputstr)) {
                inputStatus.warning(this, inputattr + " is Incorrect: Please enter no more than 12 characters");
            } else {
                inputStatus.ok(this, inputattr + " is OK: Your data has been entered correctly");
            }
        } else if (inputattr === "Password Retype") {
            var $passwordInput = $("#changepw [name=Password]");
            if ($passwordInput.val() !== inputstr) {
                inputStatus.warning(this, inputattr + " is Incorrect: Password doesn't match retyped password");
            } else {
                inputStatus.ok(this, inputattr + " is OK: Your data has been entered correctly");
            }
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