describe("When form is reset, reset input classes", function () {
    const $firstnameGroup = $(".form-group").first();
    const registrationResetHandler = validate.eventHandler.registrationReset;
    const fakeEvt = {
        preventDefault: function fakeFunc() {}
    };
    describe("firstname error", function () {
        const $firstnameInput = $firstnameGroup.find(".check");
        const $firstnameError = $firstnameGroup.find(".error");
        it("updates the error name", function () {
            $firstnameError.html("");
            $(".btn2").trigger("click");
            expect($firstnameError.html()).to.equal($firstnameInput.attr("name"));
        });
        it("removes warning from error", function () {
            $firstnameError.addClass("warning");
            $(".btn2").trigger("click");
            expect($firstnameError.attr("class")).to.not.contain("warning");
        });
        it("adds ok to error", function () {
            $firstnameError.removeClass("ok");
            $(".btn2").trigger("click");
            expect($firstnameError.attr("class")).to.contain("ok");
        });
    });
    describe("firstname feedback", function () {
        const $firstnameFeedback = $firstnameGroup.find(".feedback");
        it("removes glyphicon from feedback", function () {
            $firstnameFeedback.addClass("glyphicon");
            $(".btn2").trigger("click");
            expect($firstnameFeedback.attr("class")).to.not.contain("glyphicon");
        });
        it("removes glyphicon-ok from feedback", function () {
            $firstnameFeedback.addClass("glyphicon-ok");
            $(".btn2").trigger("click");
            expect($firstnameFeedback.attr("class")).to.not.contain("glyphicon-ok");
        });
        it("removes warning from feedback", function () {
            $firstnameFeedback.addClass("warning");
            $(".btn2").trigger("click");
            expect($firstnameFeedback.attr("class")).to.not.contain("warning");
        });
    });
    describe("firstname required", function () {
        const $firstnameRequired = $firstnameGroup.find(".starrq");
        it("removes warning from starrq", function () {
            $firstnameRequired.addClass("warning");
            $(".btn2").trigger("click");
            expect($firstnameRequired.attr("class")).to.not.contain("warning");
        });
        it("adds ok to starrq", function () {
            $firstnameRequired.removeClass("ok");
            $(".btn2").trigger("click");
            expect($firstnameRequired.attr("class")).to.contain("ok");
        });
    });
    describe("terms", function () {
        const $termsFormgroup = $termcheck.parentsUntil(".form-group");
        const $termsFeedback = $termsFormgroup.find(".feedback");
        const $termsStarrq = $termsFormgroup.find(".starrq");
        it("removes glyphicon from terms", function () {
            $termsFeedback.addClass("glyphicon");
            $(".btn2").trigger("click");
            expect($termsFeedback.attr("class")).to.not.contain("glyphicon");
        });
        it("removes glyphicon-ok from terms", function () {
            $termsFeedback.addClass("glyphicon-ok");
            $(".btn2").trigger("click");
            expect($termsFeedback.attr("class")).to.not.contain("glyphicon-ok");
        });
        it("removes ok from terms", function () {
            $termsFeedback.addClass("ok");
            $(".btn2").trigger("click");
            expect($termsFeedback.attr("class")).to.not.contain("ok");
        });
        it("removes warning from starrq", function () {
            $termsStarrq.addClass("warning");
            $(".btn2").trigger("click");
            expect($termsFeedback.attr("class")).to.not.contain("warning");
        });
        it("adds ok to starrq", function () {
            $termsStarrq.removeClass("ok");
            $(".btn2").trigger("click");
            expect($termsStarrq.attr("class")).to.contain("ok");
        });
        it("adds checkbox ok to termcheck", function () {
            $termcheck.removeClass("ok");
            $(".btn2").trigger("click");
            expect($termcheck.attr("class")).to.contain("ok");
        });
        it("removes checkbox warning from termcheck", function () {
            $termcheck.addClass("warning");
            $(".btn2").trigger("click");
            expect($termcheck.attr("class")).to.not.contain("warning");
        });
        it("adds required ok to termsRequired", function () {
            $termsRequired.removeClass("ok");
            $(".btn2").trigger("click");
            expect($termsRequired.attr("class")).to.contain("ok");
        });
        it("removes required warning from termsRequired", function () {
            $termsRequired.addClass("warning");
            $(".btn2").trigger("click");
            expect($termsRequired.attr("class")).to.not.contain("warning");
        });
    });
});
