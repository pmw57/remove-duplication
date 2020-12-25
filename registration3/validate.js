const validate = (function() {
    const defaultValidators = {
        "E-mail": [checkEmpty, checkFake, checkEmailReg],
        "Password": [checkEmpty, checkFake, checkPasswordShort, checkPasswordLong]
    };

    function getName(inputGroup) {
        return $(inputGroup).find("input, textarea").attr("name");
    }

    function getValue(inputGroup) {
        return $(inputGroup).find("input, textarea").val().trim();
    }

    function checkEmpty(inputGroup) {
        if (getValue(inputGroup) === "") {
            inputStatus.warning(inputGroup, getName(inputGroup) + " is Empty: Please enter data into this input");
            return false;
        }
        return true;
    }

    function checkFake(inputGroup) {
        const fakeReg = /(.)\1{2,}/;
        const value = getValue(inputGroup);
        if (fakeReg.test(value)) {
            inputStatus.warning(inputGroup, getName(inputGroup) + " is Fake text: Please remove repetition");
            return false;
        }
        return true;
    }

    function checkEmailReg(inputGroup) {
        const emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        const value = getValue(inputGroup);
        if (!emailReg.test(value)) {
            inputStatus.warning(inputGroup, getName(inputGroup) + " is Incorrect: Please enter it correctly");
            return false;
        }
        return true;
    }

    function checkPasswordShort(inputGroup) {
        const pswReglow = /^([a-zA-Z0-9]{0,5})$/;
        const value = getValue(inputGroup);
        if (pswReglow.test(value)) {
            inputStatus.warning(inputGroup, getName(inputGroup) + " is Incorrect: Please enter at least 6 characters");
            return false;
        }
        return true;
    }

    function checkPasswordLong(inputGroup) {
        const pswReghigh = /^([a-zA-Z0-9]{13,})$/;
        const value = getValue(inputGroup);
        if (pswReghigh.test(value)) {
            inputStatus.warning(inputGroup, getName(inputGroup) + " is Incorrect: Please enter no more than 12 characters");
            return false;
        }
        return true;
    }

    function showValid(inputGroup) {
        inputStatus.ok(inputGroup, getName(inputGroup) + " is Ok: Your data has been entered correctly");
    }

    function check(inputGroup, validators) {
        const validationTypes = Object.create(defaultValidators);
        Object.assign(validationTypes, validators);

        function validateByTypes(inputGroup) {
            const name = getName(inputGroup);
            const types = validationTypes[name];
            if (!types) {
                console.log(name + " validation not yet implemented");
                return;
            }
            return types.every(function(check) {
                return check(inputGroup);
            });
        }
        const isValid = validateByTypes(inputGroup);
        if (isValid) {
            showValid(inputGroup);
        }
    }

    function checkRx(rx, input) {
        return rx.test(input.value);
    }
    function fieldMatch(fieldname, input) {
        const form = input.form;
        const field = form.elements[fieldname];
        return field.value === input.value;
    }
    function checkFieldEmpty(formGroup) {
        const $inputField = $(formGroup).find("input, textarea");
        const name = $inputField.attr("name");
        const validations = [checkEmpty];
        check(formGroup, Object.fromEntries([
            [name, validations]
        ]));
    }

    function checkFormEmpty(form) {
        $(form).find(".form-group").has(".check").each(function validateGroup() {
            checkFieldEmpty(this);
        });
    }
    function createValidator(rule, errorMessage) {
        return function check(inputGroup) {
            const input = $(inputGroup).find("input, textarea").get(0);
            if (!rule(input)) {
                inputStatus.warning(inputGroup, getName(inputGroup) + " is Incorrect: " + errorMessage);
                return false;
            }
            return true;
        }
    }
    function getValidator(config) {
        return config.regex && {
            checker: checkRx,
            rule: config.regex
        }
        || config.fieldname && {
            checker: fieldMatch,
            rule: config.fieldname
        };
    }
    function createMatcher(config) {
        const validator = getValidator(config);
        const errorMessage = config.error;
        const checker = validator.checker;
        return createValidator(function regexValidator(input) {
            if (config.shouldMatch === false) {
                return !checker(validator.rule, input);
            } else {
                return checker(validator.rule, input);
            }
        }, errorMessage);
    }
    return {
        check,
        checkRx,
        fieldMatch,
        checkFieldEmpty,
        checkFormEmpty,
        createValidator,
        createMatcher,
        fn: {
            getName,
            getValue,
            checkEmpty,
            checkFake
        }
    };
}());