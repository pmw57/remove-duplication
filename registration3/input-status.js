const inputStatus = (function () {
    function setNone($el) {
        $el.removeClass("warning");
        $el.removeClass("ok");
    }
    function setOk($el) {
        $el.removeClass("warning");
        $el.addClass("ok");
    }
    function setWarning($el) {
        $el.removeClass("ok");
        $el.addClass("warning");
    }
    function errorOk(inputGroup, message) {
        const $error = $(inputGroup).find(".error");
        $error.html(message);
        $error.css("color", "green");
        setOk($error);
    }
    function errorWarning(inputGroup, message) {
        const $error = $(inputGroup).find(".error");
        $error.html(message);
        $error.css("color", "red");
        setWarning($error);
    }
    function feedbackNone(inputGroup) {
        const $feedback = $(inputGroup).find(".feedback");
        $feedback.removeClass("glyphicon glyphicon-remove");
        $feedback.removeClass("glyphicon glyphicon-ok");
        setNone($feedback);
    }
    function feedbackOk(inputGroup) {
        const $feedback = $(inputGroup).find(".feedback");
        feedbackNone(inputGroup);
        $feedback.addClass("glyphicon glyphicon-ok");
        setOk($feedback);
    }
    function feedbackWarning(inputGroup) {
        const $feedback = $(inputGroup).find(".feedback");
        feedbackNone(inputGroup);
        $feedback.addClass("glyphicon glyphicon-remove");
        setWarning($feedback);
    }
    function requiredOk(inputGroup) {
        const $required = $(inputGroup).find(".starrq");
        setOk($required);
    }
    function requiredWarning(inputGroup) {
        const $required = $(inputGroup).find(".starrq");
        setWarning($required);
    }
    function ok(inputGroup, message) {
        errorOk(inputGroup, message);
        feedbackOk(inputGroup);
        requiredOk(inputGroup);
    }
    function warning(inputGroup, message) {
        errorWarning(inputGroup, message);
        feedbackWarning(inputGroup);
        requiredWarning(inputGroup);
    }
    function resetForm($form) {
        $form.find(".form-group").each(function() {
            var inputName = $(this).find(".input-check").attr("name");
            inputStatus.errorOk(this, "Your " + inputName);
            inputStatus.feedbackNone(this);
        });
    }
    return {
        setNone,
        setOk,
        setWarning,
        errorOk,
        errorWarning,
        feedbackNone,
        feedbackOk,
        feedbackWarning,
        requiredOk,
        requiredWarning,
        ok,
        warning,
        resetForm
    };
}());