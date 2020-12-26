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
        const evt = {target: thisArg};
        registrationInputHandler.call(thisArg, evt);
    }
    const $cityGroup = $(".form-group").has("[name='Your City']");
    const $cityInputGroup = $cityGroup.find(".input-group");
    const $cityInput = $cityGroup.find("input");
    after(function () {
        $("#registration").trigger("reset");
    });
    it("value is empty", function () {
        $cityInput.val("");
        const $cityError = $cityGroup.find(".error");
        $cityError.html("");
        callRegistrationInputHandler($cityInputGroup);
        expect($cityError.html()).to.equal("Your City is Empty: Please enter data into this input");
    });
    it("value has content", function () {
        $cityInput.val("test value");
        const $cityError = $cityGroup.find(".error");
        $cityError.html("");
        callRegistrationInputHandler($cityInputGroup);
        expect($cityError.html()).to.equal("Your City is Ok: Your data has been entered correctly");
    });
});
