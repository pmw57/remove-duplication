describe("registration submit", function () {
    function registrationSubmitHandler(fakeEvt) {
        const submitHandler = validate.eventHandler.registrationSubmit;
        submitHandler(fakeEvt);
    }
    let fakeEvt;
    beforeEach(function () {
        fakeEvt = {
            preventDefault: function fakePreventDefault() {}
        };
    });
    describe("avoiding errors", function () {
        it("doesn't throw a trim error", function () {
            expect(function () {
                registrationSubmitHandler(fakeEvt);
            }).to.not.throw("Cannot read property 'trim' of undefined");
        });
        it("doesn't call preventDefault when no fields have a warning", function () {
            chai.spy.on(fakeEvt, "preventDefault");
            $(".form-group input").val("test value");
            $(".form-group textarea").val("test value");
            $(".form-group .warning").removeClass("warning");
            $("#terms").prop("checked", true);
            registrationSubmitHandler(fakeEvt);
            expect(fakeEvt.preventDefault).to.not.have.been.called();
        });
        it("calls preventDefault when a field has a warning", function () {
            chai.spy.on(fakeEvt, "preventDefault");
            $(".form-group .check").eq(0).val("");
            $(".inputstatus .error").removeClass("warning");
            $("#terms").prop("checked", true);
            registrationSubmitHandler(fakeEvt);
            expect(fakeEvt.preventDefault).to.have.been.called();
        });
    });
    describe("firstname is empty", function () {
        const $firstnameGroup = $("#registration .form-group").first();
        const $firstnameInput = $firstnameGroup.find("input");
        const firstnameName = $firstnameGroup.find("input").attr("name");
        beforeEach(function () {
            $firstnameInput.val("");
        });
        describe("error", function () {
            const $firstnameError = $firstnameGroup.find(".error");
            it("shows the error text", function () {
                $firstnameError.html("");
                registrationSubmitHandler(fakeEvt);
                expect($firstnameError.html()).to.equal("First Name is empty!");
            });
            it("removes ok", function () {
                $firstnameError.addClass("ok");
                registrationSubmitHandler(fakeEvt);
                expect($firstnameError.attr("class")).to.not.contain("ok");
            });
            it("adds warning", function () {
                $firstnameError.removeClass("warning");
                registrationSubmitHandler(fakeEvt);
                expect($firstnameError.attr("class")).to.contain("warning");
            });
        });
        describe("feedback", function () {
            const $firstnameFeedback = $firstnameGroup.find(".feedback");
            it("adds glyphicon", function () {
                $firstnameFeedback.removeClass("glyphicon");
                registrationSubmitHandler(fakeEvt);
                expect($firstnameFeedback.attr("class")).to.contain("glyphicon");
            });
            it("removes glyphicon-ok", function () {
                $firstnameFeedback.addClass("glyphicon-ok");
                registrationSubmitHandler(fakeEvt);
                expect($firstnameFeedback.attr("class")).to.not.contain("glyphicon-ok");
            });
            it("adds glyphicon-remove", function () {
                $firstnameFeedback.removeClass("glyphicon-remove");
                registrationSubmitHandler(fakeEvt);
                expect($firstnameFeedback.attr("class")).to.contain("glyphicon-remove");
            });
            it("removes ok", function () {
                $firstnameFeedback.addClass("ok");
                registrationSubmitHandler(fakeEvt);
                expect($firstnameFeedback.attr("class")).to.not.contain("ok");
            });
            it("adds warning", function () {
                $firstnameFeedback.removeClass("warning");
                registrationSubmitHandler(fakeEvt);
                expect($firstnameFeedback.attr("class")).to.contain("warning");
            });
        });
        describe("required star", function () {
            const $firstnameRequired = $firstnameGroup.find(".starrq");
            it("removes ok", function () {
                $firstnameRequired.addClass("ok");
                registrationSubmitHandler(fakeEvt);
                expect($firstnameRequired.attr("class")).to.not.contain("ok");
            });
            it("adds warning", function () {
                $firstnameRequired.removeClass("warning");
                registrationSubmitHandler(fakeEvt);
                expect($firstnameRequired.attr("class")).to.contain("warning");
            });
        });
        describe("terms", function () {
            const $termsGroup = $("#terms").closest(".form-group");
            const $termsError = $termsGroup.find(".error2");
            const $termsRequired = $termsGroup.find(".starrq");
            beforeEach(function () {
                $("#terms").prop("checked", false);
            })
            it("removes ok from error", function () {
                $termsError.addClass("ok");
                registrationSubmitHandler(fakeEvt);
                expect($termsError.attr("class")).to.not.contain("ok");
            });
            it("adds warning to error", function () {
                $termsError.removeClass("warning");
                registrationSubmitHandler(fakeEvt);
                expect($termsError.attr("class")).to.contain("warning");
            });
            it("removes ok from required", function () {
                $termsRequired.addClass("ok");
                registrationSubmitHandler(fakeEvt);
                expect($termsRequired.attr("class")).to.not.contain("ok");
            });
            it("adds warning to required", function () {
                $termsRequired.removeClass("warning");
                registrationSubmitHandler(fakeEvt);
                expect($termsRequired.attr("class")).to.contain("warning");
            });
        });
        it("prevents form submission", function () {
            $firstnameGroup.find(".check").val("test value");
            $firstnameGroup.find("input").val("");
            $("#terms").prop("checked", true);
            chai.spy.on(fakeEvt, "preventDefault");
            registrationSubmitHandler(fakeEvt);
            expect(fakeEvt.preventDefault).to.have.been.called();
        });
        it("runs the submit handler when submit is clicked", function () {
            $firstnameGroup.find("input").val("");
            const $error = $firstnameGroup.find(".error");
            $error.removeClass("warning");
            $("#registration").trigger("submit");
            expect($error.attr("class")).to.contain("warning");
        });
    });
    describe("terms and conditions", function () {
        const $termsGroup = $("#terms").closest(".form-group");
        const $termsError = $termsGroup.find(".error2");
        const $termsRequired = $termsGroup.find(".starrq");
        describe("terms are checked", function () {
            beforeEach(function () {
                $("#terms").prop("checked", true);
            })
            it("adds ok to error", function () {
                $termsError.removeClass("ok");
                registrationSubmitHandler(fakeEvt);
                expect($termsError.attr("class")).to.contain("ok");
            });
            it("removes warning from error", function () {
                $termsError.addClass("warning");
                registrationSubmitHandler(fakeEvt);
                expect($termsError.attr("class")).to.not.contain("warning");
            });
            it("adds ok to required", function () {
                $termsRequired.removeClass("ok");
                registrationSubmitHandler(fakeEvt);
                expect($termsRequired.attr("class")).to.contain("ok");
            });
            it("removes warning from required", function () {
                $termsRequired.addClass("warning");
                registrationSubmitHandler(fakeEvt);
                expect($termsRequired.attr("class")).to.not.contain("warning");
            });
        });
        describe("terms are unchecked", function () {
            beforeEach(function () {
                $("#terms").prop("checked", false);
            })
            it("removes ok from error", function () {
                $termsError.addClass("ok");
                registrationSubmitHandler(fakeEvt);
                expect($termsError.attr("class")).to.not.contain("ok");
            });
            it("adds warning to error", function () {
                $termsError.removeClass("warning");
                registrationSubmitHandler(fakeEvt);
                expect($termsError.attr("class")).to.contain("warning");
            });
            it("removes ok from required", function () {
                $termsRequired.addClass("ok");
                registrationSubmitHandler(fakeEvt);
                expect($termsRequired.attr("class")).to.not.contain("ok");
            });
            it("adds warning to required", function () {
                $termsRequired.removeClass("warning");
                registrationSubmitHandler(fakeEvt);
                expect($termsRequired.attr("class")).to.contain("warning");
            });
        });
    });
});
