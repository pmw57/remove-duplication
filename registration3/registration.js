const registration = (function() {
    $(".icon").click(function() {
        $(".bar1").toggleClass("blue");
        $(".bar1").toggleClass("rotate45dg");
        $(".bar2").toggleClass("opacity");
        $(".bar3").toggleClass("rotate-45dg");
    });

    $("#myBtn").click(function() {
        $("#myModal").modal();
    });

    function citylistClickHandler() {
        const $form = $(this).closest("form");
        const $inputField = $form.find("[name='Your City']");
        const $cityGroup = $inputField.closest(".form-group");
        const value = $(this).text().trim();
        $inputField.val(value);
        $("#citylist").collapse("hide");

        validate.check($cityGroup, {
            "Your City": [validate.fn.checkEmpty]
        });
    }
    $(".citylist li").click(citylistClickHandler);

    function registrationInputHandler(evt) {
        const validators = {
            lessThanTwentyChars: {
                regex: /^.{1,19}$/,
                error: "Please enter no more than 19 char"
            },
            moreThanOneChar: {
                regex: /^.{2,}$/,
                error: "Please enter 2 upper case or lower case at least"
            },
            onlyAlphaChars: {
                regex: /^([a-zA-Z]{1,})+$/,
                error: "Please enter upper case and lower case only"
            },
            isPhoneNumber: {
                regex: /^\(?([0-9]{4})\)?([ .-]?)([0-9]{3})\2([0-9]{4})$/,
                error: "Please enter Phone Number correctly"
            },
            isEmail: {
                regex: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
                error: "Please enter it correctly"
            },
            postalAddress: {
                regex: /^\d+\s[A-z]+\s[A-z]+/g,
                error: "Please enter Address correctly"
            },
            postcode: {
                regex: /^[a-zA-Z]{1,2}([0-9]{1,2}|[0-9][a-zA-Z])\s*[0-9][a-zA-Z]{2}$/,
                error: "Please enter Post-code correctly"
            },
            differentThanFirstname: {
                fieldname: "First Name",
                error: "Password shouldn't match first-name"
            },
            differentThanLastname: {
                fieldname: "Last Name",
                error: "Password shouldn't match last-name"
            },
            differentThanCity: {
                fieldname: "Your City",
                error: "Password shouldn't match city name"
            },
            passwordAtLeastSix: {
                regex: /^([a-zA-Z0-9]{6,})+$/,
                error: "Please enter at least 6 characters"
            },
            passwordBelowThirteen: {
                regex: /^[a-zA-Z0-9]{1,12}$/,
                error: "Please enter no more than 12 characters"
            },
            matchesPassword: {
                fieldname: "Password",
                error: "Password doesn't match retyped pwd"
            }
        };

        function createMatcher(validatorName) {
            const validatorConfig = validators[validatorName];
            return validate.createMatcher(validatorConfig);
        }
        function createNomatcher(validatorName) {
            const validatorConfig = validators[validatorName];
            return validate.createNomatcher(validatorConfig);
        }

        const $formGroup = $(this).closest(".form-group");
        return validate.check($formGroup, {
            "First Name": [
                validate.fn.checkEmpty,
                validate.fn.checkFake,
                createMatcher("lessThanTwentyChars"),
                createMatcher("moreThanOneChar"),
                createMatcher("onlyAlphaChars")
            ],
            "Last Name": [
                validate.fn.checkEmpty,
                validate.fn.checkFake,
                createMatcher("lessThanTwentyChars"),
                createMatcher("moreThanOneChar"),
                createMatcher("onlyAlphaChars")

            ],
            "Phone Number": [
                validate.fn.checkEmpty,
                createMatcher("isPhoneNumber")
            ],
            "E-mail": [
                validate.fn.checkEmpty,
                validate.fn.checkFake,
                createMatcher("isEmail")
            ],
            "Postal Address": [
                validate.fn.checkEmpty,
                createMatcher("postalAddress")
            ],
            "zip code": [
                validate.fn.checkEmpty,
                createMatcher("postcode")
            ],
            "Your City": [
                validate.fn.checkEmpty
            ],
            "Password": [
                validate.fn.checkEmpty,
                validate.fn.checkFake,
                createNomatcher("differentThanFirstname"),
                createNomatcher("differentThanLastname"),
                createNomatcher("differentThanCity"),
                createMatcher("passwordAtLeastSix"),
                createMatcher("passwordBelowThirteen")
            ],
            "Retype Password": [
                validate.fn.checkEmpty,
                createMatcher("matchesPassword")
            ]
        });
    }
    $('.input-group').on('focusin focusout input', registrationInputHandler);

    function updateTerms() {
        const $termsGroup = $(".form-group").has("#terms");
        const $terms = $termsGroup.find("#terms");
        if ($terms.is(":checked")) {
            inputStatus.setOk($termsGroup.find(".error2"));
            inputStatus.requiredOk($termsGroup);
        } else {
            inputStatus.setWarning($termsGroup.find(".error2"));
            inputStatus.requiredWarning($termsGroup);
        }
    }

    function termsClickHandler() {
        updateTerms();
    }
    $('#terms').click(termsClickHandler);

    function registrationSubmitHandler(evt) {
        validate.checkFormEmpty("#registration");
        updateTerms();
        if ($("#registration .warning").length !== 0) {
            evt.preventDefault();
        }
    }
    $("#registration").on("submit", registrationSubmitHandler);

    function resetMessages() {
        const $error = $(this).find(".error");
        const name = $(this).find(".check").attr("name");
        inputStatus.errorOk(this, name);
        inputStatus.feedbackNone(this);
        inputStatus.requiredOk(this);
    }

    function removeTermWarning() {
        const $termsGroup = $("#terms").closest(".form-group");
        inputStatus.feedbackNone($termsGroup);
        inputStatus.setOk($termsGroup.find("#termcheck"));
        inputStatus.requiredOk($termsGroup);
    }

    function registrationResetHandler(evt) {
        $(".form-group").each(resetMessages);
        removeTermWarning();
    }
    $("#registration").on("reset", registrationResetHandler);

    return {
        eventHandler: {
            registrationInput: registrationInputHandler,
            registrationSubmit: registrationSubmitHandler,
            registrationReset: registrationResetHandler,
            citylistClick: citylistClickHandler,
            termsClick: termsClickHandler
        }
    };
}());