describe("validate", function () {
    after(function () {
        $("#registration").trigger("reset");
        $("#login").trigger("reset");
    });
    const emailGroup = $("#login .form-group").has("[name='E-mail']").get(0);
    const emailInput = $(emailGroup).find("input").get(0);
    const $emailError = $(emailGroup).find(".error");
    describe("email", function () {
        it("is empty", function () {
            emailInput.value = "";
            validate.check(emailGroup);
            expect($emailError.html()).to.equal("E-mail is Empty: Please enter data into this input");
        });
        it("is fake text", function () {
            emailInput.value = "aaabbb";
            validate.check(emailGroup);
            expect($emailError.html()).to.equal("E-mail is Fake text: Please remove repetition");
        });
        it("is invalid email", function () {
            emailInput.value = "test.value";
            validate.check(emailGroup);
            expect($emailError.html()).to.equal("E-mail is Incorrect: Please enter it correctly");
        });
        it("is valid email", function () {
            emailInput.value = "test.value@example.com";
            validate.check(emailGroup);
            expect($emailError.html()).to.contain("is Ok");
        });
    });
    describe("password", function () {
        const passwordGroup = $("#login .form-group").has("[name='Password']").get(0);
        const input = $(passwordGroup).find("input").get(0);
        const $passwordError = $(passwordGroup).find(".error");
        it("is empty", function () {
            input.value = "";
            validate.check(passwordGroup);
            expect($passwordError.html()).to.equal("Password is Empty: Please enter data into this input");
        });
        it("isn't empty", function () {
            input.value = "Password123";
            validate.check(passwordGroup);
            expect($passwordError.html()).to.contain("is Ok");
        });
        it("is fake text", function () {
            input.value = "aaabbb";
            validate.check(passwordGroup);
            expect($passwordError.html()).to.equal("Password is Fake text: Please remove repetition");
        });
        it("isn't fake text", function () {
            input.value = "Password123";
            validate.check(passwordGroup);
            expect($passwordError.html()).to.not.contain("Fake text");
        });
        it("is short password", function () {
            input.value = "ab";
            validate.check(passwordGroup);
            expect($passwordError.html()).to.equal("Password is Incorrect: Please enter at least 6 characters");
        });
        it("isn't a short password", function () {
            input.value = "Password123";
            validate.check(passwordGroup);
            expect($passwordError.html()).to.not.contain("enter at least");
        });
        it("is long password", function () {
            input.value = "abcdefghijklmnopqrstuvwxyz";
            validate.check(passwordGroup);
            expect($passwordError.html()).to.equal("Password is Incorrect: Please enter no more than 12 characters");
        });
        it("isn't long password", function () {
            input.value = "Password123";
            validate.check(passwordGroup);
            expect($passwordError.html()).to.not.contain("12 characters");
        });
    });
    describe("uses custom validator", function () {
        const firstnameGroup = $(".form-group").has("[name='First Name']").get(0);
        it("can use a custom validator", function () {
            const validatorFn = function () {};
            const spy = chai.spy(validatorFn);
            const customValidator = {
                "First Name": [spy]
            };
            validate.check(firstnameGroup, customValidator);
            expect(spy).to.have.been.called();
        });
        const $firstnameInput = $(".form-group").find("input");
        const $firstnameError = $(".form-group").find(".error");
        function isLessThanThree(inputGroup) {
            const input = $(inputGroup).find("input");
            if (input.val().length < 3) {
                inputStatus.warning(inputGroup, "Shouldn't be less than three characters");
                return false;
            }
            return true;
        }
        const customValidator = {
            "First Name": [isLessThanThree]
        }
        it("name is less than 3 characters", function () {
            $firstnameInput.val("Ma");
            $firstnameError.html();
            validate.check(firstnameGroup, customValidator);
            expect($firstnameError.html()).to.contain("less than three");
        });
        it("name is 3 characters or more", function () {
            $firstnameInput.val("Mat");
            $firstnameError.html();
            validate.check(firstnameGroup, customValidator);
            expect($firstnameError.html()).to.contain("Ok");
        });
        it("createValidator finds invalid value", function () {
            $firstnameInput.val("Ma");
            const checkAtLeastThree = validate.createValidator(function (input) {
                return input.value.length >= 3;
            }, "Should be three or more characters");
            validate.check(firstnameGroup, {
                "First Name": [checkAtLeastThree]
            });
            expect($firstnameError.html()).to.equal("First Name is Incorrect: Should be three or more characters");
        });
        it("createCheck finds valid value", function () {
            $firstnameInput.val("Mat");
            const checkAtLeastThree = validate.createValidator(function (input) {
                return input.value.length >= 3;
            }, "Should be three or more characters");
            validate.check(firstnameGroup, {
                "First Name": [checkAtLeastThree]
            });
            expect($firstnameError.html()).to.equal("First Name is Ok: Your data has been entered correctly");
        });
    });
    describe("returns validation result", function () {
        it("returns false when failed", function () {
            emailInput.value = "";
            const result = validate.check(emailGroup, {
                "E-mail": [validate.fn.checkEmpty]
            });
            expect(result).to.equal(false);
        });
        it("returns true when successful", function () {
            emailInput.value = "test@example.com";
            const result = validate.check(emailGroup, {
                "E-mail": [validate.fn.checkEmpty]
            });
            expect(result).to.equal(true);
        });
    });
});