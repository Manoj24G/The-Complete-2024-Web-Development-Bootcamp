import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
import List from "./List";
import Greetings from "./Greetings";
// import pi, { doublePi, triplePi } from "./Math";
import * as pi from "./Math";
import * as Calculator from "./Calculator";
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import "./App.css";

// 283. Javascript Expressions in JSX & ES6 Template Literals
var fName = "Manoj";
var lName = "Gawade";
var luckyNumber = Math.floor(Math.random() * 10);

// 284. Javascript Expressions in JSX Practice
var name = "Manoj";
var currentYear = new Date().getFullYear();

// 285. JSX Attributes & Styling React Elements
const randomImg = "https://picsum.photos/200/200";

// 286. Inline Styling for React Elements
const customStyle = {
  color: "red",
  fontSize: "40px",
  border: "1px solid blue",
};

// 287. React Styling Practice
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

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>Get Started</h1>
      <p>281. Introduction to JSX and Babel</p>
      <h1>Hello World</h1>
      <br />
      <p>282. JSX Code Practice</p>
      <h1>Top programming languages</h1>
      <ul>
        <li>JavaScript</li>
        <li>Python</li>
        <li>MongoDB</li>
      </ul>
      <br />
      <p>283. Javascript Expressions in JSX & ES6 Template Literals</p>
      <h1>Hello {`${fName} ${lName}`}!</h1>
      <p>Your lucky number is {luckyNumber}</p>
      <br />
      <p>284. Javascript Expressions in JSX Practice</p>
      <p>Created by {name}.</p>
      <p>Copyright {currentYear}.</p>
      <br />
      <p>285. JSX Attributes & Styling React Elements</p>
      <h1 className="heading">A Random Image</h1>
      <img src={randomImg} alt="Random Image" />
      <br />
      <p>286. Inline Styling for React Elements</p>
      <h1 style={customStyle}>Hello World!</h1>
      <br />
      <p>287. React Styling Practice</p>
      <h1 style={customStyle1}> {greeting}</h1>
      <br />
      {/* 288. React Components */}
      <p>288. React Components</p>
      <Heading />
      <List />
      <br />
      <p>289. React Components Practice</p>
      <Greetings />
      <br />
      <p>290. Javascript ES6 - Import, Export and Modules</p>
      <ul>
        {/* <li>{pi}</li>
        <li>{doublePi()}</li>
        <li>{triplePi()}</li> */}
        <li>{pi.default}</li>
        <li>{pi.doublePi()}</li>
        <li>{pi.triplePi()}</li>
      </ul>
      <br />
      <p>291. Javascript ES6 Import, Export and Modules Practice</p>
      <ul>
        <li>{Calculator.add(15, 50)}</li>
        <li>{Calculator.multiply(60, 10)}</li>
        <li>{Calculator.subtract(250, 20)}</li>
        <li>{Calculator.divide(150, 30)}</li>
      </ul>
    </>
  );
}

export default App;
