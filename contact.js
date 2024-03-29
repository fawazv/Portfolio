const form = document.querySelector("form");
const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phoneNumber");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwp0PHQuuXMZNC8P9pW9SA4zOaWWAbHjwCxgS98wGueYxD2O1AiZ4WuBUM_5_6poWY/exec";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      fullName.value = "";
      email.value = "";
      phoneNumber.value = "";
      subject.value = "";
      message.value = "";
    })
    .catch((error) => console.error("Error!", error.message));
});
