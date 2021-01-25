// for email check
document.addEventListener("DOMContentLoaded",
    function(event){
        function submit(event){
            this.textContent = "Submit";
            var email = 
                document.getElementById("email").value;
            
            document
                .getElementById("content")
            
            if (email.indexOf('.com')>-1 && email.indexOf('@') > -1){
                document.getElementById("content").innerHTML = "<h2> Email successfully recorded </h2>";
            } else if (email.indexOf('.edu')>-1 && email.indexOf('@') > -1){
                document.getElementById("content").innerHTML = "<h2> Email successfully recorded </h2>";
            } else {
                document.getElementById("content").innerHTML = "<h2> Invalid email address </h2>";
            }
        }

        // unobtrusive event binding
        document.querySelector("button")
            .addEventListener("click", submit);
    }
);