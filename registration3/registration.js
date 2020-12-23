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
                regex: /^([a-zA-Z0-9]{13,})+$/,
                error: "Please enter no more than 12 characters"
            },
            matchesPassword: {
                fieldname: "Password",
                error: "Password doesn't match retyped pwd"
            }
        };
        function createValidator(validatorName) {
            const fn = function regexValidator(input) {
                return validate.checkRx(validators[validatorName].regex, input);
            };
            const errorMessage = validators[validatorName].error;
            return validate.createValidator(fn, errorMessage);
        }
        const checkLessThanTwentyChars = createValidator("lessThanTwentyChars");
        const checkMoreThanOneChar = validate.createValidator(
            function(input) {
                const value = input.value;
                return validate.checkRx(/^.{2,}$/, input);
            }, "Please enter 2 upper case or lower case at least"
        );
        const checkOnlyAlphaChars = validate.createValidator(
            function(input) {
                return validate.checkRx(/^([a-zA-Z]{1,})+$/, input);
            }, "Please enter upper case and lower case only"
        );
        const checkIsPhoneNumber = validate.createValidator(
            function(input) {
                return validate.checkRx(/^\(?([0-9]{4})\)?([ .-]?)([0-9]{3})\2([0-9]{4})$/, input);
            }, "Please enter Phone Number correctly"
        );
        const checkIsEmail = validate.createValidator(
            function(input) {
                return validate.checkRx(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, input);
            }, "Please enter it correctly"
        );
        const checkPostalAddress = validate.createValidator(
            function(input) {
                return validate.checkRx(/^\d+\s[A-z]+\s[A-z]+/g, input);
            }, "Please enter Address correctly"
        );
        const checkPostcode = validate.createValidator(
            function(input) {
                return validate.checkRx(/^[a-zA-Z]{1,2}([0-9]{1,2}|[0-9][a-zA-Z])\s*[0-9][a-zA-Z]{2}$/, input);
            }, "Please enter Post-code correctly"
        );
        const checkDifferentThanFirstname = validate.createValidator(
            function(input) {
                return !validate.fieldMatch("First Name", input);
            }, "Password shouldn't match first-name"
        );
        const checkDifferentThanLastname = validate.createValidator(
            function(input) {
                return !validate.fieldMatch("Last Name", input);
            }, "Password shouldn't match last-name"
        );
        const checkDifferentThanCity = validate.createValidator(
            function(input) {
                return !validate.fieldMatch("Your City", input);
            }, "Password shouldn't match city name"
        );
        const checkPasswordAtLeastSix = validate.createValidator(
            function(input) {
                var pswReglow = /^([a-zA-Z0-9]{6,})+$/;
                return pswReglow.test(input.value);
            }, "Please enter at least 6 characters"
        );
        const checkPasswordBelowThirteen = validate.createValidator(
            function(input) {
                var pswRegheigh = /^([a-zA-Z0-9]{13,})+$/;
                return !pswRegheigh.test(input.value);
            }, "Please enter no more than 12 characters"
        );
        const checkMatchesPassword = validate.createValidator(
            function(input) {
                return validate.fieldMatch("Password", input);
            }, "Password doesn't match retyped pwd"
        );

        const $formGroup = $(this).closest(".form-group");
        return validate.check($formGroup, {
            "First Name": [
                validate.fn.checkEmpty,
                validate.fn.checkFake,
                checkLessThanTwentyChars,
                checkMoreThanOneChar,
                checkOnlyAlphaChars
            ],
            "Last Name": [
                validate.fn.checkEmpty,
                validate.fn.checkFake,
                checkLessThanTwentyChars,
                checkMoreThanOneChar,
                checkOnlyAlphaChars
            ],
            "Phone Number": [
                validate.fn.checkEmpty,
                checkIsPhoneNumber
            ],
            "E-mail": [
                validate.fn.checkEmpty,
                validate.fn.checkFake,
                checkIsEmail
            ],
            "Postal Address": [
                validate.fn.checkEmpty,
                checkPostalAddress
            ],
            "zip code": [
                validate.fn.checkEmpty,
                checkPostcode
            ],
            "Your City": [
                validate.fn.checkEmpty
            ],
            "Password": [
                validate.fn.checkEmpty,
                validate.fn.checkFake,
                checkDifferentThanFirstname,
                checkDifferentThanLastname,
                checkDifferentThanCity,
                checkPasswordAtLeastSix,
                checkPasswordBelowThirteen
            ],
            "Retype Password": [
                validate.fn.checkEmpty,
                checkMatchesPassword
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