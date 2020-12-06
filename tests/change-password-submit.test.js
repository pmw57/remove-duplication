describe("change password submit", function () {
    /*
       Structure
       - .form-group
         - input
         - .inputstatusmodal
           - .error
           - .feedback
    */
    const fakeEvt = {
        preventDefault: function fakeFunc() {}
    };
    function changePasswordSubmitHandler() {
        const SubmitHandler = changePassword.eventHandler.passwordSubmit;
        SubmitHandler(fakeEvt);
    }
    describe("email", function () {
        const $emailGroup = $("#changepw .form-group").has("[name='E-mail']");
        const $emailInput = $emailGroup.find("input");
        const $emailError = $emailGroup.find(".error");
        const $emailFeedback = $emailGroup.find(".feedback");
        describe("email has value", function () {
            beforeEach(function () {
                $emailInput.val("test value");
            });
            it("shows a message", function () {
                $emailError.html("");
                changePasswordSubmitHandler();
                expect($emailError.html()).to.equal("Your E-mail is OK");
            });
            it("sets the message color", function () {
                const CSSgreen = "rgb(0, 128, 0)";
                $emailError.css("color", "red");
                changePasswordSubmitHandler();
                expect($emailError.css("color")).to.equal(CSSgreen);
            });
            it("removes warning from error", function () {
                $emailError.addClass("warning");
                changePasswordSubmitHandler();
                expect($emailError.attr("class")).to.not.contain("warning");
            });
            it("adds ok to error", function () {
                $emailError.removeClass("ok");
                changePasswordSubmitHandler();
                expect($emailError.attr("class")).to.contain("ok");
            });
            it("adds glyphicon to feedback", function () {
                $emailFeedback.removeClass("glyphicon");
                changePasswordSubmitHandler();
                expect($emailFeedback.attr("class")).to.contain("glyphicon");
            });
            it("removes glyphicon-remove from feedback", function () {
                $emailFeedback.addClass("glyphicon-remove");
                changePasswordSubmitHandler();
                expect($emailFeedback.attr("class")).to.not.contain("glyphicon-remove");
            });
            it("removes warning from feedback", function () {
                $emailFeedback.addClass("warning");
                changePasswordSubmitHandler();
                expect($emailFeedback.attr("class")).to.not.contain("warning");
            });
            it("adds glyphicon-ok to feedback", function () {
                $emailFeedback.removeClass("glyphicon-ok");
                changePasswordSubmitHandler();
                expect($emailFeedback.attr("class")).to.contain("glyphicon-ok");
            });
            it("adds ok from feedback", function () {
                $emailFeedback.removeClass("ok");
                changePasswordSubmitHandler();
                expect($emailFeedback.attr("class")).to.contain("ok");
            });
        });
        describe("email is empty", function () {
            beforeEach(function () {
                $emailInput.val("");
            });
            it("uses submit event to submit the form", function () {
                $emailError.html("");
                $(".button1color2").trigger("click");
                expect($emailError.html()).to.contain("Your E-mail is empty");
            });        
            it("shows a message", function () {
                $emailError.html("");
                changePasswordSubmitHandler();
                expect($emailError.html()).to.equal("Your E-mail is empty");
            });
            it("sets the message color", function () {
                const CSSred = "rgb(255, 0, 0)";
                $emailError.css("color", "green");
                changePasswordSubmitHandler();
                expect($emailError.css("color")).to.equal(CSSred);
            });
            it("removes ok from error", function () {
                $emailError.addClass("ok");
                changePasswordSubmitHandler();
                expect($emailError.attr("class")).to.not.contain("ok");
            });
            it("adds warning to error", function () {
                $emailError.removeClass("warning");
                changePasswordSubmitHandler();
                expect($emailError.attr("class")).to.contain("warning");
            });
            it("adds glyphicon to feedback", function () {
                $emailFeedback.removeClass("glyphicon");
                changePasswordSubmitHandler();
                expect($emailFeedback.attr("class")).to.contain("glyphicon");
            });
            it("removes glyphicon-ok from feedback", function () {
                $emailFeedback.addClass("glyphicon-ok");
                changePasswordSubmitHandler();
                expect($emailFeedback.attr("class")).to.not.contain("glyphicon-ok");
            });
            it("removes ok from feedback", function () {
                $emailFeedback.addClass("ok");
                changePasswordSubmitHandler();
                expect($emailFeedback.attr("class")).to.not.contain("ok");
            });
            it("adds glyphicon-remove to feedback", function () {
                $emailFeedback.removeClass("glyphicon-remove");
                changePasswordSubmitHandler();
                expect($emailFeedback.attr("class")).to.contain("glyphicon-remove");
            });
            it("adds warning to feedback", function () {
                $emailFeedback.removeClass("warning");
                changePasswordSubmitHandler();
                expect($emailFeedback.attr("class")).to.contain("warning");
            });
        });
    });
    describe("password", function () {
        const $retypeGroup = $("#changepw .form-group").has("[name='Password']");
        const $passwordInput = $retypeGroup.find("input");
        const $passwordError = $retypeGroup.find(".error");
        const $passwordFeedback = $retypeGroup.find(".feedback");
        describe("password has value", function () {
            beforeEach(function () {
                $passwordInput.val("test value");
            });
            it("shows a message", function () {
                $passwordError.html("");
                changePasswordSubmitHandler();
                expect($passwordError.html()).to.equal("Your Password is OK");
            });
            it("sets the message color", function () {
                const CSSgreen = "rgb(0, 128, 0)";
                $passwordError.css("color", "red");
                changePasswordSubmitHandler();
                expect($passwordError.css("color")).to.equal(CSSgreen);
            });
            it("removes warning from error", function () {
                $passwordError.addClass("warning");
                changePasswordSubmitHandler();
                expect($passwordError.attr("class")).to.not.contain("warning");
            });
            it("adds ok to error", function () {
                $passwordError.removeClass("ok");
                changePasswordSubmitHandler();
                expect($passwordError.attr("class")).to.contain("ok");
            });
            it("adds glyphicon to feedback", function () {
                $passwordFeedback.removeClass("glyphicon");
                changePasswordSubmitHandler();
                expect($passwordFeedback.attr("class")).to.contain("glyphicon");
            });
            it("removes glyphicon-remove from feedback", function () {
                $passwordFeedback.addClass("glyphicon-remove");
                changePasswordSubmitHandler();
                expect($passwordFeedback.attr("class")).to.not.contain("glyphicon-remove");
            });
            it("removes warning from feedback", function () {
                $passwordFeedback.addClass("warning");
                changePasswordSubmitHandler();
                expect($passwordFeedback.attr("class")).to.not.contain("warning");
            });
            it("adds glyphicon-ok to feedback", function () {
                $passwordFeedback.removeClass("glyphicon-ok");
                changePasswordSubmitHandler();
                expect($passwordFeedback.attr("class")).to.contain("glyphicon-ok");
            });
            it("adds ok from feedback", function () {
                $passwordFeedback.removeClass("ok");
                changePasswordSubmitHandler();
                expect($passwordFeedback.attr("class")).to.contain("ok");
            });
        });
        describe("password is empty", function () {
            beforeEach(function () {
                $passwordInput.val("");
            });
            it("uses submit event to submit the form", function () {
                $passwordError.html("");
                $(".button1color2").trigger("click");
                expect($passwordError.html()).to.contain("Your Password is empty");
            });        
            it("shows a message", function () {
                $passwordError.html("");
                changePasswordSubmitHandler();
                expect($passwordError.html()).to.equal("Your Password is empty");
            });
            it("sets the message color", function () {
                const CSSred = "rgb(255, 0, 0)";
                $passwordError.css("color", "green");
                changePasswordSubmitHandler();
                expect($passwordError.css("color")).to.equal(CSSred);
            });
            it("removes ok from error", function () {
                $passwordError.addClass("ok");
                changePasswordSubmitHandler();
                expect($passwordError.attr("class")).to.not.contain("ok");
            });
            it("adds warning to error", function () {
                $passwordError.removeClass("warning");
                changePasswordSubmitHandler();
                expect($passwordError.attr("class")).to.contain("warning");
            });
            it("adds glyphicon to feedback", function () {
                $passwordFeedback.removeClass("glyphicon");
                changePasswordSubmitHandler();
                expect($passwordFeedback.attr("class")).to.contain("glyphicon");
            });
            it("removes glyphicon-ok from feedback", function () {
                $passwordFeedback.addClass("glyphicon-ok");
                changePasswordSubmitHandler();
                expect($passwordFeedback.attr("class")).to.not.contain("glyphicon-ok");
            });
            it("removes ok from feedback", function () {
                $passwordFeedback.addClass("ok");
                changePasswordSubmitHandler();
                expect($passwordFeedback.attr("class")).to.not.contain("ok");
            });
            it("adds glyphicon-remove to feedback", function () {
                $passwordFeedback.removeClass("glyphicon-remove");
                changePasswordSubmitHandler();
                expect($passwordFeedback.attr("class")).to.contain("glyphicon-remove");
            });
            it("adds warning to feedback", function () {
                $passwordFeedback.removeClass("warning");
                changePasswordSubmitHandler();
                expect($passwordFeedback.attr("class")).to.contain("warning");
            });
        });
    });
    describe("retype password", function () {
        const $retypeGroup = $("#changepw .form-group").has("[name='Password Retype']");
        const $retypeInput = $retypeGroup.find("input");
        const $retypeError = $retypeGroup.find(".error");
        const $retypeFeedback = $retypeGroup.find(".feedback");
        describe("retype has value", function () {
            beforeEach(function () {
                $retypeInput.val("test value");
            });
            it("shows a message", function () {
                $retypeError.html("");
                changePasswordSubmitHandler();
                expect($retypeError.html()).to.equal("Your Password Retype is OK");
            });
            it("sets the message color", function () {
                const CSSgreen = "rgb(0, 128, 0)";
                $retypeError.css("color", "red");
                changePasswordSubmitHandler();
                expect($retypeError.css("color")).to.equal(CSSgreen);
            });
            it("removes warning from error", function () {
                $retypeError.addClass("warning");
                changePasswordSubmitHandler();
                expect($retypeError.attr("class")).to.not.contain("warning");
            });
            it("adds ok to error", function () {
                $retypeError.removeClass("ok");
                changePasswordSubmitHandler();
                expect($retypeError.attr("class")).to.contain("ok");
            });
            it("adds glyphicon to feedback", function () {
                $retypeFeedback.removeClass("glyphicon");
                changePasswordSubmitHandler();
                expect($retypeFeedback.attr("class")).to.contain("glyphicon");
            });
            it("removes glyphicon-remove from feedback", function () {
                $retypeFeedback.addClass("glyphicon-remove");
                changePasswordSubmitHandler();
                expect($retypeFeedback.attr("class")).to.not.contain("glyphicon-remove");
            });
            it("removes warning from feedback", function () {
                $retypeFeedback.addClass("warning");
                changePasswordSubmitHandler();
                expect($retypeFeedback.attr("class")).to.not.contain("warning");
            });
            it("adds glyphicon-ok to feedback", function () {
                $retypeFeedback.removeClass("glyphicon-ok");
                changePasswordSubmitHandler();
                expect($retypeFeedback.attr("class")).to.contain("glyphicon-ok");
            });
            it("adds ok from feedback", function () {
                $retypeFeedback.removeClass("ok");
                changePasswordSubmitHandler();
                expect($retypeFeedback.attr("class")).to.contain("ok");
            });
        });
        describe("retype is empty", function () {
            beforeEach(function () {
                $retypeInput.val("");
            });
            it("uses submit event to submit the form", function () {
                $retypeError.html("");
                $(".button1color2").trigger("click");
                expect($retypeError.html()).to.contain("Your Password Retype is empty");
            });        
            it("shows a message", function () {
                $retypeError.html("");
                changePasswordSubmitHandler();
                expect($retypeError.html()).to.equal("Your Password Retype is empty");
            });
            it("sets the message color", function () {
                const CSSred = "rgb(255, 0, 0)";
                $retypeError.css("color", "green");
                changePasswordSubmitHandler();
                expect($retypeError.css("color")).to.equal(CSSred);
            });
            it("removes ok from error", function () {
                $retypeError.addClass("ok");
                changePasswordSubmitHandler();
                expect($retypeError.attr("class")).to.not.contain("ok");
            });
            it("adds warning to error", function () {
                $retypeError.removeClass("warning");
                changePasswordSubmitHandler();
                expect($retypeError.attr("class")).to.contain("warning");
            });
            it("adds glyphicon to feedback", function () {
                $retypeFeedback.removeClass("glyphicon");
                changePasswordSubmitHandler();
                expect($retypeFeedback.attr("class")).to.contain("glyphicon");
            });
            it("removes glyphicon-ok from feedback", function () {
                $retypeFeedback.addClass("glyphicon-ok");
                changePasswordSubmitHandler();
                expect($retypeFeedback.attr("class")).to.not.contain("glyphicon-ok");
            });
            it("removes ok from feedback", function () {
                $retypeFeedback.addClass("ok");
                changePasswordSubmitHandler();
                expect($retypeFeedback.attr("class")).to.not.contain("ok");
            });
            it("adds glyphicon-remove to feedback", function () {
                $retypeFeedback.removeClass("glyphicon-remove");
                changePasswordSubmitHandler();
                expect($retypeFeedback.attr("class")).to.contain("glyphicon-remove");
            });
            it("adds warning to feedback", function () {
                $retypeFeedback.removeClass("warning");
                changePasswordSubmitHandler();
                expect($retypeFeedback.attr("class")).to.contain("warning");
            });
        });
    });
});
