function validate(inputGroup) {
    const validationTypes = {
        "E-mail": [checkEmpty, checkFake, checkEmailReg],
        "Password": [checkEmpty, checkFake, checkPasswordShort, checkPasswordLong],
        "Password Retype": [checkEmpty, matchesPassword]
    };

    function getValue(inputGroup) {
        return $(inputGroup).find(".input-check").val().trim();
    }
    function getName(inputGroup) {
        return $(inputGroup).find(".input-check").attr("name");        
    }
    function checkEmpty(inputGroup) {
        if (getValue(inputGroup) === "") {
            inputStatus.warning(inputGroup, getName(inputGroup) + " is empty");
            return true;
        }
    }
    function checkFake(inputGroup) {
        const fakeReg = /(.)\1{2,}/;
        const value = getValue(inputGroup);
        if (fakeReg.test(value)) {
            inputStatus.warning(inputGroup, getName(inputGroup) + " is Fake text: Please remove repetition");
            return true;
        }
    }
    function checkEmailReg(inputGroup) {
        const emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        const value = getValue(inputGroup);
        if (!emailReg.test(value)) {
            inputStatus.warning(inputGroup, getName(inputGroup) + " is Incorrect: Please enter it correctly");
            return true;
        }
    }
    function checkPasswordShort(inputGroup) {
        const pswReglow = /^([a-zA-Z0-9]{0,5})$/;
        const value = getValue(inputGroup);
        if (pswReglow.test(value)) {
            inputStatus.warning(inputGroup, getName(inputGroup) + " is Incorrect: Please enter at least 6 characters");
            return true;
        }
    }
    function checkPasswordLong(inputGroup) {
        const pswReghigh = /^([a-zA-Z0-9]{13,})$/;
        const value = getValue(inputGroup);
        if (pswReghigh.test(value)) {
            inputStatus.warning(inputGroup, getName(inputGroup) + " is Incorrect: Please enter no more than 12 characters");
            return true;
        }
    }
    function matchesPassword(inputGroup) {
        var $passwordValue = $("#changepw [name=Password]").val();
        const value = getValue(inputGroup);
        if (value !== $passwordValue) {
            inputStatus.warning(inputGroup, getName(inputGroup) + " is Incorrect: Password doesn't match retyped password");
            return true;
        }
    }
    function showValid(inputGroup) {
        inputStatus.ok(inputGroup, getName(inputGroup) + " is Ok: Your data has been entered correctly");
    }
    function validateByTypes(inputGroup, types) {
        const value = getValue(inputGroup);
        const name = getName(inputGroup);
        return types.some(function (check) {
            return check(inputGroup, value, name);
        });
    }
    const name = getName(inputGroup);
    if (!validationTypes[name]) {
        throw new Error(name + " validation not supported");
    }
    const isNotValid = validateByTypes(inputGroup, validationTypes[name]);
    if (isNotValid) {
        return isNotValid;
    }
    showValid(inputGroup);
}