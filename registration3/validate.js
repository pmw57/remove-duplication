function validate(inputGroup, validators = {}) {
    const validationTypes = Object.assign({
        "E-mail": [checkEmpty, checkFake, checkEmailReg],
        "Password": [checkEmpty, checkFake, checkPasswordShort, checkPasswordLong],
        "Password Retype": [checkEmpty, checkPasswordDifferent]
    }, validators);
    function getName(inputGroup) {
        return $(inputGroup).find(".input-check").attr("name");
    }
    function getValue(inputGroup) {
        return $(inputGroup).find(".input-check").val().trim();
    }
    function checkEmpty(inputGroup) {
        if (getValue(inputGroup) === "") {
            inputStatus.warning(inputGroup, getName(inputGroup) + " is empty");
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
    function checkPasswordDifferent(inputGroup) {
        const $form = $(inputGroup).closest("form");
        const $passwordInput = $form.find("[name=Password]");
        const $retypeInput = $(inputGroup).find("input");
        if ($passwordInput.val() !== $retypeInput.val()) {
            inputStatus.warning(inputGroup, getName(inputGroup) + " is Incorrect: Password doesn't match retyped password");
            return false;
        }
        return true;
    }
    function showValid(inputGroup) {
        inputStatus.ok(inputGroup, getName(inputGroup) + " is Ok: Your data has been entered correctly");
    }
    function validateByTypes(inputGroup) {
        const name = getName(inputGroup);
        const types = validationTypes[name];
        return types.every(function (check) {
            return check(inputGroup);
        });
    }
    const isValid = validateByTypes(inputGroup);
    if (isValid) {
        showValid(inputGroup);
    }
}
