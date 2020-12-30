describe("change-password reset", function () {
    function passwordResetHandler(fakeEvt) {
        const resetHandler = changePassword.eventHandler.passwordReset;
        resetHandler(fakeEvt);
    }
    const fakeEvt = {
        preventDefault: function fakeFunc() {}
    };
    after(function () {
        $("#changepw").trigger("reset");
    });
    it("resets email message", function () {
        const $emailGroup = $("#changepw .form-group").eq(1);
        const $emailError = $emailGroup.find(".error");
        $emailError.html("test content");
        passwordResetHandler(fakeEvt);
        expect($emailError.html()).to.equal("E-mail");
    });
});