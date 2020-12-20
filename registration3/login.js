const login = (function() {
    function loginInputHandler() {
        validate.check(this);
    }

    function loginSubmitHandler(evt) {
        validate.checkFormEmpty("#login");
        if ($("#login .warning").length !== 0) {
            evt.preventDefault();
        }
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