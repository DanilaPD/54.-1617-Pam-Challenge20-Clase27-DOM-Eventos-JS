const menu = document.getElementById("menu");
const span = document.getElementById("span");

const welcome = () => {
  alert(
    "You´ve won a million dollars!! Click the button to receive your prize!!"
  );
  let title = document.createElement("h1");
  let titleText = document.createTextNode(
    "Welcome, human being. Yes, this is not BS. You´ve won a million dollars!!"
  );

  document.body.appendChild(title);
  title.appendChild(titleText);
};

const showMenu = () => {
  console.log(menu.classList);
  if (menu.classList.contains("hide")) {
    menu.classList.remove("hide");
    span.innerHTML = "Close";
  } else {
    menu.classList.add("hide");
    span.innerHTML = "Open";
  }
};
