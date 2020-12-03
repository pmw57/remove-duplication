describe("registration-input password", function () {
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
    const $passwordGroup = $(".form-group").has("[name='Password']");
    const $passwordInputGroup = $passwordGroup.find(".input-group");
    const $passwordInput = $passwordGroup.find("input");
    const $passwordError = $passwordGroup.find(".error");
    const $passwordFeedback = $passwordGroup.find(".feedback");
    const $passwordRequired = $passwordGroup.find(".starrq");
    describe("password has repetition", function () {
        beforeEach(function () {
            $passwordInput.val("abbbc");
        });
        it("shows an error message", function () {
            $passwordError.html("");
            callRegistrationInputHandler($passwordInputGroup);
            expect($passwordError.html()).to.equal("Password is Fake text: Please remove repetition");
        });
        it("adds warning to error", function () {
            $passwordError.removeClass("warning");
            callRegistrationInputHandler($passwordInputGroup);
            expect($passwordError.attr("class")).to.contain("warning");
        });
        it("removes ok from error", function () {
            $passwordError.addClass("ok");
            callRegistrationInputHandler($passwordInputGroup);
            expect($passwordError.attr("class")).to.not.contain("ok");
        });
        it("adds glyphicon to feedback", function () {
            $passwordFeedback.removeClass("glyphicon");
            callRegistrationInputHandler($passwordInputGroup);
            expect($passwordFeedback.attr("class")).to.contain("glyphicon");
        });
        it("removes glyphicon-ok from feedback", function () {
            $passwordFeedback.addClass("glyphicon-ok");
            callRegistrationInputHandler($passwordInputGroup);
            expect($passwordFeedback.attr("class")).to.not.contain("glyphicon-ok");
        });
        it("adds glyphicon-remove to feedback", function () {
            $passwordFeedback.removeClass("glyphicon-remove");
            callRegistrationInputHandler($passwordInputGroup);
            expect($passwordFeedback.attr("class")).to.contain("glyphicon-remove");
        });
        it("removes ok from feedback", function () {
            $passwordFeedback.addClass("ok");
            callRegistrationInputHandler($passwordInputGroup);
            expect($passwordFeedback.attr("class")).to.not.contain("ok");
        });
        it("adds warning to feedback", function () {
            $passwordFeedback.removeClass("warning");
            callRegistrationInputHandler($passwordInputGroup);
            expect($passwordFeedback.attr("class")).to.contain("warning");
        });
        it("removes ok from required", function () {
            $passwordRequired.addClass("ok");
            callRegistrationInputHandler($passwordInputGroup);
            expect($passwordRequired.attr("class")).to.not.contain("ok");
        });
        it("adds warning to required", function () {
            $passwordRequired.removeClass("warning");
            callRegistrationInputHandler($passwordInputGroup);
            expect($passwordRequired.attr("class")).to.contain("warning");
        });
    });
});