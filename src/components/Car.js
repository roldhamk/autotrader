import React from "react";

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
export default Car;
