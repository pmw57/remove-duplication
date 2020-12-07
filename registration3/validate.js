function validate(inputGroup, type) {
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
    const validationTypes = {
        email: [checkEmpty, checkFake, checkEmailReg]
    };
    if (!validationTypes[type]) {
        throw new Error(type + " validation not supported");
    }
    const isNotValid = validateByTypes(inputGroup, validationTypes[type]);
    if (isNotValid) {
        return isNotValid;
    }
    const name = $(inputGroup).find(".input-check").attr("name");
    showValid(inputGroup, name);
}