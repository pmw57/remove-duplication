describe("registration submit", function () {
    let fakeEvt;
    function registrationSubmitHandler(fakeEvt) {
        const submitHandler = registration.eventHandler.registrationSubmit;
        submitHandler(fakeEvt);
    }
    beforeEach(function () {
        fakeEvt = {
            preventDefault: function fakePreventDefault() {}
        };
    });
    after(function () {
        $("#registration").trigger("reset");
    });
    describe("avoiding errors", function () {
        it("doesn't throw a trim error", function () {
            expect(function () {
                registrationSubmitHandler(fakeEvt);
            }).to.not.throw("Cannot read property 'trim' of undefined");
        });
        it("doesn't preventDefault", function () {
            chai.spy.on(fakeEvt, "preventDefault");
            $(".form-group input.check").val("test value");
            $(".form-group textarea").val("test value");
            $(".form-group .warning").removeClass("warning");
            $("#terms").prop("checked", true);
            registrationSubmitHandler(fakeEvt);
            expect(fakeEvt.preventDefault).to.not.have.been.called();
        });
        it("calls preventDefault", function () {
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
