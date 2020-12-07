const changePassword = (function() {
    function passwordInputHandler() {
        var inputattr = $(this).find(".input-check").attr("name");
        var inputstr = $(this).find(".input-check").val().trim();
        var fakeReg = /(.)\1{2,}/;
        if (inputstr === "") {
            $(this).find(".error").html(inputattr + ' is empty').removeClass("ok").addClass("warning");
            $(this).find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
        } else if (fakeReg.test(inputstr)) {
            $(this).find(".error").html(inputattr + " is Fake text: Please remove repetition");
            $(this).find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
            $(this).find(".error").addClass('warning').removeClass('ok');
        } else if (inputattr === "E-mail") {
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            if (!emailReg.test(inputstr)) {
                $(this).find(".error").html(inputattr + " is Incorrect: Please enter it correctly").removeClass('ok').addClass('warning');
                $(this).find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
            } else {
                $(this).find(".error").html(inputattr + " is Ok: Your data has been entered correctly");
                $(this).find(".error").addClass('ok').removeClass('warning');
                $(this).find(".feedback").removeClass("glyphicon glyphicon-remove").addClass("glyphicon glyphicon-ok").removeClass("warning").addClass("ok");
            }
        } else if (inputattr === "Password") {
            var pswReglow = /^([a-zA-Z0-9]{0,5})$/;
            var pswRegheigh = /^([a-zA-Z0-9]{13,})$/;
            if (pswReglow.test(inputstr)) {
                $(this).find(".error").html(inputattr + " is Incorrect: Please enter at least 6 characters");
                $(this).find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
                $(this).find(".error").addClass('warning').removeClass('ok');
            } else if (!pswRegheigh.test(inputstr)) {
                $(this).find(".error").html(inputattr + " is OK: Your data has been entered correctly");
                $(this).find(".error").addClass('ok').removeClass('warning');
                $(this).find(".feedback").removeClass("glyphicon glyphicon-remove").addClass("glyphicon glyphicon-ok").removeClass("warning").addClass("ok");
            } else {
                $(this).find(".error").html(inputattr + " is Incorrect: Please enter no more than 12 characters");
                $(this).find(".error").addClass('warning').removeClass('ok');
                $(this).find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
            }
        } else if (inputattr === "Password Retype") {
            var $passwordInput = $("#changepw [name=Password]");
            if ($passwordInput.val() !== inputstr) {
                $(this).find(".error").html(inputattr + " is Incorrect: Password doesn't match retyped password");
                $(this).find(".error").addClass('warning').removeClass('ok');
                $(this).find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
            } else {
                $(this).find(".error").html(inputattr + " is OK: Your data has been entered correctly");
                $(this).find(".error").addClass('ok').removeClass('warning');
                $(this).find(".feedback").removeClass("glyphicon glyphicon-remove").addClass("glyphicon glyphicon-ok").removeClass("warning").addClass("ok");
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