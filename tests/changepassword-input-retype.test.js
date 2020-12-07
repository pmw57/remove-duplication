describe("change-password input retype", function () {
    /*
       Structure
       - .form-group
         - input
         - .inputstatusmodal
           - .error
           - .feedback
    */
    const $passwordInput = $("#changepw .form-group").has("[name=Password]").find("input");
    const $retypeGroup = $("#changepw .form-group").has("[name='Password Retype']");
    const $retypeInput = $retypeGroup.find("input");
    const $retypeError = $retypeGroup.find(".error");
    const $retypeFeedback = $retypeGroup.find(".feedback");
    function passwordInputHandler() {
        const passwordHandler = changePassword.eventHandler.passwordInput;
        const thisArg = $retypeGroup.get(0);
        passwordHandler.call(thisArg);
    }
    after(function () {
        $("#login").trigger("reset");
    });
    describe("password doesn't match", function () {
        beforeEach(function () {
            $passwordInput.val("validpassword");
            $retypeInput.val("mistypedpassword");
        })
        it("shows a message", function () {
            $retypeError.html("");
            passwordInputHandler();
            expect($retypeError.html()).to.equal("Password Retype is Incorrect: Password doesn't match retyped password");
        });
        it("adds warning to error", function () {
            $retypeError.removeClass("warning");
            passwordInputHandler();
            expect($retypeError.attr("class")).to.contain("warning");
        });
        it("removes ok from error", function () {
            $retypeError.addClass("ok");
            passwordInputHandler();
            expect($retypeError.attr("class")).to.not.contain("ok");
        });
        it("removes glyphicon-ok from feedback", function () {
            $retypeFeedback.addClass("glyphicon-ok");
            passwordInputHandler();
            expect($retypeFeedback.attr("class")).to.not.contain("glyphicon-ok");
        });
        it("adds glyphicon to feedback", function () {
            $retypeFeedback.removeClass("glyphicon");
            passwordInputHandler();
            expect($retypeFeedback.attr("class")).to.contain("glyphicon");
        });
        it("adds glyphicon-remove to feedback", function () {
            $retypeFeedback.removeClass("glyphicon-remove");
            passwordInputHandler();
            expect($retypeFeedback.attr("class")).to.contain("glyphicon-remove");
        });
        it("removes ok from feedback", function () {
            $retypeFeedback.addClass("ok");
            passwordInputHandler();
            expect($retypeFeedback.attr("class")).to.not.contain("ok");
        });
        it("adds warning to feedback", function () {
            $retypeFeedback.removeClass("warning");
            passwordInputHandler();
            expect($retypeFeedback.attr("class")).to.contain("warning");
        });
    });
    describe("password matches", function () {
        beforeEach(function () {
            $passwordInput.val("testpassword");
            $retypeInput.val("testpassword");
        })
        it("shows a message", function () {
            $retypeError.html("");
            passwordInputHandler();
            expect($retypeError.html()).to.equal("Password Retype is OK: Your data has been entered correctly");
        });
        it("adds ok to error", function () {
            $retypeError.removeClass("ok");
            passwordInputHandler();
            expect($retypeError.attr("class")).to.contain("ok");
        });
        it("removes warning from error", function () {
            $retypeError.addClass("warning");
            passwordInputHandler();
            expect($retypeError.attr("class")).to.not.contain("warning");
        });
        it("removes glyphicon-remove from feedback", function () {
            $retypeFeedback.addClass("glyphicon-remove");
            passwordInputHandler();
            expect($retypeFeedback.attr("class")).to.not.contain("glyphicon-remove");
        });
        it("adds glyphicon to feedback", function () {
            $retypeFeedback.removeClass("glyphicon");
            passwordInputHandler();
            expect($retypeFeedback.attr("class")).to.contain("glyphicon");
        });
        it("adds glyphicon-ok to feedback", function () {
            $retypeFeedback.removeClass("glyphicon-ok");
            passwordInputHandler();
            expect($retypeFeedback.attr("class")).to.contain("glyphicon-ok");
        });
        it("removes warning from feedback", function () {
            $retypeFeedback.addClass("warning");
            passwordInputHandler();
            expect($retypeFeedback.attr("class")).to.not.contain("warning");
        });
        it("adds ok to feedback", function () {
            $retypeFeedback.removeClass("ok");
            passwordInputHandler();
            expect($retypeFeedback.attr("class")).to.contain("ok");
        });
    });
    describe("password is empty", function () {
        beforeEach(function () {
            $retypeInput.val("");
        })
        it("shows a message", function () {
            $retypeError.html("");
            passwordInputHandler();
            expect($retypeError.html()).to.equal("Password Retype is empty");
        });
        it("adds warning to error", function () {
            $retypeError.removeClass("warning");
            passwordInputHandler();
            expect($retypeError.attr("class")).to.contain("warning");
        });
        it("removes ok from error", function () {
            $retypeError.addClass("ok");
            passwordInputHandler();
            expect($retypeError.attr("class")).to.not.contain("ok");
        });
        it("removes glyphicon-ok from feedback", function () {
            $retypeFeedback.addClass("glyphicon-ok");
            passwordInputHandler();
            expect($retypeFeedback.attr("class")).to.not.contain("glyphicon-ok");
        });
        it("adds glyphicon to feedback", function () {
            $retypeFeedback.removeClass("glyphicon");
            passwordInputHandler();
            expect($retypeFeedback.attr("class")).to.contain("glyphicon");
        });
        it("adds glyphicon-remove to feedback", function () {
            $retypeFeedback.removeClass("glyphicon-remove");
            passwordInputHandler();
            expect($retypeFeedback.attr("class")).to.contain("glyphicon-remove");
        });
        it("removes ok from feedback", function () {
            $retypeFeedback.addClass("ok");
            passwordInputHandler();
            expect($retypeFeedback.attr("class")).to.not.contain("ok");
        });
        it("adds warning to feedback", function () {
            $retypeFeedback.removeClass("warning");
            passwordInputHandler();
            expect($retypeFeedback.attr("class")).to.contain("warning");
        });
    });
});
