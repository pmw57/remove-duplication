describe("validate", function () {
    describe("email", function () {
        const emailGroup = $("#login .form-group").has("[name='E-mail']").get(0);
        const input = $(emailGroup).find("input").get(0);
        const $emailError = $(emailGroup).find(".error");
        it("is empty", function () {
            input.value = "";
            validate(emailGroup);
            expect($emailError.html()).to.equal("E-mail is empty");
        });
        it("is fake text", function () {
            input.value = "aaabbb";
            validate(emailGroup);
            expect($emailError.html()).to.equal("E-mail is Fake text: Please remove repetition");
        });
        it("is invalid email", function () {
            input.value = "test.value";
            validate(emailGroup);
            expect($emailError.html()).to.equal("E-mail is Incorrect: Please enter it correctly");
        });
        it("is valid email", function () {
            input.value = "test.value@example.com";
            validate(emailGroup);
            expect($emailError.html()).to.contain("is Ok");
        });
    });
    describe("password", function () {
        const passwordGroup = $("#login .form-group").has("[name='Password']").get(0);
        const input = $(passwordGroup).find("input").get(0);
        const $passwordError = $(passwordGroup).find(".error");
        it("is empty", function () {
            input.value = "";
            validate(passwordGroup);
            expect($passwordError.html()).to.equal("Password is empty");
        });
        it("isn't empty", function () {
            input.value = "Password123";
            validate(passwordGroup);
            expect($passwordError.html()).to.contain("is Ok");
        });
        it("is fake text", function () {
            input.value = "aaabbb";
            validate(passwordGroup);
            expect($passwordError.html()).to.equal("Password is Fake text: Please remove repetition");
        });
        it("isn't fake text", function () {
            input.value = "Password123";
            validate(passwordGroup);
            expect($passwordError.html()).to.not.contain("Fake text");
        });
        it("is short password", function () {
            input.value = "ab";
            validate(passwordGroup);
            expect($passwordError.html()).to.equal("Password is Incorrect: Please enter at least 6 characters");
        });
        it("isn't a short password", function () {
            input.value = "Password123";
            validate(passwordGroup);
            expect($passwordError.html()).to.not.contain("enter at least");
        });
        it("is long password", function () {
            input.value = "abcdefghijklmnopqrstuvwxyz";
            validate(passwordGroup);
            expect($passwordError.html()).to.equal("Password is Incorrect: Please enter no more than 12 characters");
        });
        it("isn't long password", function () {
            input.value = "Password123";
            validate(passwordGroup);
            expect($passwordError.html()).to.not.contain("12 characters");
        });
    });
    describe("retype password", function () {
        const passwordGroup = $("#changepw .form-group").has("[name='Password']").get(0);
        const passwordInput = $(passwordGroup).find("input").get(0);
        const retypeGroup = $("#changepw .form-group").has("[name='Password Retype']").get(0);
        const retypeInput = $(retypeGroup).find("input").get(0);
        const $retypeError = $(retypeGroup).find(".error");
        it("is empty", function () {
            retypeInput.value = "";
            validate(retypeGroup);
            expect($retypeError.html()).to.equal("Password Retype is empty");
        });
        it("doesn't match", function () {
            passwordInput.value = "Password123";
            retypeInput.value = "Password234";
            validate(retypeGroup);
            expect($retypeError.html()).to.equal("Password Retype is Incorrect: Password doesn't match retyped password");
        });
        it("matches", function () {
            passwordInput.value = "Password123";
            retypeInput.value = "Password123";
            validate(retypeGroup);
            expect($retypeError.html()).to.equal("Password Retype is Ok: Your data has been entered correctly");
        });
    });
});