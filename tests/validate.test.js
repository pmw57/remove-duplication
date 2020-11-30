describe("When form is reset, reset input messages", function () {
    const registrationResetHandler = validate.eventHandler.registrationReset;
    const fakeEvt = {
        preventDefault: function fakeFunc() {}
    };
    describe("firstname", function () {
        const $firstnameGroup = $("#registration .form-group").first();
        describe("firstname error", function () {
            const $firstnameError = $firstnameGroup.find(".error");
            const firstnameName = $firstnameGroup.find("input").attr("name");
            it("updates the error name", function () {
                $firstnameError.html("");
                registrationResetHandler(fakeEvt);
                expect($firstnameError.html()).to.equal(firstnameName);
            });
            it("removes warning from error", function () {
                $firstnameError.addClass("warning");
                registrationResetHandler(fakeEvt);
                expect($firstnameError.attr("class")).to.not.contain("warning");
            });
            it("adds ok to error", function () {
                $firstnameError.removeClass("ok");
                registrationResetHandler(fakeEvt);
                expect($firstnameError.attr("class")).to.contain("ok");
            });
        });
        describe("firstname feedback", function () {
            const $firstnameFeedback = $firstnameGroup.find(".feedback");
            it("removes glyphicon from feedback", function () {
                $firstnameFeedback.addClass("glyphicon");
                registrationResetHandler(fakeEvt);
                expect($firstnameFeedback.attr("class")).to.not.contain("glyphicon");
            });
            it("removes glyphicon-ok from feedback", function () {
                $firstnameFeedback.addClass("glyphicon-ok");
                registrationResetHandler(fakeEvt);
                expect($firstnameFeedback.attr("class")).to.not.contain("glyphicon-ok");
            });
            it("removes warning from feedback", function () {
                $firstnameFeedback.addClass("warning");
                registrationResetHandler(fakeEvt);
                expect($firstnameFeedback.attr("class")).to.not.contain("warning");
            });
        });
        describe("firstname required", function () {
            const $firstnameRequired = $firstnameGroup.find(".starrq");
            it("removes warning from starrq", function () {
                $firstnameRequired.addClass("warning");
                registrationResetHandler(fakeEvt);
                expect($firstnameRequired.attr("class")).to.not.contain("warning");
            });
            it("adds ok to starrq", function () {
                $firstnameRequired.removeClass("ok");
                registrationResetHandler(fakeEvt);
                expect($firstnameRequired.attr("class")).to.contain("ok");
            });
        });
    });
    describe("terms submit", function () {
        const $termsGroup = $("#terms").closest(".form-group");
        const $terms = $termsGroup.find("#terms");
        const $termsError = $termsGroup.find("#termcheck");
        const $termsRequired = $termsGroup.find("#termsRequired");
        describe("terms are checked", function () {
            beforeEach(function () {
                $("#terms").prop("checked", false);
            });
            it("adds ok to the checkbox", function () {
                $termsError.removeClass("ok");
                $("#terms").click();
                expect($termsError.attr("class")).to.contain("ok");
            });
            it("removes warning from the checkbox", function () {
                $termsError.addClass("warning");
                $("#terms").click();
                expect($termsError.attr("class")).to.not.contain("warning");
            });
            it("add ok to the required star", function () {
                $termsRequired.removeClass("ok");
                $("#terms").click();
                expect($termsRequired.attr("class")).to.contain("ok");
            });
            it("removes warning from the required star", function () {
                $termsRequired.addClass("warning");
                $("#terms").click();
                expect($termsRequired.attr("class")).to.not.contain("warning");
            });
        });
        describe("terms are unchecked", function () {
            beforeEach(function () {
                $("#terms").prop("checked", true);
            });
            it("removes ok from the checkbox", function () {
                $termsError.addClass("ok");
                $("#terms").click();
                expect($termsError.attr("class")).to.not.contain("ok");
            });
            it("adds warning to the checkbox", function () {
                $termsError.removeClass("warning");
                $("#terms").click();
                expect($termsError.attr("class")).to.contain("warning");
            });
            it("removes ok from the required star", function () {
                $termsRequired.addClass("ok");
                $("#terms").click();
                expect($termsRequired.attr("class")).to.not.contain("ok");
            });
            it("adds warning to the required star", function () {
                $termsRequired.removeClass("warning");
                $("#terms").click();
                expect($termsRequired.attr("class")).to.contain("warning");
            });
        });
    });
    describe("terms reset", function () {
        const $termsFormgroup = $("#terms").closest(".form-group");
        describe("terms feedback", function () {
            const $termsFeedback = $termsFormgroup.find(".feedback");
            it("removes glyphicon from terms", function () {
                $termsFeedback.addClass("glyphicon");
                registrationResetHandler(fakeEvt);
                expect($termsFeedback.attr("class")).to.not.contain("glyphicon");
            });
            it("removes glyphicon-ok from terms", function () {
                $termsFeedback.addClass("glyphicon-ok");
                registrationResetHandler(fakeEvt);
                expect($termsFeedback.attr("class")).to.not.contain("glyphicon-ok");
            });
            it("removes ok from terms", function () {
                $termsFeedback.addClass("ok");
                registrationResetHandler(fakeEvt);
                expect($termsFeedback.attr("class")).to.not.contain("ok");
            });
        });
        describe("terms checkbox", function () {
            const $termcheck = $termsFormgroup.find("#termcheck");
            it("adds checkbox ok to termcheck", function () {
                $termcheck.removeClass("ok");
                registrationResetHandler(fakeEvt);
                expect($termcheck.attr("class")).to.contain("ok");
            });
            it("removes checkbox warning from termcheck", function () {
                $termcheck.addClass("warning");
                registrationResetHandler(fakeEvt);
                expect($termcheck.attr("class")).to.not.contain("warning");
            });
        });
        describe("terms required", function () {
            const $termsRequired = $termsFormgroup.find("#termsRequired");
            it("adds required ok to termsRequired", function () {
                $termsRequired.removeClass("ok");
                registrationResetHandler(fakeEvt);
                expect($termsRequired.attr("class")).to.contain("ok");
            });
            it("removes required warning from termsRequired", function () {
                $termsRequired.addClass("warning");
                registrationResetHandler(fakeEvt);
                expect($termsRequired.attr("class")).to.not.contain("warning");
            });
        });
    });
});
