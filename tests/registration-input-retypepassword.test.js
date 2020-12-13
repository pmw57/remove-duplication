describe("registration-input retype password", function () {
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
    const $retypeGroup = $(".form-group").has("[name='Retype Password']");
    const $retypeInputGroup = $retypeGroup.find(".input-group");
    const $retypeInput = $retypeGroup.find("input");
    const $retypeError = $retypeGroup.find(".error");
    after(function () {
        $("#registration").trigger("reset");
    });
    describe("value has content", function () {
        beforeEach(function () {
            $retypeInput.val("test value");
        });
        describe("doesn't match password", function () {
            beforeEach(function () {
                const $password = $("[name=Password]");
                $password.val($retypeInput.val() + "nomatch");
            });
            it("shows an error message", function () {
                $retypeError.html("");
                callRegistrationInputHandler($retypeInputGroup);
                expect($retypeError.html()).to.equal("Retype Password is Incorrect: Password doesn't match retyped pwd");
            });
        });
        describe("does match password", function () {
            beforeEach(function () {
                const $password = $("[name=Password]");
                $password.val($retypeInput.val());
            });
            const $retypeError = $retypeGroup.find(".error");
            it("shows an error message", function () {
                $retypeError.html("");
                callRegistrationInputHandler($retypeInputGroup);
                expect($retypeError.html()).to.equal("Retype Password is OK: Your data has been entered correctly");
            });
        });
    });
    describe("value is empty", function () {
        beforeEach(function () {
            $retypeInput.val("");
        });
        const $retypeError = $retypeGroup.find(".error");
        it("shows an error message", function () {
            $retypeError.html("");
            callRegistrationInputHandler($retypeInputGroup);
            expect($retypeError.html()).to.equal("Retype Password is EMPTY: Please enter data into this input");
        });
    });
});
