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
    describe("creates a validator", function () {
        const abcConfig = {
            regex: /^[abc]/,
            error: "Must start with a, b, or c"
        };
        const noAbcConfig = {
            regex: /^[abc]/,
            shouldMatch: false,
            error: "Must start with a, b, or c"
        };
        it("can match regex with matcher", function () {
            const abcValidator = validate.createMatcher(abcConfig);
            emailInput.value = "atest@example.com";
            expect(abcValidator(emailGroup)).to.equal(true);
            
        });
        it("doesn't match regex with matcher", function () {
            const abcValidator = validate.createMatcher(abcConfig);
            emailInput.value = "dtest@example.com";
            expect(abcValidator(emailGroup)).to.equal(false);
            
        });
        it("doesn't match regex with noMatcher", function () {
            const nonAbcValidator = validate.createMatcher(noAbcConfig);
            emailInput.value = "atest@example.com";
            expect(nonAbcValidator(emailGroup)).to.equal(false);
            
        });
        it("matches regex with noMatcher", function () {
            const nonAbcValidator = validate.createMatcher(noAbcConfig);
            emailInput.value = "dtest@example.com";
            expect(nonAbcValidator(emailGroup)).to.equal(true);
            
        });
    });
    describe("makes matchers public", function () {
        describe("matches with email", function () {
            it("matches using public email matcher", function () {
                emailInput.value = "email@example.com";
                validate.check($(emailGroup), {
                    "E-mail": [
                        validate.fn.isEmail
                    ]
                });
                expect($emailError.html()).to.contain("is Ok");
            });
            it("doesn't match using public email matcher", function () {
                emailInput.value = "not an email";
                validate.check($(emailGroup), {
                    "E-mail": [
                        validate.fn.isEmail
                    ]
                });
                expect($emailError.html()).to.contain("is Incorrect");
            });
        });
        describe("matches with password", function () {
            const passwordGroup = $("#login .form-group").has("[name='Password']").get(0);
            const passwordInput = $(passwordGroup).find("input").get(0);
            const $passwordError = $(passwordGroup).find(".error");
            it("is at least six characters", function () {
                passwordInput.value = "abcdefg";
                validate.check($(passwordGroup), {
                    "Password": [
                        validate.fn.passwordAtLeastSix
                    ]
                });
                expect($passwordError.html()).to.contain("is Ok");
            });
            it("is less than six characters", function () {
                passwordInput.value = "abcde";
                validate.check($(passwordGroup), {
                    "E-mail": [
                        validate.fn.passwordAtLeastSix
                    ]
                });
                expect($passwordError.html()).to.contain("is Incorrect");
            });
            it("is less than thirteen characters", function () {
                passwordInput.value = "abcdefghijkl";
                validate.check($(passwordGroup), {
                    "Password": [
                        validate.fn.passwordBelowThirteen
                    ]
                });
                expect($passwordError.html()).to.contain("is Ok");
            });
            it("is less than six characters", function () {
                passwordInput.value = "abcdefghijklm";
                validate.check($(passwordGroup), {
                    "E-mail": [
                        validate.fn.passwordBelowThirteen
                    ]
                });
                expect($passwordError.html()).to.contain("is Incorrect");
            });
        });
    });
});