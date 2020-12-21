const inputStatus = (function () {
    function setNone($el, classes) {
        $el.removeClass("warning");
        $el.removeClass("ok");
        $el.removeClass(classes);
    }
    function setOk($el, classes) {
        $el.removeClass("warning");
        $el.addClass("ok");
        $el.addClass(classes);
    }
    function setWarning($el, classes) {
        $el.removeClass("ok");
        $el.addClass("warning");
        $el.addClass(classes);
    }
    function setError(inputGroup, type, message) {
        const $error = $(inputGroup).find(".error");
        $error.html(message);
        if (type === "ok") {
            $error.css("color", "green");
            setOk($error);
        }
        if (type === "warning") {
            $error.css("color", "red");
            setWarning($error);
        }
    }
    function setFeedback(inputGroup, type) {
        const $feedback = $(inputGroup).find(".feedback");
        const warningClass = "glyphicon glyphicon-remove";
        const okClass = "glyphicon glyphicon-ok";
        setNone($feedback, warningClass + " " + okClass);
        if (type === "ok") {
            setOk($feedback, okClass);
        }
        if (type === "warning") {
            setWarning($feedback, warningClass);
        }
    }
    function setRequired(inputGroup, type) {
        const $required = $(inputGroup).find(".starrq");
        if (type === "ok") {
            setOk($required);
        }
        if (type === "warning") {
            setWarning($required);
        }
    }
    function errorOk(inputGroup, message) {
        setError(inputGroup, "ok", message);
    }
    function errorWarning(inputGroup, message) {
        setError(inputGroup, "warning", message);
    }
    function feedbackNone(inputGroup) {
        setFeedback(inputGroup, "none");
    }
    function feedbackOk(inputGroup) {
        setFeedback(inputGroup, "ok");
    }
    function feedbackWarning(inputGroup) {
        setFeedback(inputGroup, "warning");
    }
    function requiredOk(inputGroup) {
        setRequired(inputGroup, "ok");
    }
    function requiredWarning(inputGroup) {
        setRequired(inputGroup, "warning");
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
            var inputName = $(this).find(".check").attr("name");
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