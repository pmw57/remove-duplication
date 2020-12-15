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
        registrationInputHandler.call(thisArg);
    }
    const $lastnameGroup = $(".form-group").has("[name='Last Name']");
    const $lastnameInputGroup = $lastnameGroup.find(".input-group");
    const $lastnameInput = $lastnameGroup.find("input");
    const $lastnameError = $lastnameGroup.find(".error");
    after(function () {
        $("#registration").trigger("reset");
    });
    it("isn't empty", function () {
        $lastnameInput.val("");
        $lastnameError.html("");
        callRegistrationInputHandler($lastnameInputGroup);
        expect($lastnameError.html()).to.equal("Last Name is Empty: Please enter data into this input");
    });
    it("isn't fake", function () {
        $lastnameInput.val("abbbc");
        $lastnameError.html("");
        callRegistrationInputHandler($lastnameInputGroup);
        expect($lastnameError.html()).to.equal("Last Name is Fake text: Please remove repetition");
    });
    it("isn't too long", function () {
        $lastnameInput.val("Too much text in the input field");
        $lastnameError.html("");
        callRegistrationInputHandler($lastnameInputGroup);
        expect($lastnameError.html()).to.equal("Last Name is Incorrect: Please enter no more than 19 char");
    });
    it("has enough characters", function () {
        $lastnameInput.val("a");
        $lastnameError.html("");
        callRegistrationInputHandler($lastnameInputGroup);
        expect($lastnameError.html()).to.equal("Last Name is Incorrect: Please enter 2 upper case or lower case at least");
    });
    it("isn't invalid characters", function () {
        $lastnameInput.val("##");
        $lastnameError.html("");
        callRegistrationInputHandler($lastnameInputGroup);
        expect($lastnameError.html()).to.equal("Last Name is Incorrect: Please enter upper case and lower case only");
    });
    it("is valid", function () {
        $lastnameInput.val("John");
        $lastnameError.html("");
        callRegistrationInputHandler($lastnameInputGroup);
        expect($lastnameError.html()).to.equal("Last Name is OK: Your data has been entered correctly");
    });
});