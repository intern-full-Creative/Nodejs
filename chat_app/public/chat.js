const socket = io.connect("http://localhost:8080/");

const output = document.getElementById("output");
const out_msg = document.getElementById("out_msg");
const user = document.getElementById("user");
const message = document.getElementById("message");
const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if ((message.value.length > 0) & (user.value.length > 0)) {
    socket.emit("chat message", {
      message: message.value,
      user: user.value,
    });
  }
  message.value = "";
});

socket.on("chat message", (data) => {
  out_msg.innerHTML = "";
  output.innerHTML +=
    "<p>" +
    '<span id="style-user">' +
    data.user +
    "  :   " +
    "</span>" +
    data.message +
    "</p>";
});

message.addEventListener("keypress", () => {
  console.log("typing");
  if (user.value.length > 0) {
    socket.emit("typing", user.value);
  }
});

socket.on("typing", (user) => {
  out_msg.innerHTML = "<p><em>" + user + " is typing a message...</em></p>";
});
