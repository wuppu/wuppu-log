import React from "react";
import "./Detail.css";
import PropTypes from 'prop-types';

function Detail({ title, img }) {
  return (    
    <div className="detail">
      <img className="detail__image" src={require(`../img/${img}`)} alt={title} />
      <h2 className="detail__bg_title">{title}</h2>
      <h2 className="detail__main_title">{title}</h2>
    </div>
  );
}

Detail.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default Detail;
