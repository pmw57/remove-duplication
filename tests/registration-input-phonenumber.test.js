describe("registration input phonenumber", function () {
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
    const $phoneGroup = $(".form-group").has("[name='Phone Number']");
    const $phoneInputGroup = $phoneGroup.find(".input-group");
    const $phoneInput = $phoneGroup.find("input");
    const $phoneError = $phoneGroup.find(".error");
    after(function () {
        $("#registration").trigger("reset");
    });
    it("is empty", function () {
        $phoneInput.val("");
        callRegistrationInputHandler($phoneInputGroup);
        expect($phoneError.html()).to.equal("Phone Number is Empty: Please enter data into this input");
    });
    it("isn't a phone number", function () {
        $phoneInput.val("not phone number");
        callRegistrationInputHandler($phoneInputGroup);
        expect($phoneError.html()).to.equal("Phone Number is Incorrect: Please enter Phone Number correctly");
    });
    it("is a phone number", function () {
        $phoneInput.val("(1234)-567-8901");
        callRegistrationInputHandler($phoneInputGroup);
        expect($phoneError.html()).to.equal("Phone Number is Ok: Your data has been entered correctly");
    });
});
