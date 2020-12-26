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
        const evt = {target: thisArg};
        registrationInputHandler.call(thisArg, evt);
    }
    const $retypeGroup = $(".form-group").has("[name='Retype Password']");
    const $retypeInputGroup = $retypeGroup.find(".input-group");
    const $retypeInput = $retypeGroup.find("input");
    const $retypeError = $retypeGroup.find(".error");
    after(function () {
        $("#registration").trigger("reset");
    });
    it("value is empty", function () {
        $retypeInput.val("");
        const $retypeError = $retypeGroup.find(".error");
        $retypeError.html("");
        callRegistrationInputHandler($retypeInputGroup);
        expect($retypeError.html()).to.equal("Retype Password is Empty: Please enter data into this input");
    });
    it("doesn't match password", function () {
        $retypeInput.val("test value");
        const $password = $("[name=Password]");
        $password.val($retypeInput.val() + "nomatch");
        $retypeError.html("");
        callRegistrationInputHandler($retypeInputGroup);
        expect($retypeError.html()).to.equal("Retype Password is Incorrect: Password doesn't match retyped pwd");
    });
    it("does match password", function () {
        $retypeInput.val("test value");
        const $retypeError = $retypeGroup.find(".error");
        const $password = $("[name=Password]");
        $password.val($retypeInput.val());
        $retypeError.html("");
        callRegistrationInputHandler($retypeInputGroup);
        expect($retypeError.html()).to.equal("Retype Password is Ok: Your data has been entered correctly");
    });
});
