describe("registration-input last name", function () {
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
    const $lastnameGroup = $(".form-group").has("[name='Last Name']");
    const $lastnameInputGroup = $lastnameGroup.find(".input-group");
    const $lastnameInput = $lastnameGroup.find("input");
    const $lastnameError = $lastnameGroup.find(".error");
    const $lastnameFeedback = $lastnameGroup.find(".feedback");
    const $lastnameRequired = $lastnameGroup.find(".starrq");
    after(function () {
        $("#registration").trigger("reset");
    });
    describe("first name has repetition", function () {
        beforeEach(function () {
            $lastnameInput.val("abbbc");
        });
        it("shows an error message", function () {
            $lastnameError.html("");
            callRegistrationInputHandler($lastnameInputGroup);
            expect($lastnameError.html()).to.equal("Last Name is Fake text: Please remove repetition");
        });
        it("adds warning to error", function () {
            $lastnameError.removeClass("warning");
            callRegistrationInputHandler($lastnameInputGroup);
            expect($lastnameError.attr("class")).to.contain("warning");
        });
        it("removes ok from error", function () {
            $lastnameError.addClass("ok");
            callRegistrationInputHandler($lastnameInputGroup);
            expect($lastnameError.attr("class")).to.not.contain("ok");
        });
        it("adds glyphicon to feedback", function () {
            $lastnameFeedback.removeClass("glyphicon");
            callRegistrationInputHandler($lastnameInputGroup);
            expect($lastnameFeedback.attr("class")).to.contain("glyphicon");
        });
        it("removes glyphicon-ok from feedback", function () {
            $lastnameFeedback.addClass("glyphicon-ok");
            callRegistrationInputHandler($lastnameInputGroup);
            expect($lastnameFeedback.attr("class")).to.not.contain("glyphicon-ok");
        });
        it("adds glyphicon-remove to feedback", function () {
            $lastnameFeedback.removeClass("glyphicon-remove");
            callRegistrationInputHandler($lastnameInputGroup);
            expect($lastnameFeedback.attr("class")).to.contain("glyphicon-remove");
        });
        it("removes ok from feedback", function () {
            $lastnameFeedback.addClass("ok");
            callRegistrationInputHandler($lastnameInputGroup);
            expect($lastnameFeedback.attr("class")).to.not.contain("ok");
        });
        it("adds warning to feedback", function () {
            $lastnameFeedback.removeClass("warning");
            callRegistrationInputHandler($lastnameInputGroup);
            expect($lastnameFeedback.attr("class")).to.contain("warning");
        });
        it("removes ok from required", function () {
            $lastnameRequired.addClass("ok");
            callRegistrationInputHandler($lastnameInputGroup);
            expect($lastnameRequired.attr("class")).to.not.contain("ok");
        });
        it("adds warning to required", function () {
            $lastnameRequired.removeClass("warning");
            callRegistrationInputHandler($lastnameInputGroup);
            expect($lastnameRequired.attr("class")).to.contain("warning");
        });
    });
});