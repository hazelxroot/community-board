import React from 'react';
import Card from './Card';

const CardList = ({ items }) => {
  return (
    <div className="card-list">
      {items.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default CardList;
