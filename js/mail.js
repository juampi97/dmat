let productionMailRoute = "https://dmat-mail.vercel.app/mail";
let devMailRoute = "http://localhost:8080/mail";
let enviroment = "prod"; // prod || dev
let mailRoute = "";

switch (enviroment) {
  case "dev":
    mailRoute = devMailRoute;
    break;
  case "prod":
    mailRoute = productionMailRoute;
    break;
}

window.addEventListener("load", () => {
  const buttonSend = document.querySelector("#buttonSend");
  const contactForm = document.querySelector("#contactForm");

  contactForm.addEventListener("submit", runVerify);
});

function onSubmit(token) {
  document.getElementById("contactForm").submit();
  runVerify()
}

const runVerify = (e) => {
  e.preventDefault()
  runCaptcha()
}

const runCaptcha = () => {
  grecaptcha.ready(function() {
    grecaptcha.execute('6LcGXWcpAAAAAHabV98219jMCijy_YmvJsrH4rUu', {action: 'submit'}).then(function(token) {
      // Add your logic to submit to your backend server here.
      const captcha = token
      console.log(captcha);
      postData(captcha)
    });
  });
}

const getData = (captcha) => {
  let datos = new FormData(contactForm);
  let datosProcesados = Object.fromEntries(datos.entries());
  datosProcesados.captcha = captcha
  return datosProcesados;
};

const postData = async (captcha) => {
  const newMessage = getData(captcha);
  try {
    const response = await fetch(mailRoute, {
      method: "POST",
      headers: { 
        "Accept": "application/json, text-/plain, */*",
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(newMessage),
    }).then((res) => res.json()).then((data)=>{
      Swal.fire({
        text: `Mensaje: ${data.mensaje}`,
        icon: "success"
      });
      contactForm.reset()
      location.reload()
    })  

  } catch (error) {
    Swal.fire({
      text: `Mensaje: ${data.mensaje}`,
      icon: "error"
    });
  }
};