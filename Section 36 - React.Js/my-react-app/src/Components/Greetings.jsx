import React from "react";

const date = new Date();
const currentTime = date.getHours();
let greeting;
const customStyle1 = {
  color: "",
};
if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle1.color = "red";
} else if (currentTime < 16) {
  greeting = "Good Afternoon";
  customStyle1.color = "green";
} else {
  greeting = "Good Evening";
  customStyle1.color = "blue";
}

function Greetings() {
  return <h1 style={customStyle1}> {greeting}</h1>;
}
export default Greetings;
