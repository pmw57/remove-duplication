describe("When login form is submitted", function () {
    const fakeEvt = {
        preventDefault: function fakeFunc() {
            return;
        }
    };
    const $inputGroup = $(".inputboxmodal1");
    const $emailInput = $inputGroup.find(".input-check");
    const $emailError = $inputGroup.find(".error");
    it("Resets the error message when value has content", function () {
        $emailInput.val("test content");
        $emailError.html("test content");
        loginSubmitHandler(fakeEvt);
        expect($emailError.html()).to.equal("Your E-mail is OK ");
    });
});