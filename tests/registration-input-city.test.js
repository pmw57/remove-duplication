describe("registration input city", function () {
    it("sets an error when city is empty", function () {
        const $city = $(".check[name='Your City']");
        $city.val("");
        const $cityGroup = $city.closest(".form-group");
        $city.find(".error").removeClass("warning");
        $city.closest(".input-group").trigger("input");
        expect($cityGroup.find(".error").attr("class")).to.contain("warning");
    });
});