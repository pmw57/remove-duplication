describe("registration-input first name", function () {
    /*
       Structure
       - .form-group
         - .starrq
         - .input-group
           - input
         - .inputstatus
           - .error
           - .feedback
    */
    function callRegistrationInputHandler(thisArg) {
        const registrationInputHandler = validate.eventHandler.registrationInput;
        registrationInputHandler.call(thisArg);
    }
    const $firstnameGroup = $(".form-group").has("[name='First Name']");
    const $firstnameInputGroup = $firstnameGroup.find(".input-group");
    const $firstnameInput = $firstnameGroup.find("input");
    const $firstnameError = $firstnameGroup.find(".error");
    const $firstnameFeedback = $firstnameGroup.find(".feedback");
    const $firstnameRequired = $firstnameGroup.find(".starrq");
    describe("first name has repetition", function () {
        beforeEach(function () {
            $firstnameInput.val("abbbc");
        });
        it("shows an error message", function () {
            $firstnameError.html("");
            callRegistrationInputHandler($firstnameInputGroup);
            expect($firstnameError.html()).to.equal("First Name is Fake text: Please remove repetition");
        });
        it("adds warning to error", function () {
            $firstnameError.removeClass("warning");
            callRegistrationInputHandler($firstnameInputGroup);
            expect($firstnameError.attr("class")).to.contain("warning");
        });
        it("removes ok from error", function () {
            $firstnameError.addClass("ok");
            callRegistrationInputHandler($firstnameInputGroup);
            expect($firstnameError.attr("class")).to.not.contain("ok");
        });
        it("adds glyphicon to feedback", function () {
            $firstnameFeedback.removeClass("glyphicon");
            callRegistrationInputHandler($firstnameInputGroup);
            expect($firstnameFeedback.attr("class")).to.contain("glyphicon");
        });
        it("removes glyphicon-ok from feedback", function () {
            $firstnameFeedback.addClass("glyphicon-ok");
            callRegistrationInputHandler($firstnameInputGroup);
            expect($firstnameFeedback.attr("class")).to.not.contain("glyphicon-ok");
        });
        it("adds glyphicon-remove to feedback", function () {
            $firstnameFeedback.removeClass("glyphicon-remove");
            callRegistrationInputHandler($firstnameInputGroup);
            expect($firstnameFeedback.attr("class")).to.contain("glyphicon-remove");
        });
        it("removes ok from feedback", function () {
            $firstnameFeedback.addClass("ok");
            callRegistrationInputHandler($firstnameInputGroup);
            expect($firstnameFeedback.attr("class")).to.not.contain("ok");
        });
        it("adds warning to feedback", function () {
            $firstnameFeedback.removeClass("warning");
            callRegistrationInputHandler($firstnameInputGroup);
            expect($firstnameFeedback.attr("class")).to.contain("warning");
        });
        it("removes ok from required", function () {
            $firstnameRequired.addClass("ok");
            callRegistrationInputHandler($firstnameInputGroup);
            expect($firstnameRequired.attr("class")).to.not.contain("ok");
        });
        it("adds warning to required", function () {
            $firstnameRequired.removeClass("warning");
            callRegistrationInputHandler($firstnameInputGroup);
            expect($firstnameRequired.attr("class")).to.contain("warning");
        });
    });
});