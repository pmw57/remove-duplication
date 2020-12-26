const validate = (function makeValidator() {
    function getName(inputGroup) {
        return $(inputGroup).find("input, textarea").attr("name");
    }

    function getValue(inputGroup) {
        return $(inputGroup).find("input, textarea").val().trim();
    }

    function checkEmpty(inputGroup) {
        if (getValue(inputGroup) === "") {
            const msg = "Please enter data into this input";
            inputStatus.warning(
                inputGroup,
                getName(inputGroup) + " is Empty: " + msg
            );
            return false;
        }
        return true;
    }

    function checkEmailReg(inputGroup) {
        const emailReg = /^([\w\-.]+@([\w\-]+\.)+[\w\-]{2,4})?$/;
        const value = getValue(inputGroup);
        if (!emailReg.test(value)) {
            const msg = "Please enter it correctly";
            inputStatus.warning(
                inputGroup,
                getName(inputGroup) + " is Incorrect: " + msg
            );
            return false;
        }
        return true;
    }

    function checkPasswordShort(inputGroup) {
        const pswReglow = /^([a-zA-Z0-9]{0,5})$/;
        const value = getValue(inputGroup);
        if (pswReglow.test(value)) {
            const msg = "Please enter at least 6 characters";
            inputStatus.warning(
                inputGroup,
                getName(inputGroup) + " is Incorrect: " + msg
            );
            return false;
        }
        return true;
    }

    function checkPasswordLong(inputGroup) {
        const pswReghigh = /^([a-zA-Z0-9]{13,})$/;
        const value = getValue(inputGroup);
        if (pswReghigh.test(value)) {
            const msg = "Please enter no more than 12 characters";
            inputStatus.warning(
                inputGroup,
                getName(inputGroup) + " is Incorrect: " + msg
            );
            return false;
        }
        return true;
    }

    function showValid(inputGroup) {
        const msg = " is Ok: Your data has been entered correctly";
        inputStatus.ok(inputGroup, getName(inputGroup) + msg);
    }

    const defaultValidators = {
        "E-mail": [
            checkEmpty,
            checkEmailReg
        ],
        "Password": [
            checkEmpty,
            checkPasswordShort,
            checkPasswordLong
        ]
    };

    function check(inputGroup, validators) {
        const validationTypes = Object.create(defaultValidators);
        Object.assign(validationTypes, validators);

        function validateByTypes(inputGroup) {
            const name = getName(inputGroup);
            const types = validationTypes[name];
            if (!types) {
                return;
            }
            return types.every(function checkInput(check) {
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
        const $formGroups = $(form).find(".form-group").has(".check");
        const formGroups = $formGroups.toArray();
        formGroups.forEach(function validateGroup(formGroup) {
            checkFieldEmpty(formGroup);
        });
    }
    function createValidator(rule, errorMessage) {
        function checkInput(inputGroup) {
            const input = $(inputGroup).find("input, textarea").get(0);
            if (!rule(input)) {
                const msg = " is Incorrect: " + errorMessage;
                inputStatus.warning(inputGroup, getName(inputGroup) + msg);
                return false;
            }
            return true;
        }
        return checkInput;
    }
    function getValidator(config) {
        return (config.regex && {
            checker: checkRx,
            rule: config.regex
        }) || (config.fieldname && {
            checker: fieldMatch,
            rule: config.fieldname
        });
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
            checkEmpty
        }
    };
}());