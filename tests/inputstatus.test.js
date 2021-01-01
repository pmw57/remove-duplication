describe("input status", function () {
    inputGroup = $(".form-group").has(".error").get(0);
    $error = $(inputGroup).find(".error");
    $feedback = $(inputGroup).find(".feedback");
    $required = $(inputGroup).find(".starrq");
    describe("ok", function () {
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
    });
    describe("warning", function () {
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
    });
    describe("resetForm", function () {
        $form = $("form").eq(1);
        $formGroups = $form.find(".form-group").has(".check");
        $group1 = $formGroups.eq(0);
        $group2 = $formGroups.eq(1);
        $name1 = $group1.find(".check").attr("name");
        $name2 = $group2.find(".check").attr("name");
        $error1 = $group1.find(".error");
        $error2 = $group2.find(".error");
        $feedback1 = $group1.find(".feedback");
        $feedback2 = $group2.find(".feedback");
        function messageCallback(formGroup) {
            return "Test message";
        }
        it("resets one message", function () {
            $error1.find(".error").html("");
            inputStatus.resetForm($form, messageCallback);
            expect($error1.html()).to.equal("Test message");
        });
        it("resets another message", function () {
            $error2.find(".error").html("");
            inputStatus.resetForm($form, messageCallback);
            expect($error2.html()).to.equal("Test message");
        });
        it("resets one feedback", function () {
            $feedback1.addClass("warning");
            inputStatus.resetForm($form, messageCallback);
            expect($feedback1.attr("class")).to.not.contain("warning");
        });
        it("resets another feedback", function () {
            $feedback2.addClass("warning");
            inputStatus.resetForm($form, messageCallback);
            expect($feedback2.attr("class")).to.not.contain("warning");
        });
    });
});
