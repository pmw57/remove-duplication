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
        registrationInputHandler.call(thisArg);
    }
    const $passwordGroup = $(".form-group").has("[name='Password']");
    const $passwordInputGroup = $passwordGroup.find(".input-group");
    const $passwordInput = $passwordGroup.find("input");
    const $passwordError = $passwordGroup.find(".error");
    after(function () {
        $("#registration").trigger("reset");
    });
    describe("password has repetition", function () {
        beforeEach(function () {
            $passwordInput.val("abbbc");
        });
        it("shows an error message", function () {
            $passwordError.html("");
            callRegistrationInputHandler($passwordInputGroup);
            expect($passwordError.html()).to.equal("Password is Fake text: Please remove repetition");
        });
    });
});