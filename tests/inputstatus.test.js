describe("input status", function () {
    inputGroup = $(".form-group").has(".error").get(0);
    $error = $(inputGroup).find(".error");
    $feedback = $(inputGroup).find(".feedback");
    $required = $(inputGroup).find(".starrq");
    it("setNone removes ok", function () {
        $error.addClass("ok");
        inputStatus.setNone($error);
        expect($error.attr("class")).to.not.contain("ok");
    });
    it("setNone removes warning", function () {
        $error.addClass("warning");
        inputStatus.setNone($error);
        expect($error.attr("class")).to.not.contain("warning");
    });
    it("setOk", function () {
        $error.removeClass("ok");
        inputStatus.setOk($error);
        expect($error.attr("class")).to.contain("ok");
    });
    it("setWarning", function () {
        $error.removeClass("warning");
        inputStatus.setWarning($error);
        expect($error.attr("class")).to.contain("warning");
    });
    it("errorOk shows message", function () {
        $error.html("");
        inputStatus.errorOk(inputGroup, "Test message");
        expect($error.html()).to.equal("Test message");
    });
    it("errorOk sets color", function () {
        const cssGreen = "rgb(0, 128, 0)";
        $error.css("color", "red");
        inputStatus.errorOk(inputGroup, "Test message");
        expect($error.css("color")).to.equal(cssGreen);
    });
    it("errorOk sets ok", function () {
        $error.removeClass("ok");
        inputStatus.errorOk(inputGroup, "Test message");
        expect($error.attr("class")).to.contain("ok");
    });
    it("errorWarning shows message", function () {
        $error.html("");
        inputStatus.errorWarning(inputGroup, "Test message");
        expect($error.html()).to.equal("Test message");
    });
    it("errorWarning sets color", function () {
        const cssRed = "rgb(255, 0, 0)";
        $error.css("color", "green");
        inputStatus.errorWarning(inputGroup, "Test message");
        expect($error.css("color")).to.equal(cssRed);
    });
    it("errorWarning sets warning", function () {
        $error.removeClass("warning");
        inputStatus.errorWarning(inputGroup, "Test message");
        expect($error.attr("class")).to.contain("warning");
    });
    describe("feedback", function () {
        it("feedbackNone removes glyphicon", function () {
            $feedback.addClass("glyphicon");
            inputStatus.feedbackNone(inputGroup);
            expect($feedback.attr("class")).to.not.contain("glyphicon");
        });
        it("feedbackNone removes glyphicon-remove", function () {
            $feedback.addClass("glyphicon-remove");
            inputStatus.feedbackNone(inputGroup);
            expect($feedback.attr("class")).to.not.contain("glyphicon-remove");
        });
        it("feedbackNone removes glyphicon-ok", function () {
            $feedback.addClass("glyphicon-ok");
            inputStatus.feedbackNone(inputGroup);
            expect($feedback.attr("class")).to.not.contain("glyphicon-ok");
        });
        it("feedbackNone removes ok", function () {
            $feedback.addClass("ok");
            inputStatus.feedbackNone(inputGroup);
            expect($feedback.attr("class")).to.not.contain("ok");
        });
        it("feedbackNone removes warning", function () {
            $feedback.addClass("warning");
            inputStatus.feedbackNone(inputGroup);
            expect($feedback.attr("class")).to.not.contain("warning");
        });
        it("feedbackOk adds glyphicon", function () {
            $feedback.removeClass("glyphicon");
            inputStatus.feedbackOk(inputGroup);
            expect($feedback.attr("class")).to.contain("glyphicon");
        });
        it("feedbackOk removes glyphicon-remove", function () {
            $feedback.addClass("glyphicon-remove");
            inputStatus.feedbackOk(inputGroup);
            expect($feedback.attr("class")).to.not.contain("glyphicon-remove");
        });
        it("feedbackOk adds glyphicon-ok", function () {
            $feedback.removeClass("glyphicon-ok");
            inputStatus.feedbackOk(inputGroup);
            expect($feedback.attr("class")).to.contain("glyphicon-ok");
        });
        it("feedbackOk adds ok", function () {
            $feedback.removeClass("ok");
            inputStatus.feedbackOk(inputGroup);
            expect($feedback.attr("class")).to.contain("ok");
        });
        it("feedbackOk removes warning", function () {
            $feedback.addClass("warning");
            inputStatus.feedbackOk(inputGroup);
            expect($feedback.attr("class")).to.not.contain("warning");
        });
        it("feedbackWarning adds glyphicon", function () {
            $feedback.removeClass("glyphicon");
            inputStatus.feedbackWarning(inputGroup);
            expect($feedback.attr("class")).to.contain("glyphicon");
        });
        it("feedbackWarning adds glyphicon-remove", function () {
            $feedback.removeClass("glyphicon-remove");
            inputStatus.feedbackWarning(inputGroup);
            expect($feedback.attr("class")).to.contain("glyphicon-remove");
        });
        it("feedbackWarning removes glyphicon-ok", function () {
            $feedback.addClass("glyphicon-ok");
            inputStatus.feedbackWarning(inputGroup);
            expect($feedback.attr("class")).to.not.contain("glyphicon-ok");
        });
        it("feedbackWarning removes ok", function () {
            $feedback.addClass("ok");
            inputStatus.feedbackWarning(inputGroup);
            expect($feedback.attr("class")).to.not.contain("ok");
        });
        it("feedbackWarning adds warning", function () {
            $feedback.removeClass("warning");
            inputStatus.feedbackWarning(inputGroup);
            expect($feedback.attr("class")).to.contain("warning");
        });
    });
    describe("required", function () {
        it("requiredOk", function () {
            $required.removeClass("ok");
            inputStatus.requiredOk(inputGroup);
            expect($required.attr("class")).to.contain("ok");
        });
        it("requiredWarning", function () {
            $required.removeClass("warning");
            inputStatus.requiredWarning(inputGroup);
            expect($required.attr("class")).to.contain("warning");
        });
    });
    it("ok shows message", function () {
        $error.html();
        inputStatus.ok(inputGroup, "Test message");
        expect($error.html()).to.equal("Test message");
    });
    it("ok sets feedback", function () {
        $feedback.removeClass("ok");
        inputStatus.ok(inputGroup, "Test message");
        expect($feedback.attr("class")).to.contain("ok");
    });
    it("ok sets required", function () {
        $required.removeClass("ok");
        inputStatus.ok(inputGroup, "Test message");
        expect($required.attr("class")).to.contain("ok");
    });
    it("warning shows message", function () {
        $error.html();
        inputStatus.warning(inputGroup, "Test message");
        expect($error.html()).to.equal("Test message");
    });
    it("warning sets feedback", function () {
        $feedback.removeClass("warning");
        inputStatus.warning(inputGroup, "Test message");
        expect($feedback.attr("class")).to.contain("warning");
    });
    it("warning sets required", function () {
        $required.removeClass("warning");
        inputStatus.warning(inputGroup, "Test message");
        expect($required.attr("class")).to.contain("warning");
    });
    describe("resetForm", function () {
        $form = $("form").eq(1);
        $formGroups = $form.find(".form-group").has(".input-check");
        $group1 = $formGroups.eq(0);
        $group2 = $formGroups.eq(1);
        $name1 = $group1.find(".input-check").attr("name");
        $name2 = $group2.find(".input-check").attr("name");
        $error1 = $group1.find(".error");
        $error2 = $group2.find(".error");
        $feedback1 = $group1.find(".feedback");
        $feedback2 = $group2.find(".feedback");
        it("resets one message", function () {
            $error1.find(".error").html("");
            inputStatus.resetForm($form);
            expect($error1.html()).to.equal("Your " + $name1);
        });
        it("resets another message", function () {
            $error2.find(".error").html("");
            inputStatus.resetForm($form);
            expect($error2.html()).to.equal("Your " + $name2);
        });
        it("resets one feedback", function () {
            $feedback1.addClass("warning");
            inputStatus.resetForm($form);
            expect($feedback1.attr("class")).to.not.contain("warning");
        });
        it("resets another feedback", function () {
            $feedback2.addClass("warning");
            inputStatus.resetForm($form);
            expect($feedback2.attr("class")).to.not.contain("warning");
        });
    });
});
