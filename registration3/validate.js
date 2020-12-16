const validate = (function () {
    const defaultValidators = {
        "E-mail": [checkEmpty, checkFake, checkEmailReg],
        "Password": [checkEmpty, checkFake, checkPasswordShort, checkPasswordLong]
    };
    function createValidator(rule, errorMessage) {
        return function check(inputGroup) {
            const input = $(inputGroup).find("input, textarea").get(0);
            if (!rule(input)) {
                inputStatus.warning(inputGroup, validate.fn.getName(inputGroup) + " is Incorrect: " + errorMessage);
                return false;
            }
            return true;
        }
    }
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
            return types.every(function (check) {
                return check(inputGroup);
            });
        }
        const isValid = validateByTypes(inputGroup);
        if (isValid) {
            showValid(inputGroup);
        }
    }
    return {
        createValidator,
        check,
        fn: {
            getName,
            getValue,
            checkEmpty,
            checkFake
        }
    };
}());