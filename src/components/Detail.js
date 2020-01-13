import React from "react";
import "./Detail.css";

function Detail({ title, content }) {
  return (
    <div className="detail">
      <div className="detail__title">
        <div className="detail__bg_title">
          <h1>{title}</h1>
        </div>
        <h2 className="detail__main_title">{title}</h2>
      </div>
      <div className="detail__content">{content}</div>
    </div>
  );
}

export default Detail;
