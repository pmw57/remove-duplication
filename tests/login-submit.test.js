describe("When login form is submitted, update input messages", function () {
    const fakeEvt = {
        preventDefault: function fakeFunc() {}
    };
    function loginSubmitHandler(fakeEvt) {
        const submitHandler = login.eventHandler.loginSubmit;
        submitHandler(fakeEvt);
    }
    after(function () {
        $("#login").trigger("reset");
    });
    describe("email has value", function () {
        const $emailGroup = $("#login .form-group").eq(1);
        describe("email error", function () {
            const $emailInput = $emailGroup.find("input");
            const $emailError = $emailGroup.find(".error");
            const CSSgreen = "rgb(0, 128, 0)";
            beforeEach(function () {
                $emailInput.val("test value");
            });
            it("Resets the error message", function () {
                $emailError.html("test content");
                loginSubmitHandler(fakeEvt);
                expect($emailError.html()).to.equal("Your E-mail is OK");
            });
            it("Resets the error color", function () {
                $emailError.css("color", "");
                loginSubmitHandler(fakeEvt);
                expect($emailError.css("color")).to.equal(CSSgreen);
            });
            it("Removes the error warning class", function () {
                $emailError.addClass("warning");
                loginSubmitHandler(fakeEvt);
                expect($emailError.attr("class")).to.not.contain("warning");
            });
            it("Adds the error ok class", function () {
                $emailError.removeClass("ok");
                loginSubmitHandler(fakeEvt);
                expect($emailError.attr("class")).to.contain("ok");
            });
        });
        describe("email feedback", function () {
            const $emailInput = $emailGroup.find("input");
            const $emailFeedback = $emailGroup.find(".feedback");
            beforeEach(function () {
                $emailInput.val("test value");
            });
            it("Removes the feedback glyphicon-remove class", function () {
                $emailFeedback.addClass("glyphicon-remove");
                loginSubmitHandler(fakeEvt);
                expect($emailFeedback.attr("class")).to.not.contain("glyphicon-remove");
            });
            it("Adds the feedback glyphicon class", function () {
                $emailFeedback.removeClass("glyphicon");
                loginSubmitHandler(fakeEvt);
                expect($emailFeedback.attr("class")).to.contain("glyphicon");
            });
            it("Adds the feedback glyphicon-ok class", function () {
                $emailFeedback.removeClass("glyphicon-ok");
                loginSubmitHandler(fakeEvt);
                expect($emailFeedback.attr("class")).to.contain("glyphicon-ok");
            });
            it("Adds the feedback ok class", function () {
                $emailFeedback.removeClass("ok");
                loginSubmitHandler(fakeEvt);
                expect($emailFeedback.attr("class")).to.contain("ok");
            });
        });
    });
    describe("email is empty", function () {
        const $emailGroup = $("#login .form-group").eq(1);
        describe("email error", function () {
            const $emailInput = $emailGroup.find(".input-check").first();
            const $emailError = $emailGroup.find(".error");
            const CSSred = "rgb(255, 0, 0)";
            beforeEach(function () {
                $emailInput.val("");
            });
            it("Gives an error message", function () {
                $emailError.html("test content");
                loginSubmitHandler(fakeEvt);
                expect($emailError.html()).to.equal("Your E-mail is empty");
            });
            it("Gives error color", function () {
                $emailError.css("color", "");
                loginSubmitHandler(fakeEvt);
                expect($emailError.css("color")).to.equal(CSSred);
            });
            it("Adds the error warning class", function () {
                $emailError.removeClass("warning");
                loginSubmitHandler(fakeEvt);
                expect($emailError.attr("class")).to.contain("warning");
            });
            it("Removes the error ok class", function () {
                $emailError.addClass("ok");
                loginSubmitHandler(fakeEvt);
                expect($emailError.attr("class")).to.not.contain("ok");
            });
        });
        describe("email feedback", function () {
            const $emailInput = $emailGroup.find(".input-check").first();
            const $emailFeedback = $emailGroup.find(".feedback");
            beforeEach(function () {
                $emailInput.val("");
            });
            it("Removes the feedback glyphicon-ok class", function () {
                $emailFeedback.addClass("glyphicon-ok");
                loginSubmitHandler(fakeEvt);
                expect($emailFeedback.attr("class")).to.not.contain("glyphicon-ok");
            });
            it("Removes the feedback ok class", function () {
                $emailFeedback.addClass("ok");
                loginSubmitHandler(fakeEvt);
                expect($emailFeedback.attr("class")).to.not.contain("ok");
            });
            it("Adds the feedback glyphicon class", function () {
                $emailFeedback.removeClass("glyphicon");
                loginSubmitHandler(fakeEvt);
                expect($emailFeedback.attr("class")).to.contain("glyphicon");
            });
            it("Adds the feedback glyphicon-remove class", function () {
                $emailFeedback.removeClass("glyphicon-remove");
                loginSubmitHandler(fakeEvt);
                expect($emailFeedback.attr("class")).to.contain("glyphicon-remove");
            });
        });
    });
});