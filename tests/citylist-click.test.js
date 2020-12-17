describe("registration input city", function () {
    /*
       Structure
       - ul.citylist
         - li
    */
    function callCitylistClickHandler(thisArg) {
        const citylistClickHandler = registration.eventHandler.citylistClick;
        const evt = {
            target: thisArg
        };
        citylistClickHandler.call(thisArg, evt);
    }
    const $cityInput = $("#registration [name='Your City']");
    const $cityGroup = $cityInput.closest(".form-group");
    const $cityError = $cityGroup.find(".error");
    const $cityFeedback = $cityGroup.find(".feedback");
    const $cityRequired = $cityGroup.find(".starrq");
    const firstItem = $(".citylist li").first().get(0);
    after(function () {
        $("#demo2").collapse("hide");
        $("#registration").trigger("reset");
    });
    it("updates the city", function () {
        $("#your-city").val("");
        callCitylistClickHandler(firstItem);
        expect($("#your-city").val()).to.equal("London");
    });
    it.skip("collapses the city list", function () {
        $("#demo2").show();
        callCitylistClickHandler(firstItem);
        expect($("#demo2").attr("class")).to.contain("collapse");
    });
    it("shows a no error message", function () {
        $cityError.html("");
        callCitylistClickHandler(firstItem);
        expect($cityError.html()).to.equal("Your City is Ok: Your data has been entered correctly");
    });
    it("shows ok on no error", function () {
        $cityError.removeClass("ok");
        callCitylistClickHandler(firstItem);
        expect($cityError.attr("class")).to.contain("ok");
    });
    describe("On an error", function () {
        let emptyItem;
        beforeEach(function () {
            $(".citylist").append("<li></li>");
            emptyItem = $(".citylist li").last().get(0);
        });
        afterEach(function () {
            $(".citylist li:last").remove();
        });
        it("shows an error message", function () {
            $cityError.html("");
            callCitylistClickHandler(emptyItem);
            expect($cityError.html()).to.equal("Your City is Empty: Please enter data into this input");
        });
        it("shows warning on error", function () {
            $cityError.removeClass("warning");
            callCitylistClickHandler(emptyItem);
            expect($cityError.attr("class")).to.contain("warning");
        });
    });
    it("adds ok to error", function () {
        $cityError.removeClass("ok");
        callCitylistClickHandler(firstItem);
        expect($cityError.attr("class")).to.contain("ok");
    });
    it("removes warning from error", function () {
        $cityError.addClass("warning");
        callCitylistClickHandler(firstItem);
        expect($cityError.attr("class")).to.not.contain("warning");
    });
    it("adds glyphicon to feedback", function () {
        $cityFeedback.removeClass("glyphicon");
        callCitylistClickHandler(firstItem);
        expect($cityFeedback.attr("class")).to.contain("glyphicon");
    });
    it("removes glyphicon-remove from feedback", function () {
        $cityFeedback.addClass("glyphicon-remove");
        callCitylistClickHandler(firstItem);
        expect($cityFeedback.attr("class")).to.not.contain("glyphicon-remove");
    });
    it("adds glyphicon-ok to feedback", function () {
        $cityFeedback.removeClass("glyphicon-ok");
        callCitylistClickHandler(firstItem);
        expect($cityFeedback.attr("class")).to.contain("glyphicon-ok");
    });
    it("removes warning from feedback", function () {
        $cityFeedback.addClass("warning");
        callCitylistClickHandler(firstItem);
        expect($cityFeedback.attr("class")).to.not.contain("warning");
    });
    it("adds ok to feedback", function () {
        $cityFeedback.removeClass("ok");
        callCitylistClickHandler(firstItem);
        expect($cityFeedback.attr("class")).to.contain("ok");
    });
    it("adds ok to required", function () {
        $cityRequired.removeClass("ok");
        callCitylistClickHandler(firstItem);
        expect($cityRequired.attr("class")).to.contain("ok");
    });
    it("removes warning from required", function () {
        $cityRequired.addClass("warning");
        callCitylistClickHandler(firstItem);
        expect($cityRequired.attr("class")).to.not.contain("warning");
    });
});
