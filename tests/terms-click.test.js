describe("terms click", function () {
    function callTermsClickHandler(thisArg) {
        const clickHandler = validate.eventHandler.termsClick;
        clickHandler.call(thisArg);
    }
    const $termsGroup = $("#terms").closest(".form-group");
    const $terms = $termsGroup.find("#terms");
    const $termsError = $termsGroup.find("#termcheck");
    const $termsRequired = $termsGroup.find("#termsRequired");
    after(function () {
        $("#registration").trigger("reset");
    });
    describe("terms are checked", function () {
        beforeEach(function () {
            $("#terms").prop("checked", true);
        });
        it("adds ok to the checkbox", function () {
            $termsError.removeClass("ok");
            callTermsClickHandler($terms);
            expect($termsError.attr("class")).to.contain("ok");
        });
        it("removes warning from the checkbox", function () {
            $termsError.addClass("warning");
            callTermsClickHandler($terms);
            expect($termsError.attr("class")).to.not.contain("warning");
        });
        it("add ok to the required star", function () {
            $termsRequired.removeClass("ok");
            callTermsClickHandler($terms);
            expect($termsRequired.attr("class")).to.contain("ok");
        });
        it("removes warning from the required star", function () {
            $termsRequired.addClass("warning");
            callTermsClickHandler($terms);
            expect($termsRequired.attr("class")).to.not.contain("warning");
        });
    });
    describe("terms are unchecked", function () {
        beforeEach(function () {
            $("#terms").prop("checked", false);
        });
        it("removes ok from the checkbox", function () {
            $termsError.addClass("ok");
            callTermsClickHandler($terms);
            expect($termsError.attr("class")).to.not.contain("ok");
        });
        it("adds warning to the checkbox", function () {
            $termsError.removeClass("warning");
            callTermsClickHandler($terms);
            expect($termsError.attr("class")).to.contain("warning");
        });
        it("removes ok from the required star", function () {
            $termsRequired.addClass("ok");
            callTermsClickHandler($terms);
            expect($termsRequired.attr("class")).to.not.contain("ok");
        });
        it("adds warning to the required star", function () {
            $termsRequired.removeClass("warning");
            callTermsClickHandler($terms);
            expect($termsRequired.attr("class")).to.contain("warning");
        });
    });
});
