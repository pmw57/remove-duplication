describe("When change-password form is reset, update input messages", function () {
    const passwordResetHandler = changePassword.eventHandler.passwordReset;
    const fakeEvt = {
        preventDefault: function fakeFunc() {}
    };
    describe("email error", function () {
        const $emailGroup = $("#changepw .form-group").eq(1);
        const $emailError = $emailGroup.find(".error");
        it("Resets the error message", function () {
            $emailError.html("test content");
            passwordResetHandler(fakeEvt);
            expect($emailError.html()).to.equal("Your E-mail");
        });
        it("Resets the error color", function () {
            $emailError.removeClass("green");
            passwordResetHandler(fakeEvt);
            expect($emailError.attr("class")).to.not.contain("green");
        });
        it("Removes the error warning class", function () {
            $emailError.addClass("warning");
            passwordResetHandler(fakeEvt);
            expect($emailError.attr("class")).to.not.contain("warning");
        });
        it("Adds the error ok class", function () {
            $emailError.removeClass("ok");
            passwordResetHandler(fakeEvt);
            expect($emailError.attr("class")).to.contain("ok");
        });
    });
    describe("email feedback", function () {
        const $emailGroup = $("#changepw .form-group").eq(1);
        const $emailFeedback = $emailGroup.find(".feedback");
        it("Removes the feedback glyphicon class", function () {
            $emailFeedback.addClass("glyphicon");
            passwordResetHandler(fakeEvt);
            expect($emailFeedback.attr("class")).to.not.contain("glyphicon");
        });
        it("Removes the feedback glyphicon-ok class", function () {
            $emailFeedback.addClass("glyphicon-ok");
            passwordResetHandler(fakeEvt);
            expect($emailFeedback.attr("class")).to.not.contain("glyphicon-ok");
        });
        it("Removes the feedback ok class", function () {
            $emailFeedback.addClass("ok");
            passwordResetHandler(fakeEvt);
            expect($emailFeedback.attr("class")).to.not.contain("ok");
        });
        it("Removes the feedback glyphicon-remove class", function () {
            $emailFeedback.addClass("glyphicon-remove");
            passwordResetHandler(fakeEvt);
            expect($emailFeedback.attr("class")).to.not.contain("glyphicon-remove");
        });
    });
});