function replaceClass(el, oldClass, newClass) {
    $(el).removeClass(oldClass).addClass(newClass);
}
function resetWarning($el) {
    replaceClass($el, "warning", "ok");
}
$(document)
    .ready(function () {
        $(".icon")
            .click(function () {
                $(".bar1")
                    .toggleClass("blue");
                $(".bar1")
                    .toggleClass("rotate45dg");
                $(".bar2")
                    .toggleClass("opacity");
                $(".bar3")
                    .toggleClass("rotate-45dg");
                
            });
        
        
        //  form
        // first name glyph
        
        $(".fst-name-glyph")
            .on("mouseenter", function () {
                $(".fst-name-glyph")
                    .css("background-color", "darkred");
                $(".fst-name-glyph")
                    .css("color", "orange");
            });
        $(".fst-name-glyph")
            .on("mouseleave", function () {
                $(".fst-name-glyph")
                    .css("background-color", "darkgreen");
                $(".fst-name-glyph")
                    .css("color", "yellow");
            });
        $(".fst-name-glyph")
            .on("mouseenter", function () {
                $(".fst-name-field")
                    .css("background-color", "pink");
            });
        $(".fst-name-glyph")
            .on("mouseleave", function () {
                $(".fst-name-field")
                    .css("background-color", "lightgreen");
            });
        
        // first name field
        
        $(".fst-name-field")
            .on("mouseenter", function () {
                $(".fst-name-glyph")
                    .css("background-color", "darkred");
                $(".fst-name-glyph")
                    .css("color", "orange");
            });
        $(".fst-name-field")
            .on("mouseleave", function () {
                $(".fst-name-glyph")
                    .css("background-color", "darkgreen");
                $(".fst-name-glyph")
                    .css("color", "yellow");
            });
        $(".fst-name-field")
            .on("mouseenter", function () {
                $(".fst-name-field")
                    .css("background-color", "pink");
            });
        $(".fst-name-field")
            .on("mouseleave", function () {
                $(".fst-name-field")
                    .css("background-color", "lightgreen");
            });
        
        // last name glyph
        
        $(".lst-name-glyph")
            .on("mouseenter", function () {
                $(".lst-name-glyph")
                    .css("background-color", "darkred");
                $(".lst-name-glyph")
                    .css("color", "orange");
            });
        $(".lst-name-glyph")
            .on("mouseleave", function () {
                $(".lst-name-glyph")
                    .css("background-color", "darkgreen");
                $(".lst-name-glyph")
                    .css("color", "yellow");
            });
        $(".lst-name-glyph")
            .on("mouseenter", function () {
                $(".lst-name-field")
                    .css("background-color", "pink");
            });
        $(".lst-name-glyph")
            .on("mouseleave", function () {
                $(".lst-name-field")
                    .css("background-color", "lightgreen");
            });
        
        // last name field
        
        $(".lst-name-field")
            .on("mouseenter", function () {
                $(".lst-name-glyph")
                    .css("background-color", "darkred");
                $(".lst-name-glyph")
                    .css("color", "orange");
            });
        $(".lst-name-field")
            .on("mouseleave", function () {
                $(".lst-name-glyph")
                    .css("background-color", "darkgreen");
                $(".lst-name-glyph")
                    .css("color", "yellow");
            });
        $(".lst-name-field")
            .on("mouseenter", function () {
                $(".lst-name-field")
                    .css("background-color", "pink");
            });
        $(".lst-name-field")
            .on("mouseleave", function () {
                $(".lst-name-field")
                    .css("background-color", "lightgreen");
            });
        
        // email glyph
        
        $(".email-glyph")
            .on("mouseenter", function () {
                $(".email-glyph")
                    .css("background-color", "darkred");
                $(".email-glyph")
                    .css("color", "orange");
            });
        $(".email-glyph")
            .on("mouseleave", function () {
                $(".email-glyph")
                    .css("background-color", "darkgreen");
                $(".email-glyph")
                    .css("color", "yellow");
            });
        $(".email-glyph")
            .on("mouseenter", function () {
                $(".email-field")
                    .css("background-color", "pink");
            });
        $(".email-glyph")
            .on("mouseleave", function () {
                $(".email-field")
                    .css("background-color", "lightgreen");
            });
        
        // email field
        
        $(".email-field")
            .on("mouseenter", function () {
                $(".email-glyph")
                    .css("background-color", "darkred");
                $(".email-glyph")
                    .css("color", "orange");
            });
        $(".email-field")
            .on("mouseleave", function () {
                $(".email-glyph")
                    .css("background-color", "darkgreen");
                $(".email-glyph")
                    .css("color", "yellow");
            });
        $(".email-field")
            .on("mouseenter", function () {
                $(".email-field")
                    .css("background-color", "pink");
            });
        $(".email-field")
            .on("mouseleave", function () {
                $(".email-field")
                    .css("background-color", "lightgreen");
            });
        
        // phone glyph
        
        $(".phone-glyph")
            .on("mouseenter", function () {
                $(".phone-glyph")
                    .css("background-color", "darkred");
                $(".phone-glyph")
                    .css("color", "orange");
            });
        $(".phone-glyph")
            .on("mouseleave", function () {
                $(".phone-glyph")
                    .css("background-color", "darkgreen");
                $(".phone-glyph")
                    .css("color", "yellow");
            });
        $(".phone-glyph")
            .on("mouseenter", function () {
                $(".phone-field")
                    .css("background-color", "pink");
            });
        $(".phone-glyph")
            .on("mouseleave", function () {
                $(".phone-field")
                    .css("background-color", "lightgreen");
            });
        
        // phone field
        
        $(".phone-field")
            .on("mouseenter", function () {
                $(".phone-glyph")
                    .css("background-color", "darkred");
                $(".phone-glyph")
                    .css("color", "orange");
            });
        $(".phone-field")
            .on("mouseleave", function () {
                $(".phone-glyph")
                    .css("background-color", "darkgreen");
                $(".phone-glyph")
                    .css("color", "yellow");
            });
        $(".phone-field")
            .on("mouseenter", function () {
                $(".phone-field")
                    .css("background-color", "pink");
            });
        $(".phone-field")
            .on("mouseleave", function () {
                $(".phone-field")
                    .css("background-color", "lightgreen");
            });
        
        // .phone2 glyph
        
        $(".phone2-glyph")
            .on("mouseenter", function () {
                $(".phone2-glyph")
                    .css("background-color", "darkred");
                $(".phone2-glyph")
                    .css("color", "orange");
            });
        $(".phone2-glyph")
            .on("mouseleave", function () {
                $(".phone2-glyph")
                    .css("background-color", "darkgreen");
                $(".phone2-glyph")
                    .css("color", "yellow");
            });
        $(".phone2-glyph")
            .on("mouseenter", function () {
                $(".phone2-field")
                    .css("background-color", "pink");
            });
        $(".phone2-glyph")
            .on("mouseleave", function () {
                $(".phone2-field")
                    .css("background-color", "lightgreen");
            });
        
        // .phone2 field
        
        $(".phone2-field")
            .on("mouseenter", function () {
                $(".phone2-glyph")
                    .css("background-color", "darkred");
                $(".phone2-glyph")
                    .css("color", "orange");
            });
        $(".phone2-field")
            .on("mouseleave", function () {
                $(".phone2-glyph")
                    .css("background-color", "darkgreen");
                $(".phone2-glyph")
                    .css("color", "yellow");
            });
        $(".phone2-field")
            .on("mouseenter", function () {
                $(".phone2-field")
                    .css("background-color", "pink");
            });
        $(".phone2-field")
            .on("mouseleave", function () {
                $(".phone2-field")
                    .css("background-color", "lightgreen");
            });
        
        // .address glyph
        
        $(".address-glyph")
            .on("mouseenter", function () {
                $(".address-glyph")
                    .css("background-color", "darkred");
                $(".address-glyph")
                    .css("color", "orange");
            });
        $(".address-glyph")
            .on("mouseleave", function () {
                $(".address-glyph")
                    .css("background-color", "darkgreen");
                $(".address-glyph")
                    .css("color", "yellow");
            });
        $(".address-glyph")
            .on("mouseenter", function () {
                $(".address-field")
                    .css("background-color", "pink");
            });
        $(".address-glyph")
            .on("mouseleave", function () {
                $(".address-field")
                    .css("background-color", "lightgreen");
            });
        
        // .address field
        
        $(".address-field")
            .on("mouseenter", function () {
                $(".address-glyph")
                    .css("background-color", "darkred");
                $(".address-glyph")
                    .css("color", "orange");
            });
        $(".address-field")
            .on("mouseleave", function () {
                $(".address-glyph")
                    .css("background-color", "darkgreen");
                $(".address-glyph")
                    .css("color", "yellow");
            });
        $(".address-field")
            .on("mouseenter", function () {
                $(".address-field")
                    .css("background-color", "pink");
            });
        $(".address-field")
            .on("mouseleave", function () {
                $(".address-field")
                    .css("background-color", "lightgreen");
            });
        
        // .zip glyph
        
        $(".zip-glyph")
            .on("mouseenter", function () {
                $(".zip-glyph")
                    .css("background-color", "darkred");
                $(".zip-glyph")
                    .css("color", "orange");
            });
        $(".zip-glyph")
            .on("mouseleave", function () {
                $(".zip-glyph")
                    .css("background-color", "darkgreen");
                $(".zip-glyph")
                    .css("color", "yellow");
            });
        $(".zip-glyph")
            .on("mouseenter", function () {
                $(".zip-field")
                    .css("background-color", "pink");
            });
        $(".zip-glyph")
            .on("mouseleave", function () {
                $(".zip-field")
                    .css("background-color", "lightgreen");
            });
        
        // .zip field
        
        $(".zip-field")
            .on("mouseenter", function () {
                $(".zip-glyph")
                    .css("background-color", "darkred");
                $(".zip-glyph")
                    .css("color", "orange");
            });
        $(".zip-field")
            .on("mouseleave", function () {
                $(".zip-glyph")
                    .css("background-color", "darkgreen");
                $(".zip-glyph")
                    .css("color", "yellow");
            });
        $(".zip-field")
            .on("mouseenter", function () {
                $(".zip-field")
                    .css("background-color", "pink");
            });
        $(".zip-field")
            .on("mouseleave", function () {
                $(".zip-field")
                    .css("background-color", "lightgreen");
            });
        // .city glyph
        
        $(".city-glyph")
            .on("mouseenter", function () {
                $(".city-glyph")
                    .css("background-color", "darkred");
                $(".city-glyph")
                    .css("color", "orange");
            });
        $(".city-glyph")
            .on("mouseleave", function () {
                $(".city-glyph")
                    .css("background-color", "darkgreen");
                $(".city-glyph")
                    .css("color", "yellow");
            });
        $(".city-glyph")
            .on("mouseenter", function () {
                $(".city-field")
                    .css("background-color", "pink");
            });
        $(".city-glyph")
            .on("mouseleave", function () {
                $(".city-field")
                    .css("background-color", "lightgreen");
            });
        
        // .city field
        
        $(".city-field")
            .on("mouseenter", function () {
                $(".city-glyph")
                    .css("background-color", "darkred");
                $(".city-glyph")
                    .css("color", "orange");
            });
        $(".city-field")
            .on("mouseleave", function () {
                $(".city-glyph")
                    .css("background-color", "darkgreen");
                $(".city-glyph")
                    .css("color", "yellow");
            });
        $(".city-field")
            .on("mouseenter", function () {
                $(".city-field")
                    .css("background-color", "pink");
            });
        $(".city-field")
            .on("mouseleave", function () {
                $(".city-field")
                    .css("background-color", "lightgreen");
            });
        // .pwd glyph
        $(".pwd-glyph")
            .on("mouseenter", function () {
                $(".pwd-glyph")
                    .css("background-color", "darkred");
                $(".pwd-glyph")
                    .css("color", "orange");
            });
        $(".pwd-glyph")
            .on("mouseleave", function () {
                $(".pwd-glyph")
                    .css("background-color", "darkgreen");
                $(".pwd-glyph")
                    .css("color", "yellow");
            });
        $(".pwd-glyph")
            .on("mouseenter", function () {
                $(".pwd-field")
                    .css("background-color", "pink");
            });
        $(".pwd-glyph")
            .on("mouseleave", function () {
                $(".pwd-field")
                    .css("background-color", "lightgreen");
            });
        
        // .pwd field
        
        $(".pwd-field")
            .on("mouseenter", function () {
                $(".pwd-glyph")
                    .css("background-color", "darkred");
                $(".pwd-glyph")
                    .css("color", "orange");
            });
        $(".pwd-field")
            .on("mouseleave", function () {
                $(".pwd-glyph")
                    .css("background-color", "darkgreen");
                $(".pwd-glyph")
                    .css("color", "yellow");
            });
        $(".pwd-field")
            .on("mouseenter", function () {
                $(".pwd-field")
                    .css("background-color", "pink");
            });
        $(".pwd-field")
            .on("mouseleave", function () {
                $(".pwd-field")
                    .css("background-color", "lightgreen");
            });
        // .re glyph
        $(".re-glyph")
            .on("mouseenter", function () {
                $(".re-glyph")
                    .css("background-color", "darkred");
                $(".re-glyph")
                    .css("color", "orange");
            });
        $(".re-glyph")
            .on("mouseleave", function () {
                $(".re-glyph")
                    .css("background-color", "darkgreen");
                $(".re-glyph")
                    .css("color", "yellow");
            });
        $(".re-glyph")
            .on("mouseenter", function () {
                $(".re-field")
                    .css("background-color", "pink");
            });
        $(".re-glyph")
            .on("mouseleave", function () {
                $(".re-field")
                    .css("background-color", "lightgreen");
            });
        
        // .re field
        
        $(".re-field")
            .on("mouseenter", function () {
                $(".re-glyph")
                    .css("background-color", "darkred");
                $(".re-glyph")
                    .css("color", "orange");
            });
        $(".re-field")
            .on("mouseleave", function () {
                $(".re-glyph")
                    .css("background-color", "darkgreen");
                $(".re-glyph")
                    .css("color", "yellow");
            });
        $(".re-field")
            .on("mouseenter", function () {
                $(".re-field")
                    .css("background-color", "pink");
            });
        $(".re-field")
            .on("mouseleave", function () {
                $(".re-field")
                    .css("background-color", "lightgreen");
            });
        // form end 
        
         /* modal call */ 
        $("#myBtn")
            .click(function () {
                $("#myModal").modal();
            });
        
       /* input with  dropdown */ 
        $(".citylist li").click(function () {
                //var city = $(this).find("citylist").text().trim();
				var city = $(this).text().trim();
                var name = $("#your-city").attr("name");
                //alert(city);
                $("#your-city").val(city);
                $("#demo2").collapse("hide");
            /**/    if ( city != "") {
                
                        $(".form-group")
                            //.next()
                            .find("#errorid")
                            .html(name + " is OK: Your data has been entered correctly");
                        $(".form-group")
                            //.next()
                            .find("#errorid")
                            .addClass('ok')
                            .removeClass('warning');
                        $(".form-group")
                            //.next()
                            .find("#feedbackid")
                            .removeClass("glyphicon glyphicon-remove")
                            .addClass("glyphicon glyphicon-ok")
                            .removeClass("warning")
                            .addClass("ok");
                        $(".form-group")
                            //.next()
                            .find("#cityRequired")
                            .addClass('ok')
                            .removeClass('warning');    
                    } else {
                        $(".form-group")
                            //.next()
                            .find("#errorid")
                            .html("Your " + name + " field is Empty !")
                            .removeClass("ok")
                            .addClass("warning");
                        $(".form-group")
                            //.next()
                            .find("#feedbackid")
                            .removeClass("glyphicon glyphicon-ok")
                            .addClass("glyphicon glyphicon-remove")
                            .removeClass("ok")
                            .addClass("warning");
                        $(".form-group")
                            //.next()
                            .find("#cityRequired")
                            .removeClass("ok")
                            .addClass("warning");   
                    }
                
            });
        
        
        
        $('.input-group')
            .on('focusin focusout input', function () {
                console.log('cnanged');
                var name = $(this)
                    .find(".check,textarea")
                    .attr("name");
                var value = $(this)
                    .find(".check,textarea")
                    .val()
                    .trim();
                
                var fakeReg = /(.)\1{2,}/;
                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                var pswReglow = /^([a-zA-Z0-9]{6,})+$/;
                var pswRegheigh = /^([a-zA-Z0-9]{13,})+$/; //13 or more occurences
                /*  */
                var $form = $("form.register");
                var inputs = $form[0].elements;
                /* The regex for ensuring that letters aren’t used, can just be a simple regex for numbers and separators.
/^[0-9 .-]+$/ */
                
                /* first name */
                if (value === "") {
                    $(this)
                        .next()
                        .find(".error")
                        .html("Your " + name + " field is Empty !")
                        .removeClass("ok")
                        .addClass("warning");
					 
                    $(this)
                        .next()
                        .find(".feedback")
                        .removeClass("glyphicon glyphicon-ok")
                        .addClass("glyphicon glyphicon-remove")
                        .removeClass("ok")
                        .addClass("warning");
                    if (name === "First Name") {
                        $("#fnameRequired")
                            .removeClass("ok")
                            .addClass("warning");
                     }  
                    if (name === "Last Name") {
                        $("#lnameRequired")
                            .removeClass("ok")
                            .addClass("warning");
                    }   
                    // $(this).find(".starrq").removeClass("ok").addClass("warning");
                    
                } else {
                    //$(this).next().find(".error").html("Your "+name+" field is OK !").removeClass("warning").addClass("ok");
                    //$(this).next().find(".feedback").removeClass("glyphicon glyphicon-remove").addClass("glyphicon glyphicon-ok").removeClass("warning").addClass("ok");
                    
                    
                    /* first name */
                    if (name === "First Name") {
                        if (value.length > 19) {
                            // condition for more than 19 char
                            $(this)
                                .next()
                                .find(".error")
                                .html(name + " is Incorrect: Please enter no more than 19 char ");
                            $(this)
                                .next()
                                .find(".error")
                                .addClass('warning')
                                .removeClass('ok');
                            $(this)
                                .next()
                                .find(".feedback")
                                .removeClass("glyphicon glyphicon-ok")
                                .addClass("glyphicon glyphicon-remove")
                                .removeClass("ok")
                                .addClass("warning");
                            $("#fnameRequired")
                                .removeClass("ok")
                                .addClass("warning");   
                            //$(this).css("border","2px solid red");
                                
                        } else {
                        
                            if (fakeReg.test(value)) {
                                $(this)
                                    .next()
                                    .find(".error")
                                    .html(name + " is Fake text: Please remove repetition ");
                                $(this)
                                    .next()
                                    .find(".feedback")
                                    .removeClass("glyphicon glyphicon-ok")
                                    .addClass("glyphicon glyphicon-remove")
                                    .removeClass("ok")
                                    .addClass("warning");
                                $(this)
                                    .next()
                                    .find(".error")
                                    .addClass('warning')
                                    .removeClass('ok');
                                $("#fnameRequired")
                                    .removeClass("ok")
                                    .addClass("warning");   
                                //$(this).css("border","2px solid red");
                            } else {
                                if (/^([a-zA-Z]{2,16})+$/.test(value) === true) {
                                    $(this)
                                        .next()
                                        .find(".error")
                                        .html(name + " is OK: Your data has been entered correctly");
                                    $(this)
                                        .next()
                                        .find(".error")
                                        .addClass('ok')
                                        .removeClass('warning');
                                    $(this)
                                        .next()
                                        .find(".feedback")
                                        .removeClass("glyphicon glyphicon-remove")
                                        .addClass("glyphicon glyphicon-ok")
                                        .removeClass("warning")
                                        .addClass("ok");
                                    $("#fnameRequired")
                                        .removeClass("warning")
                                        .addClass("ok");    
                                } else {
                                    
                                    if (/^([a-zA-Z]{1,16})+$/.test(value) === true) {
                                        // condition for less than 2 char
                                        $(this)
                                            .next()
                                            .find(".error")
                                            .html(name + " is Incorrect: Please enter 2 upper case or lower case at least ");
                                        $(this)
                                            .next()
                                            .find(".error")
                                            .addClass('warning')
                                            .removeClass('ok');
                                        $(this)
                                            .next()
                                            .find(".feedback")
                                            .removeClass("glyphicon glyphicon-ok")
                                            .addClass("glyphicon glyphicon-remove")
                                            .removeClass("ok")
                                            .addClass("warning");
                                        $("#fnameRequired")
                                            .removeClass("ok")
                                            .addClass("warning");   
                                        //$(this).css("border","2px solid red");
                                    } else {
                                        // condition for non a to z
                                        $(this)
                                            .next()
                                            .find(".error")
                                            .html(name + " is Incorrect: Please enter upper case and lower case only ");
                                        $(this)
                                            .next()
                                            .find(".error")
                                            .addClass('warning')
                                            .removeClass('ok');
                                        $(this)
                                            .next()
                                            .find(".feedback")
                                            .removeClass("glyphicon glyphicon-ok")
                                            .addClass("glyphicon glyphicon-remove")
                                            .removeClass("ok")
                                            .addClass("warning");
                                        $("#fnameRequired")
                                            .removeClass("ok")
                                            .addClass("warning");   
                                        //$(this).css("border","2px solid red");
                                    }
                                    
                                    //if (value.length > 16) {
                                    //    $(this).next().find(".error").html(name + " is Incorrect: Please enter no more then 16 char ");
                                    //       }
                                }
                            }
                        }
                    }
                    /* last name */
                    if (name === "Last Name") {
                        if (value.length > 19) {
                            // condition for more than 19 char
                            $(this)
                                .next()
                                .find(".error")
                                .html(name + " is Incorrect: Please enter no more than 19 char ");
                            $(this)
                                .next()
                                .find(".error")
                                .addClass('warning')
                                .removeClass('ok');
                            $(this)
                                .next()
                                .find(".feedback")
                                .removeClass("glyphicon glyphicon-ok")
                                .addClass("glyphicon glyphicon-remove")
                                .removeClass("ok")
                                .addClass("warning");
                            $("#lnameRequired")
                                .removeClass("ok")
                                .addClass("warning");   
                            //$(this).css("border","2px solid red");
                        } else {
                            if (fakeReg.test(value)) {
                                $(this)
                                    .next()
                                    .find(".error")
                                    .html(name + " is Fake text: Please remove repetition ");
                                $(this)
                                    .next()
                                    .find(".feedback")
                                    .removeClass("glyphicon glyphicon-ok")
                                    .addClass("glyphicon glyphicon-remove")
                                    .removeClass("ok")
                                    .addClass("warning");
                                $(this)
                                    .next()
                                    .find(".error")
                                    .addClass('warning')
                                    .removeClass('ok');
                                $("#lnameRequired")
                                    .removeClass("ok")
                                    .addClass("warning");   
                                //$(this).css("border","2px solid red");
                            } else {
                                if (/^([a-zA-Z]{2,16})+$/.test(value) === true) {
                                    $(this)
                                        .next()
                                        .find(".error")
                                        .html(name + " is OK: Your data has been entered correctly");
                                    $(this)
                                        .next()
                                        .find(".error")
                                        .addClass('ok')
                                        .removeClass('warning');
                                    $(this)
                                        .next()
                                        .find(".feedback")
                                        .removeClass("glyphicon glyphicon-remove")
                                        .addClass("glyphicon glyphicon-ok")
                                        .removeClass("warning")
                                        .addClass("ok");
                                    $("#lnameRequired")
                                        .removeClass("warning")
                                        .addClass("ok");    
                                } else {
                                    
                                    if (/^([a-zA-Z]{1,16})+$/.test(value) === true) {
                                        // condition for less than 2 char
                                        $(this)
                                            .next()
                                            .find(".error")
                                            .html(name + " is Incorrect: Please enter 2 upper case or lower case at least ");
                                        $(this)
                                            .next()
                                            .find(".error")
                                            .addClass('warning')
                                            .removeClass('ok');
                                        $(this)
                                            .next()
                                            .find(".feedback")
                                            .removeClass("glyphicon glyphicon-ok")
                                            .addClass("glyphicon glyphicon-remove")
                                            .removeClass("ok")
                                            .addClass("warning");
                                        $("#lnameRequired")
                                            .removeClass("ok")
                                            .addClass("warning");   
                                        //$(this).css("border","2px solid red");
                                    } else {
                                        // condition for non a to z
                                        $(this)
                                            .next()
                                            .find(".error")
                                            .html(name + " is Incorrect: Please enter upper case and lower case only ");
                                        $(this)
                                            .next()
                                            .find(".error")
                                            .addClass('warning')
                                            .removeClass('ok');
                                        $(this)
                                            .next()
                                            .find(".feedback")
                                            .removeClass("glyphicon glyphicon-ok")
                                            .addClass("glyphicon glyphicon-remove")
                                            .removeClass("ok")
                                            .addClass("warning");
                                        $("#lnameRequired")
                                            .removeClass("ok")
                                            .addClass("warning");   
                                        //$(this).css("border","2px solid red");
                                    }
                                    
                                    //if (value.length > 16) {
                                    //    $(this).next().find(".error").html(name + " is Incorrect: Please enter no more then 16 char ");
                                    //       }
                                }
                            }
                        }
                    }
                    
                }
                /* Phone number */
                var inputstr = value;
                if (name === "Phone Number") {
                    if (inputstr.length > 0) {
                        //var inputstr = $(this).val();
                        var phoneReg =/^\(?([0-9]{4})\)?([ .-]?)([0-9]{3})\2([0-9]{4})$/;
                        if (!phoneReg.test(inputstr)) {
                            // email
                            $(this)
                                .next()
                                .find(".error")
                                .html(name + " is Incorrect: Please enter Phone Number correctly ");
                            $(this)
                                .next()
                                .find(".error")
                                .addClass('warning')
                                .removeClass('ok');
                            $(this)
                                .next()
                                .find(".feedback")
                                .removeClass("glyphicon glyphicon-ok")
                                .addClass("glyphicon glyphicon-remove")
                                .removeClass("ok")
                                .addClass("warning");
                            $("#phoneRequired")
                                .removeClass("ok")
                                .addClass("warning");   
                            //$(this).css("border","2px solid red");
                        } else {
                            $(this)
                                .next()
                                .find(".error")
                                .html(name + " is Ok : Your Phone number has been entered correctly ");
                            $(this)
                                .next()
                                .find(".error")
                                .addClass('ok')
                                .removeClass('warning');
                            $(this)
                                .next()
                                .find(".feedback")
                                .removeClass("glyphicon glyphicon-remove")
                                .addClass("glyphicon glyphicon-ok")
                                .removeClass("warning")
                                .addClass("ok");
                            $("#phoneRequired")
                                .removeClass("warning")
                                .addClass("ok");    
                            //$(this).css("border","2px solid green");
                            //$(this).css("border","2px solid green");
                        }
                    } else {
                        $(this)
                            .next()
                            .find(".error")
                            .html(name + " is EMPTY: Please enter data into this input");
                        $(this)
                            .next()
                            .find(".error")
                            .addClass('warning')
                            .removeClass('ok');
                        $(this)
                            .next()
                            .find(".feedback")
                            .removeClass("glyphicon glyphicon-ok")
                            .addClass("glyphicon glyphicon-remove")
                            .removeClass("ok")
                            .addClass("warning");
                        $("#phoneRequired")
                            .removeClass("ok")
                            .addClass("warning");   
                        //$(this).css("border","2px solid red");
                    }
                }
                /* email */
                
                //var emailName = (email) => E-mail.split("@")[0];
            if (name === "E-mail") { 
                        if (value != "") {
                           //$(this).next().find(".error").html(name+'  is ok').removeClass("warning").addClass("ok");
                           //$(this).next().find(".feedback").removeClass("glyphicon glyphicon-remove").addClass("glyphicon glyphicon-ok").removeClass("warning").addClass("ok");
                          
                          if(fakeReg.test(value)) {
                                $(this).next().find(".error").html(name + " is Fake text: Please remove repetition ");
                                $(this).next().find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
                                $(this).next().find(".error").addClass('warning').removeClass('ok');
                                $("#emailRequired").removeClass("ok").addClass("warning");
                                //$(this).css("border","2px solid red");
                                } else {
                               if(emailReg.test(value)) {
                                    $(this).next().find(".error").html(name + " is Ok : Your data has been entered correctly ");
                                    $(this).next().find(".error").addClass('ok').removeClass('warning');
                                    $(this).next().find(".feedback").removeClass("glyphicon glyphicon-remove").addClass("glyphicon glyphicon-ok").removeClass("warning").addClass("ok");
                                    $("#emailRequired").removeClass("warning").addClass("ok");
                                    //$(this).css("border","2px solid green");
                               
                               } else {
                                    $(this).next().find(".error").html(name + " is Incorrect: Please enter it correctly ").removeClass('ok').addClass('warning');
                                    $(this).next().find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
                                    $("#emailRequired").removeClass("ok").addClass("warning");
                                    
                                        }
                                                    }
                            } else {    
                               $(this).next().find(".error").html(name+' is empty ').removeClass("ok").addClass("warning"); 
                               $(this).next().find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
                               $("#emailRequired").removeClass("ok").addClass("warning");
                            }

                    } 
                //var emailName = (email) => E-mail.split("@")[0];
             
               /* address */
                if (name === "Postal Address") {
                    if (value.length > 0) {
                        //var value = $(this).val();
                        // var AddressReg =  /^[#.0-9a-zA-Z\s,-]+$/ ;
                        var AddressReg = /^\d+\s[A-z]+\s[A-z]+/g;
                        if (!AddressReg.test(value)) {
                            // address
                            $(this)
                                .next()
                                .find(".error")
                                .html(name + " is Incorrect: Please enter Address correctly ");
                            $(this)
                                .next()
                                .find(".error")
                                .addClass('warning')
                                .removeClass('ok');
                            $(this)
                                .next()
                                .find(".feedback")
                                .removeClass("glyphicon glyphicon-ok")
                                .addClass("glyphicon glyphicon-remove")
                                .removeClass("ok")
                                .addClass("warning");
                            $("#postalRequired")
                                .removeClass("ok")
                                .addClass("warning");   
                            //$(this).css("border","2px solid red");
                        } else {
                            $(this)
                                .next()
                                .find(".error")
                                .html(name + " is Ok : Your data has been entered correctly ");
                            $(this)
                                .next()
                                .find(".error")
                                .addClass('ok')
                                .removeClass('warning');
                            $(this)
                                .next()
                                .find(".feedback")
                                .removeClass("glyphicon glyphicon-remove")
                                .addClass("glyphicon glyphicon-ok")
                                .removeClass("warning")
                                .addClass("ok");
                            $("#postalRequired")
                                .removeClass("warning")
                                .addClass("ok");    
                            //$(this).css("border","2px solid green");
                        }
                    } else {
                        $(this)
                            .next()
                            .find(".error")
                            .html(name + " is EMPTY: Please enter data into this input");
                        $(this)
                            .next()
                            .find(".error")
                            .addClass('warning')
                            .removeClass('ok');
                        $(this)
                            .next()
                            .find(".feedback")
                            .removeClass("glyphicon glyphicon-ok")
                            .addClass("glyphicon glyphicon-remove")
                            .removeClass("ok")
                            .addClass("warning");
                        $("#postalRequired")
                            .removeClass("ok")
                            .addClass("warning");   
                        //$(this).css("border","2px solid red");
                    }
                }
                /* postcode  */
                if (name === "zip code") {
                    if (value.length > 0) {
                        //var inputstr = $(this).val();
                        //var PostcodeReg = /^[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}+$/g;
                        var PostcodeReg = /^[a-zA-Z]{1,2}([0-9]{1,2}|[0-9][a-zA-Z])\s*[0-9][a-zA-Z]{2}$/;
                        if (!PostcodeReg.test(value)) {
                            //post-code
                            $(this)
                                .next()
                                .find(".error")
                                .html(name + " is Incorrect: Please enter Post-code correctly ");
                            $(this)
                                .next()
                                .find(".error")
                                .addClass('warning')
                                .removeClass('ok');
                            $(this)
                                .next()
                                .find(".feedback")
                                .removeClass("glyphicon glyphicon-ok")
                                .addClass("glyphicon glyphicon-remove")
                                .removeClass("ok")
                                .addClass("warning");
                            $("#zipRequired")
                                .removeClass("ok")
                                .addClass("warning");   
                            //$(this).css("border","2px solid red");
                        } else {
                            $(this)
                                .next()
                                .find(".error")
                                .html(name + " is Ok : Your data has been entered correctly ");
                            $(this)
                                .next()
                                .find(".error")
                                .addClass('ok')
                                .removeClass('warning');
                            $(this)
                                .next()
                                .find(".feedback")
                                .removeClass("glyphicon glyphicon-remove")
                                .addClass("glyphicon glyphicon-ok")
                                .removeClass("warning")
                                .addClass("ok");
                            $("#zipRequired")
                                .removeClass("warning")
                                .addClass("ok");    
                            //$(this).css("border","2px solid green");
                        }
                    } else {
                        $(this)
                            .next()
                            .find(".error")
                            .html(name + " is EMPTY: Please enter data into this input");
                        $(this)
                            .next()
                            .find(".error")
                            .addClass('warning')
                            .removeClass('ok');
                        $(this)
                            .next()
                            .find(".feedback")
                            .removeClass("glyphicon glyphicon-ok")
                            .addClass("glyphicon glyphicon-remove")
                            .removeClass("ok")
                            .addClass("warning");
                        $("#zipRequired")
                            .removeClass("ok")
                            .addClass("warning");   
                        //$(this).css("border","2px solid red");
                    }
                    
                }
                /* city  */
                
                if (name === "Your City") {
                    //$("#demo2").collapse("hide");
                    if (value === "") {
                        $(this)
                            .next()
                            .find(".error")
                            .html("Your " + name + " field is Empty !")
                            .removeClass("ok")
                            .addClass("warning");
                        $(this)
                            .next()
                            .find(".feedback")
                            .removeClass("glyphicon glyphicon-ok")
                            .addClass("glyphicon glyphicon-remove")
                            .removeClass("ok")
                            .addClass("warning");
                        $("#cityRequired")
                            .removeClass("ok")
                            .addClass("warning");   
                        // $(this).find(".starrq").removeClass("ok").addClass("warning");
                        
                    } else {
                        
                        $(this)
                            .next()
                            .find(".error")
                            .html("Your " + name + " field is OK !")
                            .removeClass("warning")
                            .addClass("ok");
                        $(this)
                            .next()
                            .find(".feedback")
                            .removeClass("glyphicon glyphicon-remove")
                            .addClass("glyphicon glyphicon-ok")
                            .removeClass("warning")
                            .addClass("ok");
                        $("#cityRequired")
                            .removeClass("warning")
                            .addClass("ok");
                    
                    }
                    
                }
                /*  } */
                
                
                if (name === "Password") {
                    var pswReglow = /^([a-zA-Z0-9]{6,})+$/;
                    var pswRegheigh = /^([a-zA-Z0-9]{13,})+$/; //13 or more occurences
                    if (value.length > 0) {
                        /*  
                            var inputstr = $(this).val();
                            var pswstr = $(this).val();
                            var pswReglow = /^([a-zA-Z0-9]{6,})+$/;
                            var pswRegheigh = /^([a-zA-Z0-9]{13,})+$/;//13 or more occurences
                            */
                        // fake text    
                        //var inputstr = $(this).val();
                        //var fakeReg = /(.)\1{2,}/;
                        if (fakeReg.test(value)) {
                            $(this)
                                .next()
                                .find(".error")
                                .html(name + " is Fake text: Please remove repetition ");
                            $(this)
                                .next()
                                .find(".feedback")
                                .removeClass("glyphicon glyphicon-ok")
                                .addClass("glyphicon glyphicon-remove")
                                .removeClass("ok")
                                .addClass("warning");
                            $(this)
                                .next()
                                .find(".error")
                                .addClass('warning')
                                .removeClass('ok');
                            $("#pwdRequired")
                                .removeClass("ok")
                                .addClass("warning");   
                            //$(this).css("border","2px solid red");
                        } else {
                            //check if password and last-name is the same
                            if (value === inputs["Your City"].value) {
                                $(this)
                                    .next()
                                    .find(".error")
                                    .html(name + " is Incorrect: Password shouldn't match city name");
                                $(this)
                                    .next()
                                    .find(".error")
                                    .addClass('warning')
                                    .removeClass('ok');
                                $(this)
                                    .next()
                                    .find(".feedback")
                                    .removeClass("glyphicon glyphicon-ok")
                                    .addClass("glyphicon glyphicon-remove")
                                    .removeClass("ok")
                                    .addClass("warning");
                                $("#pwdRequired")
                                    .removeClass("ok")
                                    .addClass("warning");   
                                //$(this).css("border","2px solid red");
                            } else {
                                if (value === inputs["Last Name"].value) {
                                    $(this)
                                        .next()
                                        .find(".error")
                                        .html(name + " is Incorrect: Password shouldn't match last-name ");
                                    $(this)
                                        .next()
                                        .find(".error")
                                        .addClass('warning')
                                        .removeClass('ok');
                                    $(this)
                                        .next()
                                        .find(".feedback")
                                        .removeClass("glyphicon glyphicon-ok")
                                        .addClass("glyphicon glyphicon-remove")
                                        .removeClass("ok")
                                        .addClass("warning");
                                    $("#pwdRequired")
                                        .removeClass("ok")
                                        .addClass("warning");   
                                    //$(this).css("border","2px solid red");
                                } else {
                                    //check if password and first-name is the same
                                    if (value === inputs["First Name"].value) {
                                        $(this)
                                            .next()
                                            .find(".error")
                                            .html(name + " is Incorrect: Password shouldn't match fist-name ");
                                        $(this)
                                            .next()
                                            .find(".error")
                                            .addClass('warning')
                                            .removeClass('ok');
                                        $(this)
                                            .next()
                                            .find(".feedback")
                                            .removeClass("glyphicon glyphicon-ok")
                                            .addClass("glyphicon glyphicon-remove")
                                            .removeClass("ok")
                                            .addClass("warning");
                                        $("#pwdRequired")
                                            .removeClass("ok")
                                            .addClass("warning");   
                                        //$(this).css("border","2px solid red");
                                    } else {
                                        if (!pswReglow.test(value)) {
                                            $(this)
                                                .next()
                                                .find(".error")
                                                .html(name + " is Incorrect: Please enter at lest 6 character ");
                                            $(this)
                                                .next()
                                                .find(".feedback")
                                                .removeClass("glyphicon glyphicon-ok")
                                                .addClass("glyphicon glyphicon-remove")
                                                .removeClass("ok")
                                                .addClass("warning");
                                            $(this)
                                                .next()
                                                .find(".error")
                                                .addClass('warning')
                                                .removeClass('ok');
                                            $("#pwdRequired")
                                                .removeClass("ok")
                                                .addClass("warning");   
                                            //$(this).css("border","2px solid red");
                                        } else {
                                            if (!pswRegheigh.test(value)) {
                                                
                                                // condition to check if length is bigger than 12 char
                                                
                                                $(this)
                                                    .next()
                                                    .find(".error")
                                                    .html(name + " is OK: Your data has been entered correctly");
                                                $(this)
                                                    .next()
                                                    .find(".error")
                                                    .addClass('ok')
                                                    .removeClass('warning');
                                                $(this)
                                                    .next()
                                                    .find(".feedback")
                                                    .removeClass("glyphicon glyphicon-remove")
                                                    .addClass("glyphicon glyphicon-ok")
                                                    .removeClass("warning")
                                                    .addClass("ok");
                                                $("#pwdRequired")
                                                    .removeClass("warning")
                                                    .addClass("ok");    
                                                //$(this).css("border","2px solid green");   
                                            } else {
                                                $(this)
                                                    .next()
                                                    .find(".error")
                                                    .html(name + " is Incorrect: Please enter no more than 12 character " + inputstr);
                                                $(this)
                                                    .next()
                                                    .find(".error")
                                                    .addClass('warning')
                                                    .removeClass('ok');
                                                $(this)
                                                    .next()
                                                    .find(".feedback")
                                                    .removeClass("glyphicon glyphicon-ok")
                                                    .addClass("glyphicon glyphicon-remove")
                                                    .removeClass("ok")
                                                    .addClass("warning");
                                                $("#pwdRequired")
                                                    .removeClass("ok")
                                                    .addClass("warning");   
                                                //$(this).css("border","2px solid red");
                                            }
                                        }
                                        
                                        //$(this).next(".fielderror").html(inputattr+" is OK: Your data has been entered correctly "+inputstr);
                                        //$(this).next(".fielderror").addClass('ok').removeClass('warning');
                                    }
                                }
                            }
                            /*      */
                        }
                    } else {
                        $(this)
                            .next()
                            .find(".error")
                            .html(inputattr + " is EMPTY: Please enter data into this input");
                        $(this)
                            .next()
                            .find(".error")
                            .addClass('warning')
                            .removeClass('ok');
                        
                        $("#pwdRequired")
                            .removeClass("ok")
                            .addClass("warning");
                        //$(this).css("border","2px solid red");
                    }
                }
                /* retype password  */
                
                if (name === "Retype Password") {
                    if (value.length > 0) {
                        if (inputstr !== inputs.Password.value) {
                            $(this)
                                .next()
                                .find(".error")
                                .html(name + " is Incorrect: Password doesn't match retyped pwd ");
							$(this)
                                .next()
                                .find(".errorm")
                                .html(name + " is Incorrect: Password doesn't match retyped pwd ");	
                            $(this)
                                .next()
                                .find(".error")
                                .addClass('warning')
                                .removeClass('ok');
							$(this)
                                .next()
                                .find(".errorm")
                                .addClass('warning')
                                .removeClass('ok');	
                            $(this)
                                .next()
                                .find(".feedback")
                                .removeClass("glyphicon glyphicon-ok")
                                .addClass("glyphicon glyphicon-remove")
                                .removeClass("ok")
                                .addClass("warning");
							$("#pwreRequired")
								.removeClass("ok")
								.addClass("warning");	
                            //$(this).css("border","2px solid red");
                        } else {
                            $(this)
                                .next()
                                .find(".error")
                                .html(name + " is OK: Your data has been entered correctly " + inputstr);
                            $(this)
                                .next()
                                .find(".error")
                                .addClass('ok')
                                .removeClass('warning');
                            $(this)
                                .next()
                                .find(".feedback")
                                .removeClass("glyphicon glyphicon-remove")
                                .addClass("glyphicon glyphicon-ok")
                                .removeClass("warning")
                                .addClass("ok");
							$("#pwreRequired")
								.removeClass("warning")
								.addClass("ok");	
                            //$(this).css("border","2px solid green");
                        }
                        
                        // var pswReglow = /^([a-zA-Z0-9]{6,})+$/;
                        // var pswRegheigh = /^([a-zA-Z0-9]{13,})+$/;//13 or more occurences
                        
                    } else {
                        $(this)
                            .next()
                            .find(".error")
                            .html(name + " is EMPTY: Please enter data into this input");
                        $(this)
                            .next()
                            .find(".error")
                            .addClass('warning')
                            .removeClass('ok');
                        $(this)
                            .next()
                            .find(".feedback")
                            .removeClass("glyphicon glyphicon-ok")
                            .addClass("glyphicon glyphicon-remove")
                            .removeClass("ok")
                            .addClass("warning");
						$("#pwreRequired")
							.removeClass("warning")
							.addClass("ok");	
                        //$(this).css("border","2px solid red");
                    }
                    
                }
		/*	if (name === "termsConditions") {
                alert(name+'checked');
				if($(this).prop("checked") == true){
				alert(name+'checked');
				} 
				else if($(this).is(":not(:checked)")){
				alert('not checked')
				}
			} */
                //alert(name);  
            });
			
			$('.input-groupmodal')
            .on('focusin focusout input', function () {
                console.log('cnanged');
                var namem = $(this)
                    .find(".check,textarea")
                    .attr("name");
                var valuem = $(this)
                    .find(".check,textarea")
                    .val()
                    .trim();
                
                var fakeRegm = /(.)\1{2,}/;
                var emailRegm = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                var pswReglowm = /^([a-zA-Z0-9]{6,})+$/;
                var pswRegheighm = /^([a-zA-Z0-9]{13,})+$/; //13 or more occurences
                /*  */
                var $formm = $("form.modalform");
                var inputsm = $form[0].elements;
                /* The regex for ensuring that letters aren’t used, can just be a simple regex for numbers and separators.
/^[0-9 .-]+$/ */
                
            /* email */
                
                //var emailName = (email) => E-mail.split("@")[0];
            if (name === "E-mail") { 
                        if (value != "") {
                           //$(this).next().find(".error").html(name+'  is ok').removeClass("warning").addClass("ok");
                           //$(this).next().find(".feedback").removeClass("glyphicon glyphicon-remove").addClass("glyphicon glyphicon-ok").removeClass("warning").addClass("ok");
                          
                          if(fakeReg.test(value)) {
                                $(this).next().find(".error").html(name + " is Fake text: Please remove repetition ");
                                $(this).next().find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
                                $(this).next().find(".error").addClass('warning').removeClass('ok');
                                $("#emailRequired").removeClass("ok").addClass("warning");
                                //$(this).css("border","2px solid red");
                                } else {
                               if(emailReg.test(value)) {
                                    $(this).next().find(".error").html(name + " is Ok : Your data has been entered correctly ");
                                    $(this).next().find(".error").addClass('ok').removeClass('warning');
                                    $(this).next().find(".feedback").removeClass("glyphicon glyphicon-remove").addClass("glyphicon glyphicon-ok").removeClass("warning").addClass("ok");
                                    $("#emailRequired").removeClass("warning").addClass("ok");
                                    //$(this).css("border","2px solid green");
                               
                               } else {
                                    $(this).next().find(".error").html(name + " is Incorrect: Please enter it correctly ").removeClass('ok').addClass('warning');
                                    $(this).next().find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
                                    $("#emailRequired").removeClass("ok").addClass("warning");
                                    
                                        }
                                                    }
                            } else {    
                               $(this).next().find(".error").html(name+' is empty ').removeClass("ok").addClass("warning"); 
                               $(this).next().find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
                               $("#emailRequired").removeClass("ok").addClass("warning");
                            }

                    } 
                //var emailName = (email) => E-mail.split("@")[0];
             
               
                
                if (name === "Password") {
                    var pswReglow = /^([a-zA-Z0-9]{6,})+$/;
                    var pswRegheigh = /^([a-zA-Z0-9]{13,})+$/; //13 or more occurences
                    if (value.length > 0) {
                        /*  
                            var inputstr = $(this).val();
                            var pswstr = $(this).val();
                            var pswReglow = /^([a-zA-Z0-9]{6,})+$/;
                            var pswRegheigh = /^([a-zA-Z0-9]{13,})+$/;//13 or more occurences
                            */
                        // fake text    
                        //var inputstr = $(this).val();
                        //var fakeReg = /(.)\1{2,}/;
                        if (fakeReg.test(value)) {
                            $(this)
                                .next()
                                .find(".error")
                                .html(name + " is Fake text: Please remove repetition ");
                            $(this)
                                .next()
                                .find(".feedback")
                                .removeClass("glyphicon glyphicon-ok")
                                .addClass("glyphicon glyphicon-remove")
                                .removeClass("ok")
                                .addClass("warning");
                            $(this)
                                .next()
                                .find(".error")
                                .addClass('warning')
                                .removeClass('ok');
                            $("#pwdRequired")
                                .removeClass("ok")
                                .addClass("warning");   
                            //$(this).css("border","2px solid red");
                        } else {
                            //check if password and last-name is the same
                            if (value === inputs["Your City"].value) {
                                $(this)
                                    .next()
                                    .find(".error")
                                    .html(name + " is Incorrect: Password shouldn't match city name");
                                $(this)
                                    .next()
                                    .find(".error")
                                    .addClass('warning')
                                    .removeClass('ok');
                                $(this)
                                    .next()
                                    .find(".feedback")
                                    .removeClass("glyphicon glyphicon-ok")
                                    .addClass("glyphicon glyphicon-remove")
                                    .removeClass("ok")
                                    .addClass("warning");
                                $("#pwdRequired")
                                    .removeClass("ok")
                                    .addClass("warning");   
                                //$(this).css("border","2px solid red");
                            } else {
                                if (value === inputs["Last Name"].value) {
                                    $(this)
                                        .next()
                                        .find(".error")
                                        .html(name + " is Incorrect: Password shouldn't match last-name ");
                                    $(this)
                                        .next()
                                        .find(".error")
                                        .addClass('warning')
                                        .removeClass('ok');
                                    $(this)
                                        .next()
                                        .find(".feedback")
                                        .removeClass("glyphicon glyphicon-ok")
                                        .addClass("glyphicon glyphicon-remove")
                                        .removeClass("ok")
                                        .addClass("warning");
                                    $("#pwdRequired")
                                        .removeClass("ok")
                                        .addClass("warning");   
                                    //$(this).css("border","2px solid red");
                                } else {
                                    //check if password and first-name is the same
                                    if (value === inputs["First Name"].value) {
                                        $(this)
                                            .next()
                                            .find(".error")
                                            .html(name + " is Incorrect: Password shouldn't match fist-name ");
                                        $(this)
                                            .next()
                                            .find(".error")
                                            .addClass('warning')
                                            .removeClass('ok');
                                        $(this)
                                            .next()
                                            .find(".feedback")
                                            .removeClass("glyphicon glyphicon-ok")
                                            .addClass("glyphicon glyphicon-remove")
                                            .removeClass("ok")
                                            .addClass("warning");
                                        $("#pwdRequired")
                                            .removeClass("ok")
                                            .addClass("warning");   
                                        //$(this).css("border","2px solid red");
                                    } else {
                                        if (!pswReglow.test(value)) {
                                            $(this)
                                                .next()
                                                .find(".error")
                                                .html(name + " is Incorrect: Please enter at lest 6 character ");
                                            $(this)
                                                .next()
                                                .find(".feedback")
                                                .removeClass("glyphicon glyphicon-ok")
                                                .addClass("glyphicon glyphicon-remove")
                                                .removeClass("ok")
                                                .addClass("warning");
                                            $(this)
                                                .next()
                                                .find(".error")
                                                .addClass('warning')
                                                .removeClass('ok');
                                            $("#pwdRequired")
                                                .removeClass("ok")
                                                .addClass("warning");   
                                            //$(this).css("border","2px solid red");
                                        } else {
                                            if (!pswRegheigh.test(value)) {
                                                
                                                // condition to check if length is bigger than 12 char
                                                
                                                $(this)
                                                    .next()
                                                    .find(".error")
                                                    .html(name + " is OK: Your data has been entered correctly");
                                                $(this)
                                                    .next()
                                                    .find(".error")
                                                    .addClass('ok')
                                                    .removeClass('warning');
                                                $(this)
                                                    .next()
                                                    .find(".feedback")
                                                    .removeClass("glyphicon glyphicon-remove")
                                                    .addClass("glyphicon glyphicon-ok")
                                                    .removeClass("warning")
                                                    .addClass("ok");
                                                $("#pwdRequired")
                                                    .removeClass("warning")
                                                    .addClass("ok");    
                                                //$(this).css("border","2px solid green");   
                                            } else {
                                                $(this)
                                                    .next()
                                                    .find(".error")
                                                    .html(name + " is Incorrect: Please enter no more than 12 character " + inputstr);
                                                $(this)
                                                    .next()
                                                    .find(".error")
                                                    .addClass('warning')
                                                    .removeClass('ok');
                                                $(this)
                                                    .next()
                                                    .find(".feedback")
                                                    .removeClass("glyphicon glyphicon-ok")
                                                    .addClass("glyphicon glyphicon-remove")
                                                    .removeClass("ok")
                                                    .addClass("warning");
                                                $("#pwdRequired")
                                                    .removeClass("ok")
                                                    .addClass("warning");   
                                                //$(this).css("border","2px solid red");
                                            }
                                        }
                                        
                                        //$(this).next(".fielderror").html(inputattr+" is OK: Your data has been entered correctly "+inputstr);
                                        //$(this).next(".fielderror").addClass('ok').removeClass('warning');
                                    }
                                }
                            }
                            /*      */
                        }
                    } else {
                        $(this)
                            .next()
                            .find(".error")
                            .html(inputattr + " is EMPTY: Please enter data into this input");
                        $(this)
                            .next()
                            .find(".error")
                            .addClass('warning')
                            .removeClass('ok');
                        
                        $("#pwdRequired")
                            .removeClass("ok")
                            .addClass("warning");
                        //$(this).css("border","2px solid red");
                    }
                }
                /* retype password  */
                
                if (name === "Retype Password") {alert(value);
                    if (value.length > 0) {
                        if (value !== inputs.Password.value) {
						alert(name);
                            $(this)
                                .next()
                                .find(".error")
                                .html(name + " is Incorrect: Password doesn't match retyped pwd ");
                            $(this)
                                .next()
                                .find(".error")
                                .addClass('warning')
                                .removeClass('ok');
                            $(this)
                                .next()
                                .find(".feedback")
                                .removeClass("glyphicon glyphicon-ok")
                                .addClass("glyphicon glyphicon-remove")
                                .removeClass("ok")
                                .addClass("warning");
							$("#pwreRequired")
								.removeClass("ok")
								.addClass("warning");	
                            //$(this).css("border","2px solid red");
                        } else {
                            $(this)
                                .next()
                                .find(".error")
                                .html(name + " is OK: Your data has been entered correctly " + inputstr);
                            $(this)
                                .next()
                                .find(".error")
                                .addClass('ok')
                                .removeClass('warning');
                            $(this)
                                .next()
                                .find(".feedback")
                                .removeClass("glyphicon glyphicon-remove")
                                .addClass("glyphicon glyphicon-ok")
                                .removeClass("warning")
                                .addClass("ok");
							$("#pwreRequired")
								.removeClass("warning")
								.addClass("ok");	
                            //$(this).css("border","2px solid green");
                        }
                        
                        // var pswReglow = /^([a-zA-Z0-9]{6,})+$/;
                        // var pswRegheigh = /^([a-zA-Z0-9]{13,})+$/;//13 or more occurences
                        
                    } else {
                        $(this)
                            .next()
                            .find(".error")
                            .html(name + " is EMPTY: Please enter data into this input");
                        $(this)
                            .next()
                            .find(".error")
                            .addClass('warning')
                            .removeClass('ok');
                        $(this)
                            .next()
                            .find(".feedback")
                            .removeClass("glyphicon glyphicon-ok")
                            .addClass("glyphicon glyphicon-remove")
                            .removeClass("ok")
                            .addClass("warning");
						$("#pwreRequired")
							.removeClass("warning")
							.addClass("ok");	
                        //$(this).css("border","2px solid red");
                    }
                    
                }
		/*	if (name === "termsConditions") {
                alert(name+'checked');
				if($(this).prop("checked") == true){
				alert(name+'checked');
				} 
				else if($(this).is(":not(:checked)")){
				alert('not checked')
				}
			} */
                //alert(name);  
            });

	// terms and conditions check
       //  $('input[type="checkbox"]').click(function(){
	   $('#terms').click(function(){
            if($(this).is(":checked")){
                console.log("Checkbox is checked.");
				$("#termcheck").addClass('ok').removeClass('warning');
				$("#termsRequired").addClass('ok').removeClass('warning');
				//alert(name+'checked');
            }
            else if($(this).is(":not(:checked)")){
                console.log("Checkbox is unchecked.");
				 $("#termcheck").removeClass('ok').addClass('warning');
				 $("#termsRequired").removeClass('ok').addClass('warning');
				//alert(name+'not checked');
				// event.preventDefault();
            }
        }); 
		
       $(".btn1").click(function(){
			$('.form-group').each(function(){
			
			var $requiredField = $(this).find(".check");
				if ($requiredField.length === 0) {
					return;
				}
				if ( $(".inputstatus .warning").length != 0) {
					event.preventDefault();
				}
				var name = $requiredField.attr("name");
				var value = $requiredField.val().trim();
				
				if ( value === "") {
				$(this).find(".error").html(name + " is empty !").removeClass("ok").addClass("warning");
				$(this).find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
				$(this).find(".starrq").removeClass("ok").addClass("warning");
				$("#termcheck").removeClass('ok').addClass('warning');
				$("#termsRequired").removeClass('ok').addClass('warning');
				event.preventDefault();
				//$(this).find(".starrq").removeClass("ok").addClass("warning");
				}
				if($("#terms").is(":checked")){
				//alert(' checked');
					console.log("Checkbox is checked.");
					$("#termcheck").addClass('ok').removeClass('warning');
					$("#termsRequired").addClass('ok').removeClass('warning');
					//alert(name+'checked');
				}
				else if($("#terms").is(":not(:checked)")){
				//alert('not checked');
				event.preventDefault();
					console.log("Checkbox is unchecked.");
					 $("#termcheck").removeClass('ok').addClass('warning');
					 $("#termsRequired").removeClass('ok').addClass('warning');
					//alert(name+'not checked');
					// event.preventDefault();
				}
			 
			  //alert(inputattr);
			});
		});
		     
        function resetFeedback($el) {
            $el.removeClass("glyphicon glyphicon-ok glyphicon-remove warning ok");
        }
        function resetMessages(i, formGroup) {
            const $error = $(formGroup).find(".error");
            const name = $(formGroup).find(".check").attr("name");
            $error.html(name);
            resetWarning($error);
            resetFeedback($(formGroup).find(".feedback"));
            resetWarning($(formGroup).find(".starrq"));
        }
        function removeTermWarning() {
            const $termsGroup = $("#terms").closest(".form-group");
            resetFeedback($termsGroup.find(".feedback"));
            resetWarning($("#termcheck"));
            resetWarning($("#termsRequired"));
        }

        $(".btn2").click(function (evt) {
            $(".form-group").each(resetMessages);
            removeTermWarning();
        });
        /* document ready end */
    });
