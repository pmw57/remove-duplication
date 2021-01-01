const registration = (function makeRegistration() {
    const validatorConfig = {
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
            regex: /^\(?([0-9]{4})\)?[\u0020.\-]?([0-9]{3})[\u0020.\-]?([0-9]{4})$/,
            error: "Please enter Phone Number correctly"
        },
        isEmail: {
            regex: /^([\w\-.]+@([\w\-]+\.)+[\w\-]{2,4})?$/,
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
            shouldMatch: false,
            error: "Password shouldn't match first-name"
        },
        differentThanLastname: {
            fieldname: "Last Name",
            shouldMatch: false,
            error: "Password shouldn't match last-name"
        },
        differentThanCity: {
            fieldname: "Your City",
            shouldMatch: false,
            error: "Password shouldn't match city name"
        },
        matchesPassword: {
            fieldname: "Password",
            error: "Password doesn't match retyped pwd"
        }
    };
    function validateFields(inputGroup) {
        function createMatcher(validatorName) {
            const config = validatorConfig[validatorName];
            return validate.createMatcher(config);
        }
        const nameValidationConfig = [
            validate.fn.hasContent,
            createMatcher("lessThanTwentyChars"),
            createMatcher("moreThanOneChar"),
            createMatcher("onlyAlphaChars")
        ];
        const validators = {
            "First Name": nameValidationConfig,
            "Last Name": nameValidationConfig,
            "Phone Number": [
                validate.fn.hasContent,
                createMatcher("isPhoneNumber")
            ],
            "E-mail": [
                validate.fn.hasContent,
                createMatcher("isEmail")
            ],
            "Postal Address": [
                validate.fn.hasContent,
                createMatcher("postalAddress")
            ],
            "zip code": [
                validate.fn.hasContent,
                createMatcher("postcode")
            ],
            "Your City": [
                validate.fn.hasContent
            ],
            "Password": [
                validate.fn.hasContent,
                createMatcher("differentThanFirstname"),
                createMatcher("differentThanLastname"),
                createMatcher("differentThanCity"),
                validate.fn.passwordAtLeastSix,
                validate.fn.passwordBelowThirteen
            ],
            "Retype Password": [
                validate.fn.hasContent,
                createMatcher("matchesPassword")
            ]
        };

        const $formGroup = $(inputGroup).closest(".form-group");
        return validate.check($formGroup, validators);
    }
    function updateTerms() {
        const $termsGroup = $(".form-group").has("#terms");
        const $terms = $termsGroup.find("#terms");
        if ($terms.is(":checked")) {
            inputStatus.ok($termsGroup);
        } else {
            inputStatus.warning($termsGroup);
        }
    }
    function removeTermWarning() {
        const $termsGroup = $("#terms").closest(".form-group");
        inputStatus.ok($termsGroup);
        inputStatus.feedbackNone($termsGroup);
    }
    function selectAndValidate(listItem) {
        const $form = $(listItem).closest("form");
        const $cityField = $form.find("[name='Your City']");
        const $cityGroup = $cityField.closest(".form-group");
        const value = $(listItem).text().trim();
        $cityField.val(value);
        $("#citylist").collapse("hide");

        validate.check($cityGroup, {
            "Your City": [validate.fn.hasContent]
        });
    }
    function registrationInputHandler(evt) {
        validateFields(evt.target);
    }
    function citylistClickHandler(evt) {
        selectAndValidate(evt.target);
    }
    function termsClickHandler() {
        updateTerms();
    }
    function registrationResetHandler() {
        inputStatus.resetForm($("#registration"), validate.fn.getName);
        removeTermWarning();
    }
    function registrationSubmitHandler(evt) {
        validate.checkFormEmpty("#registration");
        updateTerms();
        if ($("#registration .warning").length > 0) {
            evt.preventDefault();
        }
    }

    $(".input-group").on("input", registrationInputHandler);
    $(".citylist").click(citylistClickHandler);
    $("#terms").click(termsClickHandler);
    $("#registration").on("reset", registrationResetHandler);
    $("#registration").on("submit", registrationSubmitHandler);

    return {
        eventHandler: {
            registrationInput: registrationInputHandler,
            citylistClick: citylistClickHandler,
            termsClick: termsClickHandler,
            registrationReset: registrationResetHandler,
            registrationSubmit: registrationSubmitHandler
        }
    };
}());