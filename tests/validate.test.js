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
    describe("checks empty", function () {
        it("checks a field is empty", function () {
            emailInput.value = "";
            $emailError.removeClass("warning");
            validate.checkFieldEmpty(emailGroup);
            expect($emailError.attr("class")).to.contain("warning");
        });
        it("checks a field is not empty", function () {
            emailInput.value = "test@example.com";
            $emailError.removeClass("ok");
            validate.checkFieldEmpty(emailGroup);
            expect($emailError.attr("class")).to.contain("ok");
        });
    });
    describe("compares a field", function () {
        const form = $("#changepw").get(0);
        const passwordField = form.elements.Password;
        const retypeField = form.elements["Password Retype"];
       it("checks that a field matches a value", function () {
           passwordField.value = "test password";
           retypeField.value = "test password";
           const result = validate.fieldMatch("Password", retypeField);
           expect(result).to.equal(true);
       });
       it("checks that a field doesn't match", function () {
           passwordField.value = "test password";
           retypeField.value = "bad password";
           const result = validate.fieldMatch("Password", retypeField);
           expect(result).to.equal(false);
       });
    });
    describe("compares against a regular expression", function () {
       it("checks that a field matches a regex", function () {
           emailInput.value = "email@example.com";
           const regex = /[a-z]@[a-z.]/;
           const result = validate.checkRx(regex, emailInput);
           expect(result).to.equal(true);
       });
       it("checks that a field doesn't match regex", function () {
           emailInput.value = "";
           const regex = /[a-z]@[a-z.]/;
           const result = validate.checkRx(regex, emailInput);
           expect(result).to.equal(false);
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
        const $firstnameInput = $(firstnameGroup).find("input");
        const $firstnameError = $(firstnameGroup).find(".error");
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
            $firstnameInput.val("Max");
            const checkAtLeastThree = validate.createValidator(function (input) {
                return input.value.length >= 3;
            }, "Should be three or more characters");
            validate.check(firstnameGroup, {
                "First Name": [checkAtLeastThree]
            });
            expect($firstnameError.html()).to.equal("First Name is Ok: Your data has been entered correctly");
        });
    });
//    describe("creates a validator", function () {
//        const abcConfig = {
//            regex: /^[abc]/,
//            error: "Must start with a, b, or c"
//        };
//        it("can match regex with matcher", function () {
//            const abcValidator = validate.createMatcher(abcConfig);
//            emailInput.value = "atest@example.com";
//            expect(abcValidator(emailGroup)).to.equal(true);
//            
//        });
//        it("doesn't match regex with matcher", function () {
//            const abcValidator = validate.createMatcher(abcConfig);
//            emailInput.value = "dtest@example.com";
//            expect(abcValidator(emailGroup)).to.equal(false);
//            
//        });
//        it("doesn't match regex with noMatcher", function () {
//            const nonAbcValidator = validate.createNomatcher(abcConfig);
//            emailInput.value = "atest@example.com";
//            expect(nonAbcValidator(emailGroup)).to.equal(false);
//            
//        });
//        it("matches regex with noMatcher", function () {
//            const nonAbcValidator = validate.createNomatcher(abcConfig);
//            emailInput.value = "dtest@example.com";
//            expect(nonAbcValidator(emailGroup)).to.equal(true);
//            
//        });
//    });
});