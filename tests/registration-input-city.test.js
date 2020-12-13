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
    describe("when value is empty", function () {
        beforeEach(function () {
            $cityInput.val("");
        });
        describe("error", function () {
            const $cityError = $cityGroup.find(".error");
            it("gives an error message", function () {
                $cityError.html("");
                callRegistrationInputHandler($cityInputGroup);
                expect($cityError.html()).to.equal("Your Your City field is Empty!");
            });
        });
    });
    describe("when value has content", function () {
        beforeEach(function () {
            $cityInput.val("test value");
        });
        describe("error", function () {
            const $cityError = $cityGroup.find(".error");
            it("gives an error message", function () {
                $cityError.html("");
                callRegistrationInputHandler($cityInputGroup);
                expect($cityError.html()).to.equal("Your Your City field is OK!");
            });
        });
    });
});
