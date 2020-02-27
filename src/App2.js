import React from "react";
import logo from "../src/CN.png";
import kia from "../src/kia-picanto.jpg";
import mini from "../src/minicoop.jpeg";
import rover from "../src/range-rover.jpg";
import vwgolf from "../src/vwgolf.jpg";

import "./App.css";
import Car from "./components/Car";

class App extends React.Component {
  state = {
    car: [
      {
        image: { kia },
        rrp: "£14,745",
        price: "11,790",
        saving: "£2,955",
        title: "Kia Picanto 1.0 1 5dr",
        info: "5 door Manual Petrol Hatchback",
        status: "Brand new - in stock"
      },
      {
        image: { mini },
        rrp: "£16,000",
        price: "13,800",
        saving: "£2,216",
        title: "Mini Cooper 1.5 1 5dr",
        info: "5 door Automatic Diesel Space Gray",
        status: "Brand new - in stock"
      },
      {
        image: { rover },
        rrp: "£20,000",
        price: "15,230",
        saving: "£4,770",
        title: "Land Rover Evoque 2.0 1 5dr",
        info: "5 door Manual Diesel 2WD",
        status: "Brand new - in stock"
      },
      {
        image: { vwgolf },
        rrp: "£16,000",
        price: "11,790",
        saving: "£2,955",
        title: "Volkswagen Golf 1.5 5dr",
        info: "5 door Automatic Petrol",
        status: "Brand new - in stock"
      },
      {
        image: { kia },
        rrp: "£14,745",
        price: "11,790",
        saving: "£2,955",
        title: "Kia Picanto 1.0 1 5dr",
        info: "5 door Manual Petrol Hatchback",
        status: "Brand new - in stock"
      }
    ]
  };
  render() {
    const eachCar = this.state.car.map((car, index) => {
      return (
        <Car
          image={car.image}
          rrp={car.rpp}
          price={car.price}
          saving={car.saving}
          title={car.title}
          info={car.info}
          status={car.status}
          key={index}
        />
      );
    });
    return (
      <div className="App">
        <div className="logo">
          <img src={logo} alt="Code Nation Logo" width="200px" />
        </div>
        <div className="header">
          <h2>Latest brand new car deals</h2>
          <h3>View more deals →</h3>
        </div>
        <div className="cars"></div>
        {eachCar}
      </div>
    );
  }
}

export default App;
