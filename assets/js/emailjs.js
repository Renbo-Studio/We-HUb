// Will contain the validation file needed to handle the Email Js cdn
// Values to pass Name, Email, Subject, Message;


function ajaxPost(){

    // Loading display
    var loading = document.getElementById("loading");
    loading.style.display="flex";
    loading.style.justifyContent="center";

    //  Error Display
    var error = document.getElementById("errorMessage");
    // error.style.display="flex";
    // error.style.justifyContent = "center";

    //  Succes Display
    var succes = document.getElementById("successMessage");
    // succes.style.display="flex";
    // succes.style.justifyContent = "center";

    var templateParams = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject :document.getElementById("subject").value,
        message :document.getElementById("message").value,
    };
     
    emailjs.send('gmail', 'we-hub_template', templateParams)
        .then(function(response) {
            //Hide Loading
            loading.style.display="none";
            loading.style.justifyContent="";

            // Show Success
            succes.style.display="flex";
            succes.style.justifyContent = "center";
           console.log('SUCCESS!', response.status, response.text);


        }, function(error) {
            //Hide Loading
            loading.style.display="none";
            loading.style.justifyContent="";
            
            error.style.display="flex";
            error.style.justifyContent = "center";
           console.log('FAILED...', error);
        });

    //This prevents page reloading on form submission
    return false;
}
