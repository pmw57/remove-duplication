describe("registration input city", function () {
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
    const $cityGroup = $(".form-group").has("[name='Your City']");
    const $cityInputGroup = $cityGroup.find(".input-group");
    const $cityInput = $cityGroup.find("input");
    after(function () {
        $("#registration").trigger("reset");
    });
    it("when value is empty", function () {
        $cityInput.val("");
        const $cityError = $cityGroup.find(".error");
        $cityError.html("");
        callRegistrationInputHandler($cityInputGroup);
        expect($cityError.html()).to.equal("Your Your City field is Empty!");
    });
    describe("when value has content", function () {
        $cityInput.val("test value");
        const $cityError = $cityGroup.find(".error");
        $cityError.html("");
        callRegistrationInputHandler($cityInputGroup);
        expect($cityError.html()).to.equal("Your Your City field is OK!");
    });
});
