describe("When login form is submitted, update input messages", function () {
    const fakeEvt = {
        preventDefault: function fakeFunc() {}
    };
    function loginSubmitHandler(fakeEvt) {
        const submitHandler = login.eventHandler.loginSubmit;
        submitHandler(fakeEvt);
    }
    after(function () {
        $("#login").trigger("reset");
    });
    describe("email has value", function () {
        const $emailGroup = $("#login .form-group").eq(1);
        describe("email error", function () {
            const $emailInput = $emailGroup.find("input");
            const $emailError = $emailGroup.find(".error");
            const CSSgreen = "rgb(0, 128, 0)";
            beforeEach(function () {
                $emailInput.val("test value");
            });
            it("Resets the error message", function () {
                $emailError.html("test content");
                loginSubmitHandler(fakeEvt);
                expect($emailError.html()).to.equal("Your E-mail is OK");
            });
        });
    });
    describe("email is empty", function () {
        const $emailGroup = $("#login .form-group").eq(1);
        describe("email error", function () {
            const $emailInput = $emailGroup.find(".input-check").first();
            const $emailError = $emailGroup.find(".error");
            const CSSred = "rgb(255, 0, 0)";
            beforeEach(function () {
                $emailInput.val("");
            });
            it("Gives an error message", function () {
                $emailError.html("test content");
                loginSubmitHandler(fakeEvt);
                expect($emailError.html()).to.equal("Your E-mail is empty");
            });
        });
    });
});