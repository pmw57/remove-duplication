describe("login reset", function () {
    /*
       Structure
       - .form-group
         - input
         - .inputstatusmodal
           - .error
           - .feedback
    */
    function loginResetHandler() {
        const resetHandler = login.eventHandler.loginReset;
        resetHandler();
    }
    describe("email", function () {
        const $emailGroup = $("#login .form-group").has("[name='E-mail']");
        const $emailInput = $emailGroup.find("input");
        const $emailError = $emailGroup.find(".error");
        const $emailFeedback = $emailGroup.find(".feedback");
        it("resets the email message", function () {
            $emailError.html("");
            $("#login").trigger("reset");
            expect($emailError.html()).to.contain("Your E-mail");
        });
        describe("when email has value", function () {
            beforeEach(function () {
                $emailInput.val("test value");
            });
            it("Shows a message", function () {
                $emailError.html("");
                loginResetHandler();
                expect($emailError.html()).to.equal("Your E-mail");
            });
            it("sets the message color", function () {
                const CSSgreen = "rgb(0, 128, 0)";
                $emailError.css("color", "red");
                loginResetHandler();
                expect($emailError.css("color")).to.equal(CSSgreen);
            });
            it("removes warning from error", function () {
                $emailError.addClass("warning");
                loginResetHandler();
                expect($emailError.attr("class")).to.not.contain("warning");
            });
            it("adds ok to error", function () {
                $emailError.removeClass("ok");
                loginResetHandler();
                expect($emailError.attr("class")).to.contain("ok");
            });
            it("removes glyphicon from feedback", function () {
                $emailFeedback.addClass("glyphicon");
                loginResetHandler();
                expect($emailFeedback.attr("class")).to.not.contain("glyphicon");
            });
            it("removes glyphicon-ok from feedback", function () {
                $emailFeedback.addClass("glyphicon-ok");
                loginResetHandler();
                expect($emailFeedback.attr("class")).to.not.contain("glyphicon-ok");
            });
            it("removes ok from feedback", function () {
                $emailFeedback.addClass("ok");
                loginResetHandler();
                expect($emailFeedback.attr("class")).to.not.contain("ok");
            });
        });
        describe("when email is empty", function () {
            beforeEach(function () {
                $emailInput.val("");
            });
            it("Shows a message", function () {
                $emailError.html("");
                loginResetHandler();
                expect($emailError.html()).to.equal("Your E-mail");
            });
            it("sets the message color", function () {
                const CSSgreen = "rgb(0, 128, 0)";
                $emailError.css("color", "red");
                loginResetHandler();
                expect($emailError.css("color")).to.equal(CSSgreen);
            });
            it("removes glyphicon from feedback", function () {
                $emailFeedback.addClass("glyphicon");
                loginResetHandler();
                expect($emailFeedback.attr("class")).to.not.contain("glyphicon");
            });
            it("removes glyphicon-remove from feedback", function () {
                $emailFeedback.addClass("glyphicon-remove");
                loginResetHandler();
                expect($emailFeedback.attr("class")).to.not.contain("glyphicon-remove");
            });
        });
    });
    describe("Password", function () {
        const $passwordGroup = $("#login .form-group").has("[name=Password]");
        const $passwordInput = $passwordGroup.find("input");
        const $passwordError = $passwordGroup.find(".error");
        const $passwordFeedback = $passwordGroup.find(".feedback");
        describe("when password has value", function () {
            beforeEach(function () {
                $passwordInput.val("test value");
            });
            it("Shows a message", function () {
                $passwordError.html("");
                loginResetHandler();
                expect($passwordError.html()).to.equal("Your Password");
            });
            it("sets the message color", function () {
                const CSSgreen = "rgb(0, 128, 0)";
                $passwordError.css("color", "red");
                loginResetHandler();
                expect($passwordError.css("color")).to.equal(CSSgreen);
            });
            it("removes warning from error", function () {
                $passwordError.addClass("warning");
                loginResetHandler();
                expect($passwordError.attr("class")).to.not.contain("warning");
            });
            it("adds ok to error", function () {
                $passwordError.removeClass("ok");
                loginResetHandler();
                expect($passwordError.attr("class")).to.contain("ok");
            });
            it("removes glyphicon from feedback", function () {
                $passwordFeedback.addClass("glyphicon");
                loginResetHandler();
                expect($passwordFeedback.attr("class")).to.not.contain("glyphicon");
            });
            it("removes glyphicon-ok from feedback", function () {
                $passwordFeedback.addClass("glyphicon-ok");
                loginResetHandler();
                expect($passwordFeedback.attr("class")).to.not.contain("glyphicon-ok");
            });
            it("removes ok from feedback", function () {
                $passwordFeedback.addClass("ok");
                loginResetHandler();
                expect($passwordFeedback.attr("class")).to.not.contain("ok");
            });
        });
        describe("when password is empty", function () {
            beforeEach(function () {
                $passwordInput.val("");
            });
            it("Shows a message", function () {
                $passwordError.html("");
                loginResetHandler();
                expect($passwordError.html()).to.equal("Your Password");
            });
            it("sets the message color", function () {
                const CSSgreen = "rgb(0, 128, 0)";
                $passwordError.css("color", "red");
                loginResetHandler();
                expect($passwordError.css("color")).to.equal(CSSgreen);
            });
            it("removes glyphicon from feedback", function () {
                $passwordFeedback.addClass("glyphicon");
                loginResetHandler();
                expect($passwordFeedback.attr("class")).to.not.contain("glyphicon");
            });
            it("removes glyphicon-remove from feedback", function () {
                $passwordFeedback.addClass("glyphicon-remove");
                loginResetHandler();
                expect($passwordFeedback.attr("class")).to.not.contain("glyphicon-remove");
            });
        });
    });
});
