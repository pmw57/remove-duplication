const login = (function makeLogin() {
    function loginInputHandler(evt) {
        validate.check(evt.target);
    }
    function loginResetHandler() {
        inputStatus.resetForm($("#login"), validate.fn.getName);
    }
    function loginSubmitHandler(evt) {
        validate.checkFormEmpty("#login");
        if ($("#login .warning").length > 0) {
            evt.preventDefault();
        }
    }
    $("#login .form-group").on("focusin focusout input", loginInputHandler);
    $("#login").on("reset", loginResetHandler);
    $("#login").on("submit", loginSubmitHandler);
    return {
        eventHandler: {
            loginInput: loginInputHandler,
            loginReset: loginResetHandler,
            loginSubmit: loginSubmitHandler
        }
    };
}());