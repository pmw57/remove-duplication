describe("registration input zipcode", function () {
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
    const $zipcodeGroup = $(".form-group").has("[name='zip code']");
    const $zipcodeInputGroup = $zipcodeGroup.find(".input-group");
    const $zipcodeInput = $zipcodeGroup.find("input");
    const $zipcodeError = $zipcodeGroup.find(".error");
    after(function () {
        $("#registration").trigger("reset");
    });
    it("is empty", function () {
        $zipcodeInput.val("");
        $zipcodeError.removeClass("warning");
        callRegistrationInputHandler($zipcodeInputGroup);
        expect($zipcodeError.html()).to.equal("zip code is Empty: Please enter data into this input");
        expect($zipcodeError.attr("class")).to.contain("warning");
    });
    it("is not valid", function () {
        $zipcodeInput.val("notvalid");
        $zipcodeError.removeClass("warning");
        callRegistrationInputHandler($zipcodeInputGroup);
        expect($zipcodeError.html()).to.equal("zip code is Incorrect: Please enter Post-code correctly");
        expect($zipcodeError.attr("class")).to.contain("warning");
    });
    it("is valid", function () {
        $zipcodeInput.val("PI1 2ZA");
        $zipcodeError.removeClass("ok");
        callRegistrationInputHandler($zipcodeInputGroup);
        expect($zipcodeError.html()).to.equal("zip code is Ok: Your data has been entered correctly");
        expect($zipcodeError.attr("class")).to.contain("ok");
    });
});
