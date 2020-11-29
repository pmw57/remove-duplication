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
    function feedbackNone(inputGroup, message) {
        const $feedback = $(inputGroup).find(".feedback");
        $feedback.removeClass("glyphicon glyphicon-remove");
        $feedback.removeClass("glyphicon glyphicon-ok");
        setNone($feedback);
    }
    function feedbackOk(inputGroup, message) {
        const $feedback = $(inputGroup).find(".feedback");
        feedbackNone(inputGroup);
        $feedback.addClass("glyphicon glyphicon-ok");
        setOk($feedback);
    }
    function feedbackWarning(inputGroup, message) {
        const $feedback = $(inputGroup).find(".feedback");
        feedbackNone(inputGroup);
        $feedback.addClass("glyphicon glyphicon-remove");
        setWarning($feedback);
    }
    return {
        setNone,
        setOk,
        setWarning,
        errorOk,
        errorWarning,
        feedbackNone,
        feedbackOk,
        feedbackWarning
    };
}());