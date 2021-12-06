//* Getting the different elements:
const hourBtn = document.getElementById("hour1");
const dateBtn = document.getElementById("date1");

const onMouse = document.getElementById("passingOver");

//* Creating a function as to get a Date from the button:
const hour = () => {
  hourBtn.innerHTML = Date();
};

//* Selecting a certain format for the date:
const dateFormat = {
  weekday: "long",
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
};

//* Creating another function as to get another Date from the other button:
const date = () => {
  const day = new Date();
  console.log(day);
  dateBtn.innerHTML = day.toLocaleDateString("es", dateFormat);
};

//* Creating two more functions as to change the content of the third button:
const over = () => {
  onMouse.innerHTML = "Hey, what r u doing here?";
  onMouse.style.color = "violet";
};

const goodbye = () => {
  onMouse.innerHTML = "That´s what I thought, go away!";
  onMouse.style.color = "pink";
  setTimeout(() => {
    onMouse.innerHTML = "Don´t pass over me!";
    onMouse.style.color = "green";
  }, 3000);
};
