import React from 'react';

const Card = ({ title, description, imageUrl, link }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View More</a>
    </div>
  );
};

export default Card;
