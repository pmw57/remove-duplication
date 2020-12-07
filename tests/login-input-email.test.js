describe("login input email", function () {
    /*
       Structure
       - .form-group
         - input
         - .inputstatusmodal
           - .error
           - .feedback
    */
    const $emailGroup = $("#login .form-group").has("[name='E-mail']");
    const $emailInput = $emailGroup.find("input");
    const $emailError = $emailGroup.find(".error");
    const $emailFeedback = $emailGroup.find(".feedback");
    function loginInputHandler() {
        const inputHandler = login.eventHandler.loginInput;
        const thisArg = $emailGroup.get(0);
        inputHandler.call(thisArg);
    }
    after(function () {
        $("#login").trigger("reset");
    });
    describe("email is fake", function () {
        beforeEach(function () {
            $emailInput.val("aaabbb@example.com");
        })
        it("shows a message", function () {
            $emailError.html("");
            loginInputHandler();
            expect($emailError.html()).to.equal("E-mail is Fake text: Please remove repetition");
        });
        it("adds warning to error", function () {
            $emailError.removeClass("warning");
            loginInputHandler();
            expect($emailError.attr("class")).to.contain("warning");
        });
        it("removes ok from error", function () {
            $emailError.addClass("ok");
            loginInputHandler();
            expect($emailError.attr("class")).to.not.contain("ok");
        });
        it("removes glyphicon-ok from feedback", function () {
            $emailFeedback.addClass("glyphicon-ok");
            loginInputHandler();
            expect($emailFeedback.attr("class")).to.not.contain("glyphicon-ok");
        });
        it("adds glyphicon to feedback", function () {
            $emailFeedback.removeClass("glyphicon");
            loginInputHandler();
            expect($emailFeedback.attr("class")).to.contain("glyphicon");
        });
        it("adds glyphicon-remove to feedback", function () {
            $emailFeedback.removeClass("glyphicon-remove");
            loginInputHandler();
            expect($emailFeedback.attr("class")).to.contain("glyphicon-remove");
        });
        it("removes ok from feedback", function () {
            $emailFeedback.addClass("ok");
            loginInputHandler();
            expect($emailFeedback.attr("class")).to.not.contain("ok");
        });
        it("adds warning to feedback", function () {
            $emailFeedback.removeClass("warning");
            loginInputHandler();
            expect($emailFeedback.attr("class")).to.contain("warning");
        });
    });
    describe("email is real", function () {
        beforeEach(function () {
            $emailInput.val("test@example.com");
        })
        it("shows a message", function () {
            $emailError.html("");
            loginInputHandler();
            expect($emailError.html()).to.equal("E-mail is Ok: Your data has been entered correctly");
        });
        it("removes warning from error", function () {
            $emailError.addClass("warning");
            loginInputHandler();
            expect($emailError.attr("class")).to.not.contain("warning");
        });
        it("adds ok to error", function () {
            $emailError.removeClass("ok");
            loginInputHandler();
            expect($emailError.attr("class")).to.contain("ok");
        });
        it("removes glyphicon-remove from feedback", function () {
            $emailFeedback.addClass("glyphicon-remove");
            loginInputHandler();
            expect($emailFeedback.attr("class")).to.not.contain("glyphicon-remove");
        });
        it("adds glyphicon to feedback", function () {
            $emailFeedback.removeClass("glyphicon");
            loginInputHandler();
            expect($emailFeedback.attr("class")).to.contain("glyphicon");
        });
        it("adds glyphicon-ok to feedback", function () {
            $emailFeedback.removeClass("glyphicon-ok");
            loginInputHandler();
            expect($emailFeedback.attr("class")).to.contain("glyphicon-ok");
        });
        it("removes warning from feedback", function () {
            $emailFeedback.addClass("warning");
            loginInputHandler();
            expect($emailFeedback.attr("class")).to.not.contain("warning");
        });
        it("adds ok to feedback", function () {
            $emailFeedback.removeClass("ok");
            loginInputHandler();
            expect($emailFeedback.attr("class")).to.contain("ok");
        });
    });
    describe("is not an email", function () {
        beforeEach(function () {
            $emailInput.val("not an email");
        })
        it("shows a message", function () {
            $emailError.html("");
            loginInputHandler();
            expect($emailError.html()).to.equal("E-mail is Incorrect: Please enter it correctly");
        });
        it("adds warning to error", function () {
            $emailError.removeClass("warning");
            loginInputHandler();
            expect($emailError.attr("class")).to.contain("warning");
        });
        it("removes ok from error", function () {
            $emailError.addClass("ok");
            loginInputHandler();
            expect($emailError.attr("class")).to.not.contain("ok");
        });
        it("removes glyphicon-ok from feedback", function () {
            $emailFeedback.addClass("glyphicon-ok");
            loginInputHandler();
            expect($emailFeedback.attr("class")).to.not.contain("glyphicon-ok");
        });
        it("adds glyphicon to feedback", function () {
            $emailFeedback.removeClass("glyphicon");
            loginInputHandler();
            expect($emailFeedback.attr("class")).to.contain("glyphicon");
        });
        it("adds glyphicon-remove to feedback", function () {
            $emailFeedback.removeClass("glyphicon-remove");
            loginInputHandler();
            expect($emailFeedback.attr("class")).to.contain("glyphicon-remove");
        });
        it("removes ok from feedback", function () {
            $emailFeedback.addClass("ok");
            loginInputHandler();
            expect($emailFeedback.attr("class")).to.not.contain("ok");
        });
        it("adds warning to feedback", function () {
            $emailFeedback.removeClass("warning");
            loginInputHandler();
            expect($emailFeedback.attr("class")).to.contain("warning");
        });
    });
    describe("email is empty", function () {
        beforeEach(function () {
            $emailInput.val("");
        })
        it("shows a message", function () {
            $emailError.html("");
            loginInputHandler();
            expect($emailError.html()).to.equal("E-mail is empty");
        });
        it("adds warning to error", function () {
            $emailError.removeClass("warning");
            loginInputHandler();
            expect($emailError.attr("class")).to.contain("warning");
        });
        it("removes ok from error", function () {
            $emailError.addClass("ok");
            loginInputHandler();
            expect($emailError.attr("class")).to.not.contain("ok");
        });
        it("removes glyphicon-ok from feedback", function () {
            $emailFeedback.addClass("glyphicon-ok");
            loginInputHandler();
            expect($emailFeedback.attr("class")).to.not.contain("glyphicon-ok");
        });
        it("adds glyphicon to feedback", function () {
            $emailFeedback.removeClass("glyphicon");
            loginInputHandler();
            expect($emailFeedback.attr("class")).to.contain("glyphicon");
        });
        it("adds glyphicon-remove to feedback", function () {
            $emailFeedback.removeClass("glyphicon-remove");
            loginInputHandler();
            expect($emailFeedback.attr("class")).to.contain("glyphicon-remove");
        });
        it("removes ok from feedback", function () {
            $emailFeedback.addClass("ok");
            loginInputHandler();
            expect($emailFeedback.attr("class")).to.not.contain("ok");
        });
        it("adds warning to feedback", function () {
            $emailFeedback.removeClass("warning");
            loginInputHandler();
            expect($emailFeedback.attr("class")).to.contain("warning");
        });
    });
});
