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
describe("first name has repetition", function () {
        beforeEach(function () {
            $firstnameInput.val("abbbc");
        });
        it("shows an error message", function () {
            $firstnameError.html("");
            callRegistrationInputHandler($firstnameInputGroup);
            expect($firstnameError.html()).to.equal("First Name is Fake text: Please remove repetition");
        });
    });
});