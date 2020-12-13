describe("change-password input password", function () {
    /*
       Structure
       - .form-group
         - input
         - .inputstatusmodal
           - .error
           - .feedback
    */
    const $passwordGroup = $("#changepw .form-group").has("[name=Password]");
    const $passwordInput = $passwordGroup.find("input");
    const $passwordError = $passwordGroup.find(".error");
    function loginInputHandler() {
        const passwordHandler = changePassword.eventHandler.passwordInput;
        const thisArg = $passwordGroup.get(0);
        passwordHandler.call(thisArg);
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
    });
    describe("password is valid", function () {
        beforeEach(function () {
            $passwordInput.val("testpassword");
        })
        it("shows a message", function () {
            $passwordError.html("");
            loginInputHandler($passwordGroup);
            expect($passwordError.html()).to.equal("Password is Ok: Your data has been entered correctly");
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
    });
});
