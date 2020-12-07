const changePassword = (function() {
    /* modal change*/
    function passwordInputHandler() {
        var inputattr = $(this).find(".input-check").attr("name");
        // Get the Login Name value and trim it
        var inputstr = $(this).find(".input-check").val().trim();
        var value = inputstr;
        var fakeReg = /(.)\1{2,}/;
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var pswReglow = /^([a-zA-Z0-9]{6,})+$/;
        var pswRegheigh = /^([a-zA-Z0-9]{13,})+$/; //13 or more occurences
        var $form = $("form.modalresetpw");
        var inputs = $form[0].elements;
        if (inputstr != "") {
            $(this).find(".error").html(inputattr + '  is ok').removeClass("warning").addClass("ok");
            $(this).find(".feedback").removeClass("glyphicon glyphicon-remove").addClass("glyphicon glyphicon-ok").removeClass("warning").addClass("ok");
            if (fakeReg.test(inputstr)) {
                $(this).find(".error").html(inputattr + " is Fake text: Please remove repetition");
                $(this).find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
                $(this).find(".error").addClass('warning').removeClass('ok');
            } else {
                /* E-mail*/
                if (inputattr === "E-mail") {
                    if (emailReg.test(inputstr)) {
                        $(this).find(".error").html(inputattr + " is Ok: Your data has been entered correctly");
                        $(this).find(".error").addClass('ok').removeClass('warning');
                        $(this).find(".feedback").removeClass("glyphicon glyphicon-remove").addClass("glyphicon glyphicon-ok").removeClass("warning").addClass("ok");

                    } else {
                        $(this).find(".error").html(inputattr + " is Incorrect: Please enter it correctly").removeClass('ok').addClass('warning');
                        $(this).find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
                    }
                }
            }
            /*Password  */
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
            if (inputattr === "Password Retype") {
                if (inputstr !== inputs.Password.value) {
                    $(this).find(".error").html(inputattr + " is Incorrect: Password doesn't match retyped password");
                    $(this).find(".error").addClass('warning').removeClass('ok');
                    $(this).find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
                } else {
                    $(this).find(".error").html(inputattr + " is OK: Your data has been entered correctly");
                    $(this).find(".error").addClass('ok').removeClass('warning');
                    $(this).find(".feedback").removeClass("glyphicon glyphicon-remove").addClass("glyphicon glyphicon-ok").removeClass("warning").addClass("ok");
                }
            }
        } else {
            $(this).find(".error").html(inputattr + ' is empty').removeClass("ok").addClass("warning");
            $(this).find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
        }
    }
    $(".inputboxmodal2").on("focusin focusout input", passwordInputHandler);

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
    $(".button1color2").click(passwordSubmitHandler);

    function passwordResetHandler() {
        inputStatus.resetForm($("#changepw"));
    }
    $("#changepw").on("reset", passwordResetHandler);

    return {
        eventHandler: {
            passwordInput: passwordInputHandler,
            passwordSubmit: passwordSubmitHandler,
            passwordReset: passwordResetHandler
        }
    };
}());