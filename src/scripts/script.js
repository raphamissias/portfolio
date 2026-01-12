function sendMail(params) {
  var tempParams = {
    from_name: document.getElementById("from_name").value,
    from_email: document.getElementById("from_email").value,
    from_phone: document.getElementById("from_phone").value,
    from_message: document.getElementById("from_message").value,
  };

  const jsConfetti = new JSConfetti();

  emailjs
    .send("service_c761yyi", "template_seazzna", tempParams)
    .then(function (res) {
      console.log("success", res.status);
    })
    .then(() => {
      jsConfetti.addConfetti();
      document.getElementById("email-form").reset();
      const sendBtn = document.getElementById("send-btn");
      sendBtn.innerHTML = "Email enviado com sucesso!";
      sendBtn.disabled = true;
    });
}
