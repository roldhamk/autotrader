import React from "react";
import logo from "../src/CN.png";
import kia from "../src/kia-picanto.jpg";
import mini from "../src/minicoop.jpeg";
import rover from "../src/range-rover.jpg";
import vwgolf from "../src/vwgolf.jpg";

import "./App.css";

const Car = props => {
  return (
    <div className="car">
      <div className="image">
        <img src={props.image} alt="car image" />
      </div>
      <div className="pricing">
        <div className="rrp">
          <h4>RRP</h4>
          <h4>{props.rrp}</h4>
        </div>
        <div className="price">
          <h4>{props.price}</h4>
        </div>
        <div className="saving">
          <h4>Save</h4>
          <button>{props.saving}</button>
        </div>
      </div>
      <div className="detail">
        <h2>{props.title}</h2>
        <p className="info">{props.info}</p>
      </div>
      <div className="status">
        <h2>{props.status}</h2>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="Code Nation Logo" width="200px" />
      </div>
      <div className="header">
        <h2>Latest brand new car deals</h2>
        <h3>View more deals →</h3>
      </div>
      <div className="cars">
        <Car
          image={kia}
          rrp="£14,745"
          price="£11,790"
          saving="£2,955"
          title="Kia Picanto 1.0 1 5dr"
          info="5 door Manual Petrol Hatchback"
          status="Brand new - in stock"
        />
        <Car
          image={mini}
          rrp="£16,000"
          price="£13,800"
          saving="£2,216"
          title="Mini Cooper 1.5 1 5dr"
          info="5 door Automatic Diesel Space Gray"
          status="Brand new - in stock"
        />
        <Car
          image={rover}
          rrp="£20,000"
          price="£15,230"
          saving="£4,770"
          title="Land Rover Evoque 2.0 1 5dr"
          info="5 door Manual Diesel 2WD"
          status="Brand new - in stock"
        />
        <Car
          image={vwgolf}
          rrp="£16,000"
          price="£11,790"
          saving="£2,955"
          title="Volkswagen Golf 1.5 5dr"
          info="5 door Automatic Petrol"
          status="Brand new - in stock"
        />
        <Car
          image={kia}
          rrp="£16,000"
          price="£11,790"
          saving="£2,955"
          title="Kia Picanto 1.0 1 5dr"
          info="5 door Manual Petrol Hatchback"
          status="Brand new - in stock"
        />
      </div>
    </div>
  );
}

export default App;
