describe("registration-input email", function () {
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
    const $emailGroup = $(".form-group").has("[name='E-mail']");
    const $emailInputGroup = $emailGroup.find(".input-group");
    const $emailInput = $emailGroup.find("input");
    const $emailError = $emailGroup.find(".error");
    after(function () {
        $("#registration").trigger("reset");
    });
    describe("first name has repetition", function () {
        $emailInput.val("abbbc");
        $emailError.html("");
        callRegistrationInputHandler($emailInputGroup);
        expect($emailError.html()).to.equal("E-mail is Fake text: Please remove repetition");
    });
});