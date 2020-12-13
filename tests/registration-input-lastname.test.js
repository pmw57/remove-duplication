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
    describe("first name has repetition", function () {
        beforeEach(function () {
            $lastnameInput.val("abbbc");
        });
        it("shows an error message", function () {
            $lastnameError.html("");
            callRegistrationInputHandler($lastnameInputGroup);
            expect($lastnameError.html()).to.equal("Last Name is Fake text: Please remove repetition");
        });
    });
});