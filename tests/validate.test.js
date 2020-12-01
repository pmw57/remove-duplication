describe("terms click", function () {
    const $termsGroup = $("#terms").closest(".form-group");
    const $terms = $termsGroup.find("#terms");
    const $termsError = $termsGroup.find("#termcheck");
    const $termsRequired = $termsGroup.find("#termsRequired");
    const termsClickHandler = validate.eventHandler.termsClick;
    describe("terms are checked", function () {
        beforeEach(function () {
            $("#terms").prop("checked", true);
        });
        it("adds ok to the checkbox", function () {
            $termsError.removeClass("ok");
            termsClickHandler.call($terms);
            expect($termsError.attr("class")).to.contain("ok");
        });
        it("removes warning from the checkbox", function () {
            $termsError.addClass("warning");
            termsClickHandler.call($terms);
            expect($termsError.attr("class")).to.not.contain("warning");
        });
        it("add ok to the required star", function () {
            $termsRequired.removeClass("ok");
            termsClickHandler.call($terms);
            expect($termsRequired.attr("class")).to.contain("ok");
        });
        it("removes warning from the required star", function () {
            $termsRequired.addClass("warning");
            termsClickHandler.call($terms);
            expect($termsRequired.attr("class")).to.not.contain("warning");
        });
    });
    describe("terms are unchecked", function () {
        beforeEach(function () {
            $("#terms").prop("checked", false);
        });
        it("removes ok from the checkbox", function () {
            $termsError.addClass("ok");
            termsClickHandler.call($terms);
            expect($termsError.attr("class")).to.not.contain("ok");
        });
        it("adds warning to the checkbox", function () {
            $termsError.removeClass("warning");
            termsClickHandler.call($terms);
            expect($termsError.attr("class")).to.contain("warning");
        });
        it("removes ok from the required star", function () {
            $termsRequired.addClass("ok");
            termsClickHandler.call($terms);
            expect($termsRequired.attr("class")).to.not.contain("ok");
        });
        it("adds warning to the required star", function () {
            $termsRequired.removeClass("warning");
            termsClickHandler.call($terms);
            expect($termsRequired.attr("class")).to.contain("warning");
        });
    });
});
describe("registration submit", function () {
    const submitButton = $(".btn1");
    const $firstnameGroup = $("#registration .form-group").first();
    const registrationSubmitHandler = validate.eventHandler.registrationSubmit;
    let fakeEvt;
    beforeEach(function () {
        fakeEvt = {
            preventDefault: function fakePreventDefault() {}
        };
    });
    describe("avoiding errors", function () {
        it("doesn't throw an error", function () {
            expect(function () {
                registrationSubmitHandler(fakeEvt);
            }).to.not.throw("Cannot read property 'trim' of undefined");
        });
        it("doesn't call preventDefault when no fields have a warning", function () {
            chai.spy.on(fakeEvt, "preventDefault");
            $(".form-group .check").val("test value");
            $(".inputstatus .warning").removeClass("warning");
            $("#terms").prop("checked", true);
            registrationSubmitHandler(fakeEvt);
            expect(fakeEvt.preventDefault).to.not.have.been.called();
        });
        it("calls preventDefault when a field has a warning", function () {
            chai.spy.on(fakeEvt, "preventDefault");
            $(".form-group .check").val("test value");
            $(".inputstatus .warning").removeClass("warning");
            $(".inputstatus .error").eq(0).addClass("warning");
            $("#terms").prop("checked", true);
            registrationSubmitHandler(fakeEvt);
            expect(fakeEvt.preventDefault).to.have.been.called();
        });
    });
    describe("firstname is empty", function () {
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
                expect($firstnameError.html()).to.equal("First Name is empty !");
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
describe("registration reset", function () {
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
