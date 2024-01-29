import React from 'react';
import CardList from './components/CardList';
import './index.css';

const App = () => {
  const items = [
    {
      title: "Stringray Touch Tank & Feeding",
      description: "Expo East",
      imageUrl: "https://cdn.saffire.com/images.ashx?t=ig&rid=SouthFloridaFair&i=hfhdfh.jpg",
      link: "https://www.southfloridafair.com/events/2024/stingrays-touch-tank--feeding"
    }
  ];

  return (
    <div className="app">
      <h1>South Florida Fair</h1>
      <CardList items={items} />
    </div>
  );
};

export default App;
