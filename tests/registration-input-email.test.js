describe("registration-input email", function () {
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
    const $emailGroup = $(".form-group").has("[name='E-mail']");
    const $emailInputGroup = $emailGroup.find(".input-group");
    const $emailInput = $emailGroup.find("input");
    const $emailError = $emailGroup.find(".error");
    const $emailFeedback = $emailGroup.find(".feedback");
    const $emailRequired = $emailGroup.find(".starrq");
    after(function () {
        $("#registration").trigger("reset");
    });
    describe("first name has repetition", function () {
        beforeEach(function () {
            $emailInput.val("abbbc");
        });
        it("shows an error message", function () {
            $emailError.html("");
            callRegistrationInputHandler($emailInputGroup);
            expect($emailError.html()).to.equal("E-mail is Fake text: Please remove repetition");
        });
        it("adds warning to error", function () {
            $emailError.removeClass("warning");
            callRegistrationInputHandler($emailInputGroup);
            expect($emailError.attr("class")).to.contain("warning");
        });
        it("removes ok from error", function () {
            $emailError.addClass("ok");
            callRegistrationInputHandler($emailInputGroup);
            expect($emailError.attr("class")).to.not.contain("ok");
        });
        it("adds glyphicon to feedback", function () {
            $emailFeedback.removeClass("glyphicon");
            callRegistrationInputHandler($emailInputGroup);
            expect($emailFeedback.attr("class")).to.contain("glyphicon");
        });
        it("removes glyphicon-ok from feedback", function () {
            $emailFeedback.addClass("glyphicon-ok");
            callRegistrationInputHandler($emailInputGroup);
            expect($emailFeedback.attr("class")).to.not.contain("glyphicon-ok");
        });
        it("adds glyphicon-remove to feedback", function () {
            $emailFeedback.removeClass("glyphicon-remove");
            callRegistrationInputHandler($emailInputGroup);
            expect($emailFeedback.attr("class")).to.contain("glyphicon-remove");
        });
        it("removes ok from feedback", function () {
            $emailFeedback.addClass("ok");
            callRegistrationInputHandler($emailInputGroup);
            expect($emailFeedback.attr("class")).to.not.contain("ok");
        });
        it("adds warning to feedback", function () {
            $emailFeedback.removeClass("warning");
            callRegistrationInputHandler($emailInputGroup);
            expect($emailFeedback.attr("class")).to.contain("warning");
        });
        it("removes ok from required", function () {
            $emailRequired.addClass("ok");
            callRegistrationInputHandler($emailInputGroup);
            expect($emailRequired.attr("class")).to.not.contain("ok");
        });
        it("adds warning to required", function () {
            $emailRequired.removeClass("warning");
            callRegistrationInputHandler($emailInputGroup);
            expect($emailRequired.attr("class")).to.contain("warning");
        });
    });
});