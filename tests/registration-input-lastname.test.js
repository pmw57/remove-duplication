describe("registration-input last name", function () {
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
    const $lastnameGroup = $(".form-group").has("[name='Last Name']");
    const $lastnameInputGroup = $lastnameGroup.find(".input-group");
    const $lastnameInput = $lastnameGroup.find("input");
    const $lastnameError = $lastnameGroup.find(".error");
    after(function () {
        $("#registration").trigger("reset");
    });
    it("is empty", function () {
        $lastnameInput.val("");
        callRegistrationInputHandler($lastnameInputGroup);
        expect($lastnameError.html()).to.equal("Last Name is Empty: Please enter data into this input");
    });
    it("is fake", function () {
        $lastnameInput.val("abbbc");
        callRegistrationInputHandler($lastnameInputGroup);
        expect($lastnameError.html()).to.equal("Last Name is Fake text: Please remove repetition");
    });
    it("is too long", function () {
        $lastnameInput.val("Too much text in the input field");
        callRegistrationInputHandler($lastnameInputGroup);
        expect($lastnameError.html()).to.equal("Last Name is Incorrect: Please enter no more than 19 char");
    });
    it("is too short", function () {
        $lastnameInput.val("a");
        callRegistrationInputHandler($lastnameInputGroup);
        expect($lastnameError.html()).to.equal("Last Name is Incorrect: Please enter 2 upper case or lower case at least");
    });
    it("has strange characters", function () {
        $lastnameInput.val("##");
        callRegistrationInputHandler($lastnameInputGroup);
        expect($lastnameError.html()).to.equal("Last Name is Incorrect: Please enter upper case and lower case only");
    });
    it("is valid", function () {
        $lastnameInput.val("John");
        callRegistrationInputHandler($lastnameInputGroup);
        expect($lastnameError.html()).to.equal("Last Name is Ok: Your data has been entered correctly");
    });
});