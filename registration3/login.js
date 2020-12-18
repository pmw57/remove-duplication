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
        validate.check(this);
    }

    function loginSubmitHandler(evt) {
        $("#login .form-group").has(".input-check").each(function validateInput() {
            const isValid = validate.check(this);
            if (!isValid) {
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