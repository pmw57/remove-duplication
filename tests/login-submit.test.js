describe("login submit", function () {
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
    it("email has value, resets email error", function () {
        const $emailGroup = $("#login .form-group").eq(1);
        const $emailInput = $emailGroup.find("input");
        const $emailError = $emailGroup.find(".error");
        const CSSgreen = "rgb(0, 128, 0)";
        $emailInput.val("test@example.com");
        $emailError.html("test content");
        loginSubmitHandler(fakeEvt);
        expect($emailError.html()).to.equal("E-mail is Ok: Your data has been entered correctly");
    });
    it("email is empty, shows email error", function () {
        const $emailGroup = $("#login .form-group").eq(1);
        const $emailInput = $emailGroup.find(".check").first();
        const $emailError = $emailGroup.find(".error");
        const CSSred = "rgb(255, 0, 0)";
        $emailInput.val("");
        $emailError.html("test content");
        loginSubmitHandler(fakeEvt);
        expect($emailError.html()).to.equal("E-mail is Empty: Please enter data into this input");
    });
});