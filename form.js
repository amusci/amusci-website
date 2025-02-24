document.addEventListener("DOMContentLoaded", function () {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwDYRdeMq82R-jGmG3S82uLkQ8gsnrmCoKBn1zauDmAte7Q2MFDgfX7tOlzZR2TIgTA/exec";
  const form = document.forms["submit-to-google-sheet"];
  const msg = document.getElementById("msg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        msg.innerHTML = "Message Sent!";
        setTimeout(() => {
          msg.innerHTML = "";
        }, 5000);

        form.reset();
      })
      .catch((error) => console.error("Error!", error.message));
  });
});
