import React from "react";
import ReactDOM from "react-dom";
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
      <img src={randomImg} alt="" srcset="" />
      <br />
      <p>286. Inline Styling for React Elements</p>
      <h1 style={customStyle}>Hello World!</h1>,
    </>
  );
}

export default App;
