describe("change-password input email", function () {
    /*
       Structure
       - .form-group
         - input
         - .inputstatusmodal
           - .error
           - .feedback
    */
    const $emailGroup = $("#changepw .form-group").has("[name='E-mail']");
    const $emailInput = $emailGroup.find("input");
    const $emailError = $emailGroup.find(".error");
    const $emailFeedback = $emailGroup.find(".feedback");
    function passwordInputHandler() {
        const passwordHandler = changePassword.eventHandler.passwordInput;
        const thisArg = $emailGroup.get(0);
        passwordHandler.call(thisArg);
    }
    after(function () {
        $("#changepw").trigger("reset");
    });
    describe("email is fake", function () {
        beforeEach(function () {
            $emailInput.val("aaabbb@example.com");
        })
        it("shows a message", function () {
            $emailError.html("");
            passwordInputHandler();
            expect($emailError.html()).to.equal("E-mail is Fake text: Please remove repetition");
        });
        it("adds warning to error", function () {
            $emailError.removeClass("warning");
            passwordInputHandler();
            expect($emailError.attr("class")).to.contain("warning");
        });
        it("removes ok from error", function () {
            $emailError.addClass("ok");
            passwordInputHandler();
            expect($emailError.attr("class")).to.not.contain("ok");
        });
        it("removes glyphicon-ok from feedback", function () {
            $emailFeedback.addClass("glyphicon-ok");
            passwordInputHandler();
            expect($emailFeedback.attr("class")).to.not.contain("glyphicon-ok");
        });
        it("adds glyphicon to feedback", function () {
            $emailFeedback.removeClass("glyphicon");
            passwordInputHandler();
            expect($emailFeedback.attr("class")).to.contain("glyphicon");
        });
        it("adds glyphicon-remove to feedback", function () {
            $emailFeedback.removeClass("glyphicon-remove");
            passwordInputHandler();
            expect($emailFeedback.attr("class")).to.contain("glyphicon-remove");
        });
        it("removes ok from feedback", function () {
            $emailFeedback.addClass("ok");
            passwordInputHandler();
            expect($emailFeedback.attr("class")).to.not.contain("ok");
        });
        it("adds warning to feedback", function () {
            $emailFeedback.removeClass("warning");
            passwordInputHandler();
            expect($emailFeedback.attr("class")).to.contain("warning");
        });
    });
    describe("email is real", function () {
        beforeEach(function () {
            $emailInput.val("test@example.com");
        })
        it("shows a message", function () {
            $emailError.html("");
            passwordInputHandler();
            expect($emailError.html()).to.equal("E-mail is Ok: Your data has been entered correctly");
        });
        it("removes warning from error", function () {
            $emailError.addClass("warning");
            passwordInputHandler();
            expect($emailError.attr("class")).to.not.contain("warning");
        });
        it("adds ok to error", function () {
            $emailError.removeClass("ok");
            passwordInputHandler();
            expect($emailError.attr("class")).to.contain("ok");
        });
        it("removes glyphicon-remove from feedback", function () {
            $emailFeedback.addClass("glyphicon-remove");
            passwordInputHandler();
            expect($emailFeedback.attr("class")).to.not.contain("glyphicon-remove");
        });
        it("adds glyphicon to feedback", function () {
            $emailFeedback.removeClass("glyphicon");
            passwordInputHandler();
            expect($emailFeedback.attr("class")).to.contain("glyphicon");
        });
        it("adds glyphicon-ok to feedback", function () {
            $emailFeedback.removeClass("glyphicon-ok");
            passwordInputHandler();
            expect($emailFeedback.attr("class")).to.contain("glyphicon-ok");
        });
        it("removes warning from feedback", function () {
            $emailFeedback.addClass("warning");
            passwordInputHandler();
            expect($emailFeedback.attr("class")).to.not.contain("warning");
        });
        it("adds ok to feedback", function () {
            $emailFeedback.removeClass("ok");
            passwordInputHandler();
            expect($emailFeedback.attr("class")).to.contain("ok");
        });
    });
    describe("is not an email", function () {
        beforeEach(function () {
            $emailInput.val("not an email");
        })
        it("shows a message", function () {
            $emailError.html("");
            passwordInputHandler();
            expect($emailError.html()).to.equal("E-mail is Incorrect: Please enter it correctly");
        });
        it("adds warning to error", function () {
            $emailError.removeClass("warning");
            passwordInputHandler();
            expect($emailError.attr("class")).to.contain("warning");
        });
        it("removes ok from error", function () {
            $emailError.addClass("ok");
            passwordInputHandler();
            expect($emailError.attr("class")).to.not.contain("ok");
        });
        it("removes glyphicon-ok from feedback", function () {
            $emailFeedback.addClass("glyphicon-ok");
            passwordInputHandler();
            expect($emailFeedback.attr("class")).to.not.contain("glyphicon-ok");
        });
        it("adds glyphicon to feedback", function () {
            $emailFeedback.removeClass("glyphicon");
            passwordInputHandler();
            expect($emailFeedback.attr("class")).to.contain("glyphicon");
        });
        it("adds glyphicon-remove to feedback", function () {
            $emailFeedback.removeClass("glyphicon-remove");
            passwordInputHandler();
            expect($emailFeedback.attr("class")).to.contain("glyphicon-remove");
        });
        it("removes ok from feedback", function () {
            $emailFeedback.addClass("ok");
            passwordInputHandler();
            expect($emailFeedback.attr("class")).to.not.contain("ok");
        });
        it("adds warning to feedback", function () {
            $emailFeedback.removeClass("warning");
            passwordInputHandler();
            expect($emailFeedback.attr("class")).to.contain("warning");
        });
    });
    describe("email is empty", function () {
        beforeEach(function () {
            $emailInput.val("");
        })
        it("shows a message", function () {
            $emailError.html("");
            passwordInputHandler();
            expect($emailError.html()).to.equal("E-mail is empty");
        });
        it("adds warning to error", function () {
            $emailError.removeClass("warning");
            passwordInputHandler();
            expect($emailError.attr("class")).to.contain("warning");
        });
        it("removes ok from error", function () {
            $emailError.addClass("ok");
            passwordInputHandler();
            expect($emailError.attr("class")).to.not.contain("ok");
        });
        it("removes glyphicon-ok from feedback", function () {
            $emailFeedback.addClass("glyphicon-ok");
            passwordInputHandler();
            expect($emailFeedback.attr("class")).to.not.contain("glyphicon-ok");
        });
        it("adds glyphicon to feedback", function () {
            $emailFeedback.removeClass("glyphicon");
            passwordInputHandler();
            expect($emailFeedback.attr("class")).to.contain("glyphicon");
        });
        it("adds glyphicon-remove to feedback", function () {
            $emailFeedback.removeClass("glyphicon-remove");
            passwordInputHandler();
            expect($emailFeedback.attr("class")).to.contain("glyphicon-remove");
        });
        it("removes ok from feedback", function () {
            $emailFeedback.addClass("ok");
            passwordInputHandler();
            expect($emailFeedback.attr("class")).to.not.contain("ok");
        });
        it("adds warning to feedback", function () {
            $emailFeedback.removeClass("warning");
            passwordInputHandler();
            expect($emailFeedback.attr("class")).to.contain("warning");
        });
    });
});
