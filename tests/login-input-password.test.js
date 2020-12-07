describe("login input password", function () {
    /*
       Structure
       - .form-group
         - input
         - .inputstatusmodal
           - .error
           - .feedback
    */
    const $passwordGroup = $("#login .form-group").has("[name=Password]");
    const $passwordInput = $passwordGroup.find("input");
    const $passwordError = $passwordGroup.find(".error");
    const $passwordFeedback = $passwordGroup.find(".feedback");
    function loginInputHandler() {
        const inputHandler = login.eventHandler.loginInput;
        const thisArg = $passwordGroup.get(0);
        inputHandler.call(thisArg);
    }
    after(function () {
        $("#login").trigger("reset");
    });
    describe("password is fake", function () {
        beforeEach(function () {
            $passwordInput.val("aaabbb");
        })
        it("shows a message", function () {
            $passwordError.html("");
            loginInputHandler($passwordGroup);
            expect($passwordError.html()).to.equal("Password is Fake text: Please remove repetition");
        });
        it("adds warning to error", function () {
            $passwordError.removeClass("warning");
            loginInputHandler($passwordGroup);
            expect($passwordError.attr("class")).to.contain("warning");
        });
        it("removes ok from error", function () {
            $passwordError.addClass("ok");
            loginInputHandler($passwordGroup);
            expect($passwordError.attr("class")).to.not.contain("ok");
        });
        it("removes glyphicon-ok from feedback", function () {
            $passwordFeedback.addClass("glyphicon-ok");
            loginInputHandler($passwordGroup);
            expect($passwordFeedback.attr("class")).to.not.contain("glyphicon-ok");
        });
        it("adds glyphicon to feedback", function () {
            $passwordFeedback.removeClass("glyphicon");
            loginInputHandler($passwordGroup);
            expect($passwordFeedback.attr("class")).to.contain("glyphicon");
        });
        it("adds glyphicon-remove to feedback", function () {
            $passwordFeedback.removeClass("glyphicon-remove");
            loginInputHandler($passwordGroup);
            expect($passwordFeedback.attr("class")).to.contain("glyphicon-remove");
        });
        it("removes ok from feedback", function () {
            $passwordFeedback.addClass("ok");
            loginInputHandler($passwordGroup);
            expect($passwordFeedback.attr("class")).to.not.contain("ok");
        });
        it("adds warning to feedback", function () {
            $passwordFeedback.removeClass("warning");
            loginInputHandler($passwordGroup);
            expect($passwordFeedback.attr("class")).to.contain("warning");
        });
    });
    describe("password is too small", function () {
        beforeEach(function () {
            $passwordInput.val("ab");
        })
        it("shows a message", function () {
            $passwordError.html("");
            loginInputHandler($passwordGroup);
            expect($passwordError.html()).to.equal("Password is Incorrect: Please enter at least 6 characters");
        });
        it("adds warning to error", function () {
            $passwordError.removeClass("warning");
            loginInputHandler($passwordGroup);
            expect($passwordError.attr("class")).to.contain("warning");
        });
        it("removes ok from error", function () {
            $passwordError.addClass("ok");
            loginInputHandler($passwordGroup);
            expect($passwordError.attr("class")).to.not.contain("ok");
        });
        it("removes glyphicon-ok from feedback", function () {
            $passwordFeedback.addClass("glyphicon-ok");
            loginInputHandler($passwordGroup);
            expect($passwordFeedback.attr("class")).to.not.contain("glyphicon-ok");
        });
        it("adds glyphicon to feedback", function () {
            $passwordFeedback.removeClass("glyphicon");
            loginInputHandler($passwordGroup);
            expect($passwordFeedback.attr("class")).to.contain("glyphicon");
        });
        it("adds glyphicon-remove to feedback", function () {
            $passwordFeedback.removeClass("glyphicon-remove");
            loginInputHandler($passwordGroup);
            expect($passwordFeedback.attr("class")).to.contain("glyphicon-remove");
        });
        it("removes ok from feedback", function () {
            $passwordFeedback.addClass("ok");
            loginInputHandler($passwordGroup);
            expect($passwordFeedback.attr("class")).to.not.contain("ok");
        });
        it("adds warning to feedback", function () {
            $passwordFeedback.removeClass("warning");
            loginInputHandler($passwordGroup);
            expect($passwordFeedback.attr("class")).to.contain("warning");
        });
    });
    describe("password is valid", function () {
        beforeEach(function () {
            $passwordInput.val("testpassword");
        })
        it("shows a message", function () {
            $passwordError.html("");
            loginInputHandler($passwordGroup);
            expect($passwordError.html()).to.equal("Password is OK: Your data has been entered correctly");
        });
        it("adds ok to error", function () {
            $passwordError.removeClass("ok");
            loginInputHandler($passwordGroup);
            expect($passwordError.attr("class")).to.contain("ok");
        });
        it("removes warning from error", function () {
            $passwordError.addClass("warning");
            loginInputHandler($passwordGroup);
            expect($passwordError.attr("class")).to.not.contain("warning");
        });
        it("removes glyphicon-remove from feedback", function () {
            $passwordFeedback.addClass("glyphicon-remove");
            loginInputHandler($passwordGroup);
            expect($passwordFeedback.attr("class")).to.not.contain("glyphicon-remove");
        });
        it("adds glyphicon to feedback", function () {
            $passwordFeedback.removeClass("glyphicon");
            loginInputHandler($passwordGroup);
            expect($passwordFeedback.attr("class")).to.contain("glyphicon");
        });
        it("adds glyphicon-ok to feedback", function () {
            $passwordFeedback.removeClass("glyphicon-ok");
            loginInputHandler($passwordGroup);
            expect($passwordFeedback.attr("class")).to.contain("glyphicon-ok");
        });
        it("removes warning from feedback", function () {
            $passwordFeedback.addClass("warning");
            loginInputHandler($passwordGroup);
            expect($passwordFeedback.attr("class")).to.not.contain("warning");
        });
        it("adds ok to feedback", function () {
            $passwordFeedback.removeClass("ok");
            loginInputHandler($passwordGroup);
            expect($passwordFeedback.attr("class")).to.contain("ok");
        });
    });
    describe("password is too large", function () {
        beforeEach(function () {
            $passwordInput.val("toolongforapassword");
        })
        it("shows a message", function () {
            $passwordError.html("");
            loginInputHandler($passwordGroup);
            expect($passwordError.html()).to.equal("Password is Incorrect: Please enter no more than 12 characters");
        });
        it("adds warning to error", function () {
            $passwordError.removeClass("warning");
            loginInputHandler($passwordGroup);
            expect($passwordError.attr("class")).to.contain("warning");
        });
        it("removes ok from error", function () {
            $passwordError.addClass("ok");
            loginInputHandler($passwordGroup);
            expect($passwordError.attr("class")).to.not.contain("ok");
        });
        it("removes glyphicon-ok from feedback", function () {
            $passwordFeedback.addClass("glyphicon-ok");
            loginInputHandler($passwordGroup);
            expect($passwordFeedback.attr("class")).to.not.contain("glyphicon-ok");
        });
        it("adds glyphicon to feedback", function () {
            $passwordFeedback.removeClass("glyphicon");
            loginInputHandler($passwordGroup);
            expect($passwordFeedback.attr("class")).to.contain("glyphicon");
        });
        it("adds glyphicon-remove to feedback", function () {
            $passwordFeedback.removeClass("glyphicon-remove");
            loginInputHandler($passwordGroup);
            expect($passwordFeedback.attr("class")).to.contain("glyphicon-remove");
        });
        it("removes ok from feedback", function () {
            $passwordFeedback.addClass("ok");
            loginInputHandler($passwordGroup);
            expect($passwordFeedback.attr("class")).to.not.contain("ok");
        });
        it("adds warning to feedback", function () {
            $passwordFeedback.removeClass("warning");
            loginInputHandler($passwordGroup);
            expect($passwordFeedback.attr("class")).to.contain("warning");
        });
    });
    describe("password is empty", function () {
        beforeEach(function () {
            $passwordInput.val("");
        })
        it("shows a message", function () {
            $passwordError.html("");
            loginInputHandler($passwordGroup);
            expect($passwordError.html()).to.equal("Password is empty");
        });
        it("adds warning to error", function () {
            $passwordError.removeClass("warning");
            loginInputHandler($passwordGroup);
            expect($passwordError.attr("class")).to.contain("warning");
        });
        it("removes ok from error", function () {
            $passwordError.addClass("ok");
            loginInputHandler($passwordGroup);
            expect($passwordError.attr("class")).to.not.contain("ok");
        });
        it("removes glyphicon-ok from feedback", function () {
            $passwordFeedback.addClass("glyphicon-ok");
            loginInputHandler($passwordGroup);
            expect($passwordFeedback.attr("class")).to.not.contain("glyphicon-ok");
        });
        it("adds glyphicon to feedback", function () {
            $passwordFeedback.removeClass("glyphicon");
            loginInputHandler($passwordGroup);
            expect($passwordFeedback.attr("class")).to.contain("glyphicon");
        });
        it("adds glyphicon-remove to feedback", function () {
            $passwordFeedback.removeClass("glyphicon-remove");
            loginInputHandler($passwordGroup);
            expect($passwordFeedback.attr("class")).to.contain("glyphicon-remove");
        });
        it("removes ok from feedback", function () {
            $passwordFeedback.addClass("ok");
            loginInputHandler($passwordGroup);
            expect($passwordFeedback.attr("class")).to.not.contain("ok");
        });
        it("adds warning to feedback", function () {
            $passwordFeedback.removeClass("warning");
            loginInputHandler($passwordGroup);
            expect($passwordFeedback.attr("class")).to.contain("warning");
        });
    });
});
