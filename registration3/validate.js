function validate(formGroup, type) {
    const validationTypes = {
    };
    if (!validationTypes[type]) {
        throw new Error(type + " validation not supported");
    }
    return;
}