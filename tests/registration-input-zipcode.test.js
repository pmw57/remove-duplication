describe.only("registration input zipcode", function () {
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
    it("when zipcode is empty", function () {
        $zipcodeInput.val("");
        $zipcodeError.html("");
        $zipcodeError.removeClass("warning");
        callRegistrationInputHandler($zipcodeInputGroup);
        expect($zipcodeError.html()).to.equal("zip code is Empty: Please enter data into this input");
        expect($zipcodeError.attr("class")).to.contain("warning");
    });
    it("when zipcode is not valid", function () {
        $zipcodeInput.val("notvalid");
        $zipcodeError.html("");
        $zipcodeError.removeClass("warning");
        callRegistrationInputHandler($zipcodeInputGroup);
        expect($zipcodeError.html()).to.equal("zip code is Incorrect: Please enter Post-code correctly");
        expect($zipcodeError.attr("class")).to.contain("warning");
    });
    it("when zipcode is valid", function () {
        $zipcodeInput.val("PI1 2ZA");
        $zipcodeError.html("");
        $zipcodeError.removeClass("ok");
        callRegistrationInputHandler($zipcodeInputGroup);
        expect($zipcodeError.html()).to.equal("zip code is Ok: Your data has been entered correctly");
        expect($zipcodeError.attr("class")).to.contain("ok");
    });
});
