function sendMail() {
  var params = {
    from_name: document.getElementById("from_name").value,
    from_email: document.getElementById("from_email").value,
    from_number: document.getElementById("from_number").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_ebp9khi";
  const templateID = "template_h6h3y9c";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("from_name").value = "";
      document.getElementById("from_email").value = "";
      document.getElementById("from_number").value = "";
      document.getElementById("message").value = "";
      
        console.log(res);
        alert("Your message sent successfully!!")

    })
      .catch(err => {
        console.log(err)
                alert("An error has occured, please try again")

      });

}

