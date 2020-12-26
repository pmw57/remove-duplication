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
        const evt = {target: thisArg};
        registrationInputHandler.call(thisArg, evt);
    }
    const $emailGroup = $(".form-group").has("[name='E-mail']");
    const $emailInputGroup = $emailGroup.find(".input-group");
    const $emailInput = $emailGroup.find("input");
    const $emailError = $emailGroup.find(".error");
    after(function () {
        $("#registration").trigger("reset");
    });
    it("is empty", function () {
        $emailInput.val("");
        callRegistrationInputHandler($emailInputGroup);
        expect($emailError.html()).to.equal("E-mail is Empty: Please enter data into this input");
    });
    it("isn't valid", function () {
        $emailInput.val("test@example");
        callRegistrationInputHandler($emailInputGroup);
        expect($emailError.html()).to.equal("E-mail is Incorrect: Please enter it correctly");
    });
    it("is valid", function () {
        $emailInput.val("test@example.com");
        callRegistrationInputHandler($emailInputGroup);
        expect($emailError.html()).to.equal("E-mail is Ok: Your data has been entered correctly");
    });
});