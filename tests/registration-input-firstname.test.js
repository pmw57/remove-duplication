describe("registration-input first name", function () {
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
    const $firstnameGroup = $(".form-group").has("[name='First Name']");
    const $firstnameInputGroup = $firstnameGroup.find(".input-group");
    const $firstnameInput = $firstnameGroup.find("input");
    const $firstnameError = $firstnameGroup.find(".error");
    after(function () {
        $("#registration").trigger("reset");
    });
    it("isn't empty", function () {
        $firstnameInput.val("");
        $firstnameError.html("");
        callRegistrationInputHandler($firstnameInputGroup);
        expect($firstnameError.html()).to.equal("First Name is Empty: Please enter data into this input");
    });
    it("isn't fake", function () {
        $firstnameInput.val("abbbc");
        $firstnameError.html("");
        callRegistrationInputHandler($firstnameInputGroup);
        expect($firstnameError.html()).to.equal("First Name is Fake text: Please remove repetition");
    });
    it("isn't too long", function () {
        $firstnameInput.val("Too much text in the input field");
        $firstnameError.html("");
        callRegistrationInputHandler($firstnameInputGroup);
        expect($firstnameError.html()).to.equal("First Name is Incorrect: Please enter no more than 19 char");
    });
    it("has enough characters", function () {
        $firstnameInput.val("a");
        $firstnameError.html("");
        callRegistrationInputHandler($firstnameInputGroup);
        expect($firstnameError.html()).to.equal("First Name is Incorrect: Please enter 2 upper case or lower case at least");
    });
    it("isn't invalid characters", function () {
        $firstnameInput.val("##");
        $firstnameError.html("");
        callRegistrationInputHandler($firstnameInputGroup);
        expect($firstnameError.html()).to.equal("First Name is Incorrect: Please enter upper case and lower case only");
    });
    it("is valid", function () {
        $firstnameInput.val("John");
        $firstnameError.html("");
        callRegistrationInputHandler($firstnameInputGroup);
        expect($firstnameError.html()).to.equal("First Name is OK: Your data has been entered correctly");
    });
});