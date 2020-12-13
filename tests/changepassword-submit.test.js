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
    after(function () {
        $("#changepw").trigger("reset");
    });
    describe("email", function () {
        const $emailGroup = $("#changepw .form-group").has("[name='E-mail']");
        const $emailInput = $emailGroup.find("input");
        const $emailError = $emailGroup.find(".error");
        describe("email has value", function () {
            beforeEach(function () {
                $emailInput.val("test value");
            });
            it("shows a message", function () {
                $emailError.html("");
                changePasswordSubmitHandler();
                expect($emailError.html()).to.equal("Your E-mail is OK");
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
        });
    });
    describe("password", function () {
        const $retypeGroup = $("#changepw .form-group").has("[name='Password']");
        const $passwordInput = $retypeGroup.find("input");
        const $passwordError = $retypeGroup.find(".error");
        describe("password has value", function () {
            beforeEach(function () {
                $passwordInput.val("test value");
            });
            it("shows a message", function () {
                $passwordError.html("");
                changePasswordSubmitHandler();
                expect($passwordError.html()).to.equal("Your Password is OK");
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
        });
    });
});
