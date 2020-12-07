const login = (function() {
    function loginInputHandler() {
        const inputattr = $(this).find(".input-check").attr("name");
        if (inputattr === "E-mail") {
            const inputstr = $(this).find(".input-check").val().trim();
            if (inputstr === "") {
                return inputStatus.warning(this, inputattr + " is empty");
            }
            const fakeReg = /(.)\1{2,}/;
            if (fakeReg.test(inputstr)) {
                return inputStatus.warning(this, inputattr + " is Fake text: Please remove repetition");
            }
            const emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            if (!emailReg.test(inputstr)) {
                return inputStatus.warning(this, inputattr + " is Incorrect: Please enter it correctly");
            }
            return inputStatus.ok(this, inputattr + " is Ok: Your data has been entered correctly");
        }
        if (inputattr === "Password") {
            const inputstr = $(this).find(".input-check").val().trim();
            if (inputstr === "") {
                return inputStatus.warning(this, inputattr + " is empty");
            }
            const fakeReg = /(.)\1{2,}/;
            if (fakeReg.test(inputstr)) {
                return inputStatus.warning(this, inputattr + " is Fake text: Please remove repetition");
            }
            const pswReglow = /^([a-zA-Z0-9]{0,5})$/;
            if (pswReglow.test(inputstr)) {
                return inputStatus.warning(this, inputattr + " is Incorrect: Please enter at least 6 characters");
            }
            const pswRegheigh = /^([a-zA-Z0-9]{13,})$/;
            if (pswRegheigh.test(inputstr)) {
                return inputStatus.warning(this, inputattr + " is Incorrect: Please enter no more than 12 characters");
            }
            return inputStatus.ok(this, inputattr + " is OK: Your data has been entered correctly");
        }
    }

    /* modal check*/
    function removeError(inputGroup, message) {
        inputStatus.errorOk(inputGroup, message);
        inputStatus.feedbackOk(inputGroup);
    }
    function addError(inputGroup, message) {
        inputStatus.errorWarning(inputGroup, message);
        inputStatus.feedbackWarning(inputGroup);
    }
    function loginSubmitHandler(evt) {
        $("#login .form-group").has(".input-check").each(function validateInput() {
            var inputName = $(this).find(".input-check").attr("name");
            var trimmedValue = $(this).find(".input-check").val().trim();
            if (trimmedValue !== "") {
                removeError(this, "Your " + inputName + " is OK");
            } else {
                addError(this, "Your " + inputName + " is empty");
                evt.preventDefault();
            }
        });
    }

    function loginResetHandler() {
        inputStatus.resetForm($("#login"));
    }

    $("#login .form-group").on("focusin focusout input", loginInputHandler);
    $("#login").on("submit", loginSubmitHandler);
    $("#login").on("reset", loginResetHandler);
    return {
        eventHandler: {
            loginInput: loginInputHandler,
            loginSubmit: loginSubmitHandler,
            loginReset: loginResetHandler
        }
    };
}());