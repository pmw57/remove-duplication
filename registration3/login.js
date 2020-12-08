function checkFake(input) {
    const name = $(input).find(".input-check").attr("name");
    const value = $(input).find(".input-check").val().trim();
    const fakeReg = /(.)\1{2,}/;
    if (fakeReg.test(value)) {
        inputStatus.warning(input, name + " is Fake text: Please remove repetition");
        return true;
    }
}
const login = (function() {
    function loginInputHandler() {
        const validators = {
            "E-mail": "email",
            "Password": "password"
        };
        const inputGroup = this;
        const name = $(inputGroup).find(".input-check").attr("name");
        validate(inputGroup, validators[name]);
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