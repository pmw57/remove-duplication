describe("registration input postaladdress", function () {
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
    const $postalGroup = $(".form-group").has("[name='Postal Address']");
    const $postalInputGroup = $postalGroup.find(".input-group");
    const $postalInput = $postalGroup.find("textarea");
    const $postalError = $postalGroup.find(".error");
    after(function () {
        $("#registration").trigger("reset");
    });
    it("when address is empty", function () {
        $postalInput.val("");
        $postalError.html("");
        $postalError.removeClass("warning");
        callRegistrationInputHandler($postalInputGroup);
        expect($postalError.html()).to.equal("Postal Address is Empty: Please enter data into this input");
        expect($postalError.attr("class")).to.contain("warning");
    });
    it("when address is not valid", function () {
        $postalInput.val("not valid");
        $postalError.html("");
        $postalError.removeClass("warning");
        callRegistrationInputHandler($postalInputGroup);
        expect($postalError.html()).to.equal("Postal Address is Incorrect: Please enter Address correctly");
        expect($postalError.attr("class")).to.contain("warning");
    });
    it("when address is valid", function () {
        $postalInput.val("123 Test Lane");
        $postalError.html("");
        $postalError.removeClass("ok");
        callRegistrationInputHandler($postalInputGroup);
        expect($postalError.html()).to.equal("Postal Address is Ok: Your data has been entered correctly");
        expect($postalError.attr("class")).to.contain("ok");
    });
});
