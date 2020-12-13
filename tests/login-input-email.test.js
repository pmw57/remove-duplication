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
    });
});
