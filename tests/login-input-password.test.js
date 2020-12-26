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
    function loginInputHandler() {
        const inputHandler = login.eventHandler.loginInput;
        const thisArg = $passwordGroup.get(0);
        inputHandler.call(thisArg);
    }
    after(function () {
        $("#login").trigger("reset");
    });
    it("password is too small", function () {
        $passwordInput.val("ab");
        $passwordError.html("");
        loginInputHandler($passwordGroup);
        expect($passwordError.html()).to.equal("Password is Incorrect: Please enter at least 6 characters");
    });
    it("password is valid", function () {
        $passwordInput.val("testpassword");
        $passwordError.html("");
        loginInputHandler($passwordGroup);
        expect($passwordError.html()).to.equal("Password is Ok: Your data has been entered correctly");
    });
    it("password is too large", function () {
        $passwordInput.val("toolongforapassword");
        $passwordError.html("");
        loginInputHandler($passwordGroup);
        expect($passwordError.html()).to.equal("Password is Incorrect: Please enter no more than 12 characters");
    });
    it("password is empty", function () {
        $passwordInput.val("");
        $passwordError.html("");
        loginInputHandler($passwordGroup);
        expect($passwordError.html()).to.equal("Password is Empty: Please enter data into this input");
    });
});
