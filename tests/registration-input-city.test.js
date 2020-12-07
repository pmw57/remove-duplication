describe("registration input city", function () {
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
        const registrationInputHandler = registration.eventHandler.registrationInput;
        registrationInputHandler.call(thisArg);
    }
    const $cityGroup = $(".form-group").has("[name='Your City']");
    const $cityInputGroup = $cityGroup.find(".input-group");
    const $cityInput = $cityGroup.find("input");
    after(function () {
        $("#registration").trigger("reset");
    });
    describe("when value is empty", function () {
        beforeEach(function () {
            $cityInput.val("");
        });
        describe("error", function () {
            const $cityError = $cityGroup.find(".error");
            it("gives an error message", function () {
                $cityError.html("");
                callRegistrationInputHandler($cityInputGroup);
                expect($cityError.html()).to.equal("Your Your City field is Empty!");
            });
            it("removes ok from error", function () {
                $cityError.addClass("ok");
                callRegistrationInputHandler($cityInputGroup);
                expect($cityError.attr("class")).to.not.contain("ok");
            });
            it("adds warning to error", function () {
                $cityError.removeClass("warning");
                callRegistrationInputHandler($cityInputGroup);
                expect($cityGroup.find(".error").attr("class")).to.contain("warning");
            });
        });
        describe("feedback", function () {
            const $cityFeedback = $cityGroup.find(".feedback");
            it("adds glyphicon to feedback", function () {
                $cityFeedback.removeClass("glyphicon");
                callRegistrationInputHandler($cityInputGroup);
                expect($cityFeedback.attr("class")).to.contain("glyphicon");
            });
            it("removes glyphicon-ok from feedback", function () {
                $cityFeedback.addClass("glyphicon-ok");
                callRegistrationInputHandler($cityInputGroup);
                expect($cityFeedback.attr("class")).to.not.contain("glyphicon-ok");
            });
            it("adds glyphicon-remove to feedback", function () {
                $cityFeedback.removeClass("glyphicon-remove");
                callRegistrationInputHandler($cityInputGroup);
                expect($cityFeedback.attr("class")).to.contain("glyphicon-remove");
            });
            it("removes ok from feedback", function () {
                $cityFeedback.addClass("ok");
                callRegistrationInputHandler($cityInputGroup);
                expect($cityFeedback.attr("class")).to.not.contain("ok");
            });
            it("adds warning to feedback", function () {
                $cityFeedback.removeClass("warning");
                callRegistrationInputHandler($cityInputGroup);
                expect($cityFeedback.attr("class")).to.contain("warning");
            });
        });
        describe("required", function () {
            const $cityRequired = $cityGroup.find(".starrq");
            it("removes ok from required", function () {
                $cityRequired.addClass("ok");
                callRegistrationInputHandler($cityInputGroup);
                expect($cityRequired.attr("class")).to.not.contain("ok");
            });
            it("adds warning to feedback", function () {
                $cityRequired.removeClass("warning");
                callRegistrationInputHandler($cityInputGroup);
                expect($cityRequired.attr("class")).to.contain("warning");
            });
        });
    });
    describe("when value has content", function () {
        beforeEach(function () {
            $cityInput.val("test value");
        });
        describe("error", function () {
            const $cityError = $cityGroup.find(".error");
            it("gives an error message", function () {
                $cityError.html("");
                callRegistrationInputHandler($cityInputGroup);
                expect($cityError.html()).to.equal("Your Your City field is OK!");
            });
            it("removes warning from error", function () {
                $cityError.addClass("warning");
                callRegistrationInputHandler($cityInputGroup);
                expect($cityError.attr("class")).to.not.contain("warning");
            });
            it("adds ok to error", function () {
                $cityError.removeClass("ok");
                callRegistrationInputHandler($cityInputGroup);
                expect($cityGroup.find(".error").attr("class")).to.contain("ok");
            });
        });
        describe("feedback", function () {
            const $cityFeedback = $cityGroup.find(".feedback");
            it("adds glyphicon to feedback", function () {
                $cityFeedback.removeClass("glyphicon");
                callRegistrationInputHandler($cityInputGroup);
                expect($cityFeedback.attr("class")).to.contain("glyphicon");
            });
            it("removes glyphicon-remove from feedback", function () {
                $cityFeedback.addClass("glyphicon-remove");
                callRegistrationInputHandler($cityInputGroup);
                expect($cityFeedback.attr("class")).to.not.contain("glyphicon-remove");
            });
            it("adds glyphicon-ok to feedback", function () {
                $cityFeedback.removeClass("glyphicon-ok");
                callRegistrationInputHandler($cityInputGroup);
                expect($cityFeedback.attr("class")).to.contain("glyphicon-ok");
            });
            it("removes warning from feedback", function () {
                $cityFeedback.addClass("warning");
                callRegistrationInputHandler($cityInputGroup);
                expect($cityFeedback.attr("class")).to.not.contain("warning");
            });
            it("adds ok to feedback", function () {
                $cityFeedback.removeClass("ok");
                callRegistrationInputHandler($cityInputGroup);
                expect($cityFeedback.attr("class")).to.contain("ok");
            });
        });
        describe("required", function () {
            const $cityRequired = $cityGroup.find(".starrq");
            it("removes warning from required", function () {
                $cityRequired.addClass("warning");
                callRegistrationInputHandler($cityInputGroup);
                expect($cityRequired.attr("class")).to.not.contain("warning");
            });
            it("adds ok to feedback", function () {
                $cityRequired.removeClass("ok");
                callRegistrationInputHandler($cityInputGroup);
                expect($cityRequired.attr("class")).to.contain("ok");
            });
        });
    });
});
