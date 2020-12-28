const validate = (function makeValidator() {
    function getName(inputGroup) {
        return $(inputGroup).find("input, textarea").attr("name");
    }
    function getValue(inputGroup) {
        return $(inputGroup).find("input, textarea").val().trim();
    }
    function checkRx(rx, input) {
        return rx.test(input.value);
    }
    function fieldMatch(fieldname, input) {
        const form = input.form;
        const field = form.elements[fieldname];
        return field.value === input.value;
    }
    function createValidator(callback, config) {
        const errorMessage = config.error;
        function checkInput(inputGroup) {
            const input = $(inputGroup).find("input, textarea").get(0);
            if (!callback(input)) {
                const type = config.errorType || "Incorrect";
                const heading = getName(inputGroup) + " is " + type + ": ";
                inputStatus.warning(inputGroup, heading + errorMessage);
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
        }, config);
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
    const validators = {
        hasContent: {
            regex: /\w/,
            errorType: "Empty",
            error: "Please enter data into this input"
        },
        isEmail: {
            regex: /^([\w\-.]+@([\w\-]+\.)+[\w\-]{2,4})?$/,
            error: "Please enter it correctly"
        },
        passwordAtLeastSix: {
            regex: /^([a-zA-Z0-9]{6,})+$/,
            error: "Please enter at least 6 characters"
        },
        passwordBelowThirteen: {
            regex: /^[a-zA-Z0-9]{1,12}$/,
            error: "Please enter no more than 12 characters"
        }
    };

    const defaultValidators = {
        "E-mail": [
            createMatcher(validators.hasContent),
            createMatcher(validators.isEmail)
        ],
        "Password": [
            createMatcher(validators.hasContent),
            createMatcher(validators.passwordAtLeastSix),
            createMatcher(validators.passwordBelowThirteen)
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
            const msg = " is Ok: Your data has been entered correctly";
            inputStatus.ok(inputGroup, getName(inputGroup) + msg);
        }
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
    return {
        checkRx,
        fieldMatch,
        createMatcher,
        check,
        checkFieldEmpty,
        checkFormEmpty,
        fn: {
            getName,
            getValue,
            checkEmpty,
            isEmail: defaultValidators["E-mail"][1],
            passwordAtLeastSix: defaultValidators.Password[1],
            passwordBelowThirteen: defaultValidators.Password[2]
        }
    };
}());