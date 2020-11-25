describe("When reset password form is reset, reset input classes", function () {
    const $inputGroup = $(".inputboxmodal2");
    const $emailInput = $inputGroup.find(".input-check");
    const $emailError = $inputGroup.find(".error");
    const $emailFeedback = $inputGroup.find(".feedback");
    it("Resets the error message", function () {
        $emailError.html("test content");
        $("#changepw [type=reset]").trigger("click");
        expect($emailError.html()).to.equal("Your E-mail");
    });
    it("Resets the error color", function () {
        $emailError.removeClass("green");
        $("#changepw [type=reset]").trigger("click");
        expect($emailError.attr("class")).to.not.contain("green");
    });
    it("Removes the error warning class", function () {
        $emailError.addClass("warning");
        $("#changepw [type=reset]").trigger("click");
        expect($emailError.attr("class")).to.not.contain("warning");
    });
    it("Adds the error ok class", function () {
        $emailError.removeClass("ok");
        $("#changepw [type=reset]").trigger("click");
        expect($emailError.attr("class")).to.contain("ok");
    });
    it("Removes the feedback glyphicon class", function () {
        $emailFeedback.addClass("glyphicon");
        $("#changepw [type=reset]").trigger("click");
        expect($emailFeedback.attr("class")).to.not.contain("glyphicon");
    });
    it("Removes the feedback glyphicon-ok class", function () {
        $emailFeedback.addClass("glyphicon-ok");
        $("#changepw [type=reset]").trigger("click");
        expect($emailFeedback.attr("class")).to.not.contain("glyphicon-ok");
    });
    it("Removes the feedback ok class", function () {
        $emailFeedback.addClass("ok");
        $("#changepw [type=reset]").trigger("click");
        expect($emailFeedback.attr("class")).to.not.contain("ok");
    });
    it("Removes the feedback glyphicon-remove class", function () {
        $emailFeedback.addClass("glyphicon-remove");
        $("#changepw [type=reset]").trigger("click");
        expect($emailFeedback.attr("class")).to.not.contain("glyphicon-remove");
    });
});