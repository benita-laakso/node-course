console.log("Client side Javascript file is loaded");

const weatherForm = document.querySelector("form");

const search = document.querySelector("input");

const messageOne = document.querySelector("#message-1");

const messageTwo = document.querySelector("#message-2");

const inputValue = weatherForm.addEventListener("submit", (e) => {
  e.preventDefault(); // The default behaviour of forms is to compleatly refrech the page

  const location = search.value;

  messageOne.textContent = "Loading";
  messageTwo.textContent = " ";

  fetch("http://localhost:3000/weather?address=" + location).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          messageOne.textContent = data.error;
          console.log(data.error);
        } else {
          messageOne.textContent = data.location;
          messageTwo.textContent = data.forecast;
        }
      });
    }
  );
});
