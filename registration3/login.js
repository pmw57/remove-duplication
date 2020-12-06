const login = (function() {
    $(".inputboxmodal1").on("focusin focusout input", function() {
        var inputattr = $(this).find(".input-check").attr("name");
        // Get the Login Name value and trim it
        var inputstr = $(this).find(".input-check").val().trim();
        var fakeReg = /(.)\1{2,}/;
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var pswReglow = /^([a-zA-Z0-9]{6,})+$/;
        var pswRegheigh = /^([a-zA-Z0-9]{13,})+$/; //13 or more occurences
        if (inputstr != "") {
            $(this).find(".error").html(inputattr + '  is ok').removeClass("warning").addClass("ok");
            $(this).find(".feedback").removeClass("glyphicon glyphicon-remove").addClass("glyphicon glyphicon-ok").removeClass("warning").addClass("ok");
            if (fakeReg.test(inputstr)) {
                $(this).find(".error").html(inputattr + " is Fake text: Please remove repetition");
                $(this).find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
                $(this).find(".error").addClass('warning').removeClass('ok');
            } else {
                /* E-mail filter */
                if (inputattr === "E-mail") {
                    if (emailReg.test(inputstr)) {
                        $(this).find(".error").html(inputattr + " is Ok : Your data has been entered correctly");
                        $(this).find(".error").removeClass('warning').addClass('ok');
                        $(this).find(".feedback").removeClass("glyphicon glyphicon-remove").addClass("glyphicon glyphicon-ok").removeClass("warning").addClass("ok");
                    } else {
                        $(this).find(".error").html(inputattr + " is Incorrect: Please enter it correctly").addClass('warning').removeClass('ok');
                        $(this).find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
                    }
                }
                /* Password filter */
                if (inputattr === "Password") {
                    if (fakeReg.test(inputstr)) {
                        $(this).find(".error").html(inputattr + " is Fake text: Please remove repetition");
                        $(this).find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
                        $(this).find(".error").addClass('warning').removeClass('ok');
                    } else {
                        if (!pswReglow.test(inputstr)) {
                            $(this).find(".error").html(inputattr + " is Incorrect: Please enter at lest 6 character");
                            $(this).find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
                            $(this).find(".error").addClass('warning').removeClass('ok');
                        } else {
                            if (!pswRegheigh.test(inputstr)) {
                                // condition to check if length is bigger than 12 char
                                $(this).find(".error").html(inputattr + " is OK: Your data has been entered correctly");
                                $(this).find(".error").addClass('ok').removeClass('warning');
                                $(this).find(".feedback").removeClass("glyphicon glyphicon-remove").addClass("glyphicon glyphicon-ok").removeClass("warning").addClass("ok");
                            } else {
                                $(this).find(".error").html(inputattr + " is Incorrect: Please enter no more than 12 character " + inputstr);
                                $(this).find(".error").addClass('warning').removeClass('ok');
                                $(this).find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
                            }
                        }

                    }
                }
            }
        } else {
            $(this).find(".error").html(inputattr + 'is empty').removeClass("ok").addClass("warning");
            $(this).find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
        }
    })
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
        $("#login .form-group").each(function validateInputField() {
            if (!$(this).find(".input-check").length) {
                return;
            }
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
    $("#login").on("submit", loginSubmitHandler);

    function loginResetHandler() {
        $("#login .form-group").has(".input-check").each(function() {
            var inputName = $(this).find(".input-check").attr("name");
            inputStatus.errorOk(this, "Your " + inputName);
            inputStatus.feedbackNone(this);
        });
    }
    $("#login").on("reset", loginResetHandler);
    return {
        eventHandler: {
            loginSubmit: loginSubmitHandler,
            loginReset: loginResetHandler
        }
    };
}());