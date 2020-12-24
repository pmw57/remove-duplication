describe("registration-input password", function () {
    /*
       Structure
       - .form-group
         - .starrq
         - .input-group
           - input
         - .inputstatus
           - .error
           - .feedback
    */
    function callRegistrationInputHandler(thisArg) {
        const registrationInputHandler = registration.eventHandler.registrationInput;
        const evt = {target: thisArg};
        registrationInputHandler.call(thisArg, evt);
    }
    const $passwordGroup = $(".form-group").has("[name='Password']");
    const passwordInputGroup = $passwordGroup.find(".input-group").get(0);
    const $passwordInput = $passwordGroup.find("input");
    const $passwordError = $passwordGroup.find(".error");
    const $firstnameInput = $passwordGroup.closest("form").find("[name='First Name']");
    const $lastnameInput = $passwordGroup.closest("form").find("[name='Last Name']");
    const $cityInput = $passwordGroup.closest("form").find("[name='Your City']");
    after(function () {
        $("#registration").trigger("reset");
    });
    it("is empty", function () {
        $passwordInput.val("");
        callRegistrationInputHandler(passwordInputGroup);
        expect($passwordError.html()).to.equal("Password is Empty: Please enter data into this input");
    });
    it("has repetition", function () {
        $passwordInput.val("abbbc");
        callRegistrationInputHandler(passwordInputGroup);
        expect($passwordError.html()).to.equal("Password is Fake text: Please remove repetition");
    });
    it("shouldn't match firstname", function () {
        $firstnameInput.val("John");
        $passwordInput.val("John");
        callRegistrationInputHandler(passwordInputGroup);
        expect($passwordError.html()).to.equal("Password is Incorrect: Password shouldn't match first-name");
    });
    it("shouldn't match lastname", function () {
        $lastnameInput.val("Adams");
        $passwordInput.val("Adams");
        callRegistrationInputHandler(passwordInputGroup);
        expect($passwordError.html()).to.equal("Password is Incorrect: Password shouldn't match last-name");
    });
    it("shouldn't match city", function () {
        $cityInput.val("Chicago");
        $passwordInput.val("Chicago");
        callRegistrationInputHandler(passwordInputGroup);
        expect($passwordError.html()).to.equal("Password is Incorrect: Password shouldn't match city name");
    });
    it("should be at least 6 characters", function () {
        $passwordInput.val("12345");
        callRegistrationInputHandler(passwordInputGroup);
        expect($passwordError.html()).to.equal("Password is Incorrect: Please enter at least 6 characters");
    });
    it("should be at most 12 characters", function () {
        $passwordInput.val("12345678901234567890");
        callRegistrationInputHandler(passwordInputGroup);
        expect($passwordError.html()).to.equal("Password is Incorrect: Please enter no more than 12 characters");
    });
    it("is valid", function () {
        $passwordInput.val("password");
        callRegistrationInputHandler(passwordInputGroup);
        expect($passwordError.html()).to.equal("Password is Ok: Your data has been entered correctly");
    });
});