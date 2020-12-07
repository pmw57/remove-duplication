describe("registration-input retype password", function () {
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
    const $retypeGroup = $(".form-group").has("[name='Retype Password']");
    const $retypeInputGroup = $retypeGroup.find(".input-group");
    const $retypeInput = $retypeGroup.find("input");
    const $retypeError = $retypeGroup.find(".error");
    const $retypeFeedback = $retypeGroup.find(".feedback");
    const $retypeRequired = $retypeGroup.find(".starrq");
    after(function () {
        $("#registration").trigger("reset");
    });
    describe("value has content", function () {
        beforeEach(function () {
            $retypeInput.val("test value");
        });
        describe("doesn't match password", function () {
            beforeEach(function () {
                const $password = $("[name=Password]");
                $password.val($retypeInput.val() + "nomatch");
            });
            it("shows an error message", function () {
                $retypeError.html("");
                callRegistrationInputHandler($retypeInputGroup);
                expect($retypeError.html()).to.equal("Retype Password is Incorrect: Password doesn't match retyped pwd");
            });
            it("adds warning to error", function () {
                $retypeError.removeClass("warning");
                callRegistrationInputHandler($retypeInputGroup);
                expect($retypeError.attr("class")).to.contain("warning");
            });
            it("removes ok from error", function () {
                $retypeError.addClass("ok");
                callRegistrationInputHandler($retypeInputGroup);
                expect($retypeError.attr("class")).to.not.contain("ok");
            });
            it("adds glyphicon to feedback", function () {
                $retypeFeedback.removeClass("glyphicon");
                callRegistrationInputHandler($retypeInputGroup);
                expect($retypeFeedback.attr("class")).to.contain("glyphicon");
            });
            it("removes glyphicon-ok from feedback", function () {
                $retypeFeedback.addClass("glyphicon-ok");
                callRegistrationInputHandler($retypeInputGroup);
                expect($retypeFeedback.attr("class")).to.not.contain("glyphicon-ok");
            });
            it("adds glyphicon-remove to feedback", function () {
                $retypeFeedback.removeClass("glyphicon-remove");
                callRegistrationInputHandler($retypeInputGroup);
                expect($retypeFeedback.attr("class")).to.contain("glyphicon-remove");
            });
            it("removes ok from feedback", function () {
                $retypeFeedback.addClass("ok");
                callRegistrationInputHandler($retypeInputGroup);
                expect($retypeFeedback.attr("class")).to.not.contain("ok");
            });
            it("adds warning to feedback", function () {
                $retypeFeedback.removeClass("warning");
                callRegistrationInputHandler($retypeInputGroup);
                expect($retypeFeedback.attr("class")).to.contain("warning");
            });
            it("removes ok from required", function () {
                $retypeRequired.addClass("ok");
                callRegistrationInputHandler($retypeInputGroup);
                expect($retypeRequired.attr("class")).to.not.contain("ok");
            });
            it("adds warning to required", function () {
                $retypeRequired.removeClass("warning");
                callRegistrationInputHandler($retypeInputGroup);
                expect($retypeRequired.attr("class")).to.contain("warning");
            });
        });
        describe("does match password", function () {
            beforeEach(function () {
                const $password = $("[name=Password]");
                $password.val($retypeInput.val());
            });
            const $retypeError = $retypeGroup.find(".error");
            const $retypeFeedback = $retypeGroup.find(".feedback");
            const $retypeRequired = $retypeGroup.find(".starrq");
            it("shows an error message", function () {
                $retypeError.html("");
                callRegistrationInputHandler($retypeInputGroup);
                expect($retypeError.html()).to.equal("Retype Password is OK: Your data has been entered correctly");
            });
            it("adds ok to error", function () {
                $retypeError.removeClass("ok");
                callRegistrationInputHandler($retypeInputGroup);
                expect($retypeError.attr("class")).to.contain("ok");
            });
            it("removes warning from error", function () {
                $retypeError.addClass("warning");
                callRegistrationInputHandler($retypeInputGroup);
                expect($retypeError.attr("class")).to.not.contain("warning");
            });
            it("adds glyphicon to feedback", function () {
                $retypeFeedback.removeClass("glyphicon");
                callRegistrationInputHandler($retypeInputGroup);
                expect($retypeFeedback.attr("class")).to.contain("glyphicon");
            });
            it("removes glyphicon-remove from feedback", function () {
                $retypeFeedback.addClass("glyphicon-remove");
                callRegistrationInputHandler($retypeInputGroup);
                expect($retypeFeedback.attr("class")).to.not.contain("glyphicon-remove");
            });
            it("adds glyphicon-ok to feedback", function () {
                $retypeFeedback.removeClass("glyphicon-ok");
                callRegistrationInputHandler($retypeInputGroup);
                expect($retypeFeedback.attr("class")).to.contain("glyphicon-ok");
            });
            it("removes warning from feedback", function () {
                $retypeFeedback.addClass("warning");
                callRegistrationInputHandler($retypeInputGroup);
                expect($retypeFeedback.attr("class")).to.not.contain("warning");
            });
            it("adds ok to feedback", function () {
                $retypeFeedback.removeClass("ok");
                callRegistrationInputHandler($retypeInputGroup);
                expect($retypeFeedback.attr("class")).to.contain("ok");
            });
            it("removes warning from required", function () {
                $retypeRequired.addClass("warning");
                callRegistrationInputHandler($retypeInputGroup);
                expect($retypeRequired.attr("class")).to.not.contain("warning");
            });
            it("adds ok to required", function () {
                $retypeRequired.removeClass("ok");
                callRegistrationInputHandler($retypeInputGroup);
                expect($retypeRequired.attr("class")).to.contain("ok");
            });
        });
    });
    describe("value is empty", function () {
        beforeEach(function () {
            $retypeInput.val("");
        });
        const $retypeError = $retypeGroup.find(".error");
        const $retypeFeedback = $retypeGroup.find(".feedback");
        const $retypeRequired = $retypeGroup.find(".starrq");
        it("shows an error message", function () {
            $retypeError.html("");
            callRegistrationInputHandler($retypeInputGroup);
            expect($retypeError.html()).to.equal("Retype Password is EMPTY: Please enter data into this input");
        });
        it("adds warning to error", function () {
            $retypeError.removeClass("warning");
            callRegistrationInputHandler($retypeInputGroup);
            expect($retypeError.attr("class")).to.contain("warning");
        });
        it("removes ok from error", function () {
            $retypeError.addClass("ok");
            callRegistrationInputHandler($retypeInputGroup);
            expect($retypeError.attr("class")).to.not.contain("ok");
        });
        it("adds glyphicon to feedback", function () {
            $retypeFeedback.removeClass("glyphicon");
            callRegistrationInputHandler($retypeInputGroup);
            expect($retypeFeedback.attr("class")).to.contain("glyphicon");
        });
        it("removes glyphicon-ok from feedback", function () {
            $retypeFeedback.addClass("glyphicon-ok");
            callRegistrationInputHandler($retypeInputGroup);
            expect($retypeFeedback.attr("class")).to.not.contain("glyphicon-ok");
        });
        it("adds glyphicon-remove to feedback", function () {
            $retypeFeedback.removeClass("glyphicon-remove");
            callRegistrationInputHandler($retypeInputGroup);
            expect($retypeFeedback.attr("class")).to.contain("glyphicon-remove");
        });
        it("removes ok from feedback", function () {
            $retypeFeedback.addClass("ok");
            callRegistrationInputHandler($retypeInputGroup);
            expect($retypeFeedback.attr("class")).to.not.contain("ok");
        });
        it("adds warning to feedback", function () {
            $retypeFeedback.removeClass("warning");
            callRegistrationInputHandler($retypeInputGroup);
            expect($retypeFeedback.attr("class")).to.contain("warning");
        });
        it("removes warning from required", function () {
            $retypeRequired.addClass("warning");
            callRegistrationInputHandler($retypeInputGroup);
            expect($retypeRequired.attr("class")).to.not.contain("warning");
        });
        it("adds ok to required", function () {
            $retypeRequired.removeClass("ok");
            callRegistrationInputHandler($retypeInputGroup);
            expect($retypeRequired.attr("class")).to.contain("ok");
        });
    });
});
