const login = (function() {
    function loginInputHandler() {
        var inputattr = $(this).find(".input-check").attr("name");
        var inputstr = $(this).find(".input-check").val().trim();
        if (inputstr != "") {
            var fakeReg = /(.)\1{2,}/;
            if (fakeReg.test(inputstr)) {
                $(this).find(".error").html(inputattr + " is Fake text: Please remove repetition");
                $(this).find(".error").addClass('warning').removeClass('ok');
                $(this).find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
            } else {
                if (inputattr === "E-mail") {
                    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    if (emailReg.test(inputstr)) {
                        $(this).find(".error").html(inputattr + " is Ok: Your data has been entered correctly");
                        $(this).find(".error").removeClass('warning').addClass('ok');
                        $(this).find(".feedback").removeClass("glyphicon glyphicon-remove").addClass("glyphicon glyphicon-ok").removeClass("warning").addClass("ok");
                    } else {
                        $(this).find(".error").html(inputattr + " is Incorrect: Please enter it correctly").addClass('warning').removeClass('ok');
                        $(this).find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
                    }
                }
                if (inputattr === "Password") {
                    var pswReglow = /^([a-zA-Z0-9]{6,})+$/;
                    var pswRegheigh = /^([a-zA-Z0-9]{13,})+$/;
                    if (fakeReg.test(inputstr)) {
                        $(this).find(".error").html(inputattr + " is Fake text: Please remove repetition");
                        $(this).find(".error").addClass('warning').removeClass('ok');
                        $(this).find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
                    } else {
                        if (!pswReglow.test(inputstr)) {
                            $(this).find(".error").html(inputattr + " is Incorrect: Please enter at least 6 characters");
                            $(this).find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
                            $(this).find(".error").addClass('warning').removeClass('ok');
                        } else {
                            if (!pswRegheigh.test(inputstr)) {
                                $(this).find(".error").html(inputattr + " is OK: Your data has been entered correctly");
                                $(this).find(".error").addClass('ok').removeClass('warning');
                                $(this).find(".feedback").removeClass("glyphicon glyphicon-remove").addClass("glyphicon glyphicon-ok").removeClass("warning").addClass("ok");
                            } else {
                                $(this).find(".error").html(inputattr + " is Incorrect: Please enter no more than 12 characters");
                                $(this).find(".error").addClass('warning').removeClass('ok');
                                $(this).find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
                            }
                        }

                    }
                }
            }
        } else {
            $(this).find(".error").html(inputattr + ' is empty').removeClass("ok").addClass("warning");
            $(this).find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
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