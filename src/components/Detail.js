import React from "react";
import "./Detail.css";

function Detail({ title, img }) {
  return (
    <div className="detail">
      <img className="detail__image" src={img} alt={title} />
      <h2 className="detail__bg_title">{title}</h2>
      <h2 className="detail__main_title">{title}</h2>
    </div>
  );
}

export default Detail;
