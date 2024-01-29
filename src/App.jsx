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
    },
    {
      title: "The Palm Beaches TV Theater Immersive Underwater Experience",
      description: "Expo East",
      imageUrl: "https://cdn.saffire.com/images.ashx?t=ig&rid=SouthFloridaFair&i=PBTVTheater-RetractableHeader(1).png",
      link: "https://www.southfloridafair.com/events/2024/the-palm-beaches-tv-theater"
    },
    {
      title: "Meet a Life-Sized Humpback Whale",
      description: "Expo East",
      imageUrl: "https://cdn.saffire.com/images.ashx?t=ig&rid=SouthFloridaFair&i=Joey_and_whale_2(1).jpg",
      link: "https://www.southfloridafair.com/events/2024/stingrays-touch-tank--feeding"
    },
    {
      title: "Open Dairy Show",
      description: "Farm Credit Show Arena",
      imageUrl: "https://cdn.saffire.com/images.ashx?t=ig&rid=SouthFloridaFair&i=open-dairy(1).jpg",
      link: "https://www.southfloridafair.com/events/2024/open-dairy-show"
    },
    {
      title: "Aranmore Irish Dance",
      description: "K & M Community Stage",
      imageUrl: "https://cdn.saffire.com/images.ashx?t=ig&rid=SouthFloridaFair&i=missastage_orig.jpg",
      link: "https://www.southfloridafair.com/events/2024/aranmore-irish-dance"
    },
    {
      title: "Extreme Illusions & Escapes with Josh Knotts",
      description: "Extreme Illusions & Escapes with Josh Knotts",
      imageUrl: "https://cdn.saffire.com/images.ashx?t=ig&rid=SouthFloridaFair&i=57052343_2286958577993461_5734402207747407872_n(2).jpeg",
      link: "https://www.southfloridafair.com/events/2024/extreme-illusions--escapes-with-josh-knotts"
    },
    {
      title: "Texas Trick Riders",
      description: "Horse Arena",
      imageUrl: "https://cdn.saffire.com/images.ashx?t=ig&rid=SouthFloridaFair&i=cafair.png",
      link: "https://www.southfloridafair.com/events/2024/texas-trick-riders"
    },
    {
      title: "\'Ice In Paradise\' Ice Skating Show",
      description: "Ford Theater",
      imageUrl: "https://cdn.saffire.com/images.ashx?t=ig&rid=SouthFloridaFair&i=IMG_0116(3).jpg",
      link: "https://www.southfloridafair.com/events/2024/ice-in-paradise-ice-skating-show"
    },
    {
      title: "Live Shark Encounter",
      description: "Expo East",
      imageUrl: "https://cdn.saffire.com/images.ashx?t=ig&rid=SouthFloridaFair&i=Live_Shark_Encounter.jpg",
      link: "https://www.southfloridafair.com/events/2024/live-shark-encounter"
    },
    {
      title: "Luis Manuel & The Charambo Band",
      description: "Coca-Cola Zero Sugar Stage",
      imageUrl: "https://cdn.saffire.com/images.ashx?t=ig&rid=SouthFloridaFair&i=image004.png",
      link: "https://www.southfloridafair.com/events/2024/luis-manuel--the-charambo-band"
    },
  ];

  return (
    <div className="app">
      <h1>South Florida Fair</h1>
      <CardList items={items} />
    </div>
  );
};

export default App;
