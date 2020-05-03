var button = document.querySelector("button"); // button
var textArea = document.querySelector("textarea"); // text area
var password = ""; // set pw to empty
var charsetLowercase = "abcdefghijklmnopqrstuvwxyz"; //
var charsetUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Establishes char-
var charsetNumeric = "0123456789";                   // sets to pull from
var charsetSpecial = "!@#$%^&*()_+{}<>?~`-=[]";      //
var charset = ""; // set charset to empty

button.addEventListener("click", function() {
    var userLength = prompt("Please type how many characters the password should have. (Between 8 and 128)");
    var userLowercase = confirm("Include lowercase characters?");
    var userUppercase = confirm("Include uppercase characters?");
    var userNumeric = confirm("Include numbers?");
    var userSpecial = confirm("Include special characters?");

    if (userLowercase === true) {                   ////////////////////////////////////////////////////////////////////
        charset = charset + charsetLowercase;       //                                                                //      
    };                                              //                                                                //  
    if (userUppercase === true) {                   //                                                                //
        charset = charset + charsetUppercase;       //  This defines the charset to be used to generate the password  //
    };                                              //                                                                //
    if (userNumeric === true) {                     //                                                                //
        charset = charset + charsetNumeric;         //   There is probably a more efficient way to do this but this   //
    };                                              //                    is what I came up with                      //
    if (userSpecial === true) {                     //                                                                //
        charset = charset + charsetSpecial;         //                                                                //
    };                                              ////////////////////////////////////////////////////////////////////

    for (var i = 0, n = charset.length; i < userLength; ++i) {      // Generating the password and
        password += charset.charAt(Math.floor(Math.random() * n));  // storing it in var password
    };

    textArea.value = password;  // Replacing the text field with the new password
});