describe("registration input city", function () {
    const registrationInputHandler = validate.eventHandler.registrationInput;
    it("sets an error when city is empty", function () {
        const $city = $(".check[name='Your City']");
        $city.val("");
        $city.find(".error").removeClass("warning");
        const $cityInput = $city.closest(".input-group");
        registrationInputHandler.call($cityInput);
        const $cityGroup = $city.closest(".form-group");
        expect($cityGroup.find(".error").attr("class")).to.contain("warning");
    });
});
