
// this https://smtpjs.com/ & https://elasticemail.com/ API is used for sending user feedback to my email id.
function sendMessage() {
    
Email.send({
    SecureToken: "43a72da5-ca58-4a48-a9fb-611f6aad9cd2",
    To : 'waheed.nazeer@gmail.com',
    From : "waheed.nazeer@gmail.com",
    Subject : "Feedback from "+document.getElementById('fname').value,
    Body : 
    "Subject : Feedback from "+document.getElementById('fname').value
    +"<br>Name: "+document.getElementById('fname').value 
    +"<br>Email: "+ document.getElementById('emailid').value
    +"<br>Message: <br>"+ document.getElementById('message').value
    +"<br>"+"<br>"+"<br>"+"<br>"
    +"<br>"+"<br>"+"<br>"+"<br>"
            
}).then(
  message => alert(message+". Thank you for your feedback!")
);
}