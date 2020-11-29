const inputStatus = (function () {
    function errorOk(inputGroup, message) {
        const $error = $(inputGroup).find(".error");
        $error.html(message);
        $error.css("color", "green");
        $error.removeClass("warning");
        $error.addClass("ok");
    }
    function errorWarning(inputGroup, message) {
        const $error = $(inputGroup).find(".error");
        $error.html(message);
        $error.css("color", "red");
        $error.removeClass("ok");
        $error.addClass("warning");
    }
    function feedbackNone(inputGroup, message) {
        const $feedback = $(inputGroup).find(".feedback");
        $feedback.removeClass("glyphicon glyphicon-remove warning");
        $feedback.removeClass("glyphicon glyphicon-ok ok");
    }
    function feedbackOk(inputGroup, message) {
        const $feedback = $(inputGroup).find(".feedback");
        feedbackNone(inputGroup);
        $feedback.addClass("glyphicon glyphicon-ok ok");
    }
    function feedbackWarning(inputGroup, message) {
        const $feedback = $(inputGroup).find(".feedback");
        feedbackNone(inputGroup);
        $feedback.addClass("glyphicon glyphicon-remove warning");
    }
    return {
        errorOk,
        errorWarning,
        feedbackNone,
        feedbackOk,
        feedbackWarning
    };
}());