describe("When change-password form is reset, update input messages", function () {
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
    describe("email error", function () {
        const $emailGroup = $("#changepw .form-group").eq(1);
        const $emailError = $emailGroup.find(".error");
        it("Resets the error message", function () {
            $emailError.html("test content");
            passwordResetHandler(fakeEvt);
            expect($emailError.html()).to.equal("Your E-mail");
        });
    });
});