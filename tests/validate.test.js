describe("When form is reset, reset input classes", function () {
    const formGroup = $(".form-group")[0];
    const field = $(formGroup).find(".check")[0];
    const $error = $(formGroup).find(".error");
    const $feedback = $(formGroup).find(".feedback");
    const $starrq = $(formGroup).find(".starrq");
    const $termcheck = $("#termcheck");
    const $termsRequired = $("#termsRequired");
    
    function resetValues() {
        $(".form-group .check").each(function () {
            this.value = this.defaultValue;
        });
    }
    beforeEach(function () {
        resetValues();
    });
    it("updates the error name", function () {
        $error.html("");
        $(".btn2").trigger("click");
        expect($error.html()).to.equal(field.name);
    });
    it("removes warning from error", function () {
        $error.addClass("warning");
        $(".btn2").trigger("click");
        expect($error.attr("class")).to.not.contain("warning");
    });
    it("adds ok to error", function () {
        $error.removeClass("ok");
        $(".btn2").trigger("click");
        expect($error.attr("class")).to.contain("ok");
    });
    it("removes glyphicon from feedback", function () {
        $feedback.addClass("glyphicon");
        $(".btn2").trigger("click");
        expect($feedback.attr("class")).to.not.contain("glyphicon");
    });
    it("removes glyphicon-ok from feedback", function () {
        $feedback.addClass("glyphicon-ok");
        $(".btn2").trigger("click");
        expect($feedback.attr("class")).to.not.contain("glyphicon-ok");
    });
    it("removes warning from feedback", function () {
        $feedback.addClass("warning");
        $(".btn2").trigger("click");
        expect($feedback.attr("class")).to.not.contain("warning");
    });
    it("removes warning from starrq", function () {
        $starrq.addClass("warning");
        $(".btn2").trigger("click");
        expect($starrq.attr("class")).to.not.contain("warning");
    });
    it("adds ok to starrq", function () {
        $starrq.removeClass("ok");
        $(".btn2").trigger("click");
        expect($starrq.attr("class")).to.contain("ok");
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
