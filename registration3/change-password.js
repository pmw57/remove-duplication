const changePassword = (function () {
        /* modal change*/
		$(".inputboxmodal2").on("focusin focusout input", function() {
             console.log("changed");
    
             var inputattr = $(this)
                          .find(".input-check")
                          .attr("name");
             // Get the Login Name value and trim it
             var inputstr = $(this)
                          .find(".input-check")
                          .val()
                          .trim();
             var value  = inputstr;       
            //alert(inputstr);
             var fakeReg = /(.)\1{2,}/;
             var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
             var pswReglow = /^([a-zA-Z0-9]{6,})+$/;
             var pswRegheigh = /^([a-zA-Z0-9]{13,})+$/;//13 or more occurences
             
             var $form = $("form.modalresetpw");
             var inputs = $form[0].elements;
        
       //alert(inputattr+inputstr);
        if (inputstr != "") {
               $(this).find(".error").html(inputattr+'  is ok').removeClass("warning").addClass("ok");
               $(this).find(".feedback").removeClass("glyphicon glyphicon-remove").addClass("glyphicon glyphicon-ok").removeClass("warning").addClass("ok");
              
              if(fakeReg.test(inputstr)) {
                        $(this).find(".error").html(inputattr + " is Fake text: Please remove repetition ");
                        $(this).find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
                        $(this).find(".error").addClass('warning').removeClass('ok');
                        //$(this).css("border","2px solid red");
                    } else {
                 /* E-mail*/
                        if (inputattr === "E-mail") {   
                               if(emailReg.test(inputstr)) {
                                    $(this).find(".error").html(inputattr + " is Ok : Your data has been entered correctly ");
                                    $(this).find(".error").addClass('ok').removeClass('warning');
                                    $(this).find(".feedback").removeClass("glyphicon glyphicon-remove").addClass("glyphicon glyphicon-ok").removeClass("warning").addClass("ok");
                                    //$(this).css("border","2px solid green");
                               
                               } else {
                                    $(this).find(".error").html(inputattr + " is Incorrect: Please enter it correctly ").removeClass('ok').addClass('warning');
                                    $(this).find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
                                    //$(this).find(".error");
                                    //$(this).css("border","2px solid red");
                                        }
                                                    }
                            }                         
                /*Password  */        
                        if (inputattr === "Password") {
                            
                            if(fakeReg.test(inputstr)) {
                                $(this).find(".error").html(inputattr + " is Fake text: Please remove repetition ");
                                $(this).find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
                                $(this).find(".error").addClass('warning').removeClass('ok');
                                //$(this).css("border","2px solid red");
                                } else {
                                    if (!pswReglow.test(inputstr)) {
                                        $(this).find(".error").html(inputattr + " is Incorrect: Please enter at lest 6 character ");
                                        $(this).find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
                                        $(this).find(".error").addClass('warning').removeClass('ok');
                                        //$(this).css("border","2px solid red");
                                        } else {
                                            if (!pswRegheigh.test(inputstr)) {
                                    
                                             // condition to check if length is bigger than 12 char
                                                
                                                $(this).find(".error").html(inputattr+" is OK: Your data has been entered correctly");
                                                $(this).find(".error").addClass('ok').removeClass('warning');
                                                $(this).find(".feedback").removeClass("glyphicon glyphicon-remove").addClass("glyphicon glyphicon-ok").removeClass("warning").addClass("ok");
                                                //$(this).css("border","2px solid green");   
                                                 } else {
                                                    $(this).find(".error").html(inputattr + " is Incorrect: Please enter no more than 12 character "+inputstr);
                                                    $(this).find(".error").addClass('warning').removeClass('ok');
                                                    $(this).find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
                                                    //$(this).css("border","2px solid red");
                                                    }
                                               }
                                        }
                                    }   
                                        
                                  //  console.log("inputattr at password retype : ", inputattr);  
                        if (inputattr === "Password Retype") {
									//alert(inputattr);
										//if (inputstr.length > 0) {
										   if (inputstr !== inputs.Password.value)  {
												$(this).find(".error").html(inputattr + " is Incorrect: Password doesn't match retyped password ");
												$(this).find(".error").addClass('warning').removeClass('ok');
												$(this).find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
												//$(this).css("border","2px solid red");
												} else {
												$(this).find(".error").html(inputattr+" is OK: Your data has been entered correctly "+inputstr);
												$(this).find(".error").addClass('ok').removeClass('warning');
												$(this).find(".feedback").removeClass("glyphicon glyphicon-remove").addClass("glyphicon glyphicon-ok").removeClass("warning").addClass("ok");
												//$(this).css("border","2px solid green");
												}			
											 
											  								  
											 // var pswReglow = /^([a-zA-Z0-9]{6,})+$/;
											 // var pswRegheigh = /^([a-zA-Z0-9]{13,})+$/;//13 or more occurences
													
										/*   }else{
												$(this).find(".error").html(inputattr+" is EMPTY: Please enter data into this input");
												$(this).find(".error").addClass('warning').removeClass('ok');
												$(this).find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
												//$(this).css("border","2px solid red");
											} */
											
										}
                          
            } else {    
               $(this).find(".error").html(inputattr+' is empty').removeClass("ok").addClass("warning");    
               $(this).find(".feedback").removeClass("glyphicon glyphicon-ok").addClass("glyphicon glyphicon-remove").removeClass("ok").addClass("warning");
                
            }
        /*          */
            });
            
            $(".button1color2").click(function() {
                  $(".inputboxmodal2").each(function() {
                    var st = $(this)
                      .find(".input-check")
                      .attr("name");
                    var st2 = $(this)
                      .find(".input-check")
                      .val()
                      .trim();
                    if (
                      $(this)
                        .find(".input-check")
                        .val()
                        .trim() != ""
                    ) {
                      //$($(this).nextAll(".inputstatus")).find(".fielderror").text("Your " + st + " is OK ");
                      //$(this).find(".fielderror").text("Your " + st + " is OK ");
                      $(this)
                        //.next()
                        .find(".error")
                        .html("Your " + st + " is OK ");
                      $(this)
                        .find(".error")
                        .css("color", "green");
                      
                      $(this)
                        //.next()
                        .find(".feedback")
                        //.html("Your " + st + " is OK ")
                        .removeClass("glyphicon glyphicon-remove warning")
                        .addClass("glyphicon glyphicon-ok ok");
                      $(this)
                        .next()
                        .find(".error")
                        .removeClass("warning")
                        .addClass("ok");
                     
                      //alert(st2);
                    } else {
                      //$($(this).nextAll(".inputstatus")).find(".fielderror").text("Your " + st + " is empty");
                      $(this)
                        //.next()
                        .find(".error")
                        .html("Your " + st + " is empty ");
                      $(this)
                        .find(".error")
                        //.css("background-color", "pink");
                        .css("color", "red");
                      $(this)
                        //.next()
                        .find(".feedback")
                        .removeClass("glyphicon glyphicon-ok ok")
                        .addClass("glyphicon glyphicon-remove warning");
                      $(this)
                        //.next()
                        .find(".error")
                        .removeClass("ok")
                        .addClass("warning");

                      event.preventDefault();
                    }

                    //alert("The " + st +  " was clicked. it is " + st2);
                  });
				  
            });
            function passwordResetHandler() {
                $(".inputboxmodal2").each(function resetInputMessages() {
                    var $inputField = $(this).find(".input-check");
                    var inputName = $inputField.attr("name");
                    $(this).find(".error").html("Your " + inputName);
                    $(this).find(".error").css("color", "green");                      
                    $(this).find(".error").removeClass("warning").addClass("ok");
                    $(this).find(".feedback").removeClass("glyphicon glyphicon-remove glyphicon-ok ok");
                });
            }
            $("#changepw").on("reset", passwordResetHandler);

    return {
        eventHandler: {
            passwordReset: passwordResetHandler
        }
    };
}());