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
        const evt = {target: thisArg};
        registrationInputHandler.call(thisArg, evt);
    }
    const $firstnameGroup = $(".form-group").has("[name='First Name']");
    const $firstnameInputGroup = $firstnameGroup.find(".input-group");
    const $firstnameInput = $firstnameGroup.find("input");
    const $firstnameError = $firstnameGroup.find(".error");
    after(function () {
        $("#registration").trigger("reset");
    });
    it("is empty", function () {
        $firstnameInput.val("");
        callRegistrationInputHandler($firstnameInputGroup);
        expect($firstnameError.html()).to.equal("First Name is Empty: Please enter data into this input");
    });
    it("is fake", function () {
        $firstnameInput.val("abbbc");
        callRegistrationInputHandler($firstnameInputGroup);
        expect($firstnameError.html()).to.equal("First Name is Fake text: Please remove repetition");
    });
    it("is too long", function () {
        $firstnameInput.val("Too much text in the input field");
        callRegistrationInputHandler($firstnameInputGroup);
        expect($firstnameError.html()).to.equal("First Name is Incorrect: Please enter no more than 19 char");
    });
    it("has too short", function () {
        $firstnameInput.val("a");
        callRegistrationInputHandler($firstnameInputGroup);
        expect($firstnameError.html()).to.equal("First Name is Incorrect: Please enter 2 upper case or lower case at least");
    });
    it("has strange characters", function () {
        $firstnameInput.val("##");
        callRegistrationInputHandler($firstnameInputGroup);
        expect($firstnameError.html()).to.equal("First Name is Incorrect: Please enter upper case and lower case only");
    });
    it("is valid", function () {
        $firstnameInput.val("John");
        callRegistrationInputHandler($firstnameInputGroup);
        expect($firstnameError.html()).to.equal("First Name is Ok: Your data has been entered correctly");
    });
});