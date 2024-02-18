
import './App.css';
import React, { useState } from 'react';
import Navbar from './navbar';
import StaticDiv from './staticdiv';
import Menu from './menu';
import GridItemPopular from './griditempopular';
import Allgrid from './allgrid';
import Trend from './gridtrend';

function App() {
  const [isPopularClicked, setIsPopularClicked] = useState(false);
  const [isAllClicked, setIsAllClicked] = useState(false);
  const [isTrendClicked, setIsTrendClicked] = useState(false);

  // Handle click for each button
  const handlePopularClick = () => {
    setIsPopularClicked(true);
    setIsAllClicked(false);
    setIsTrendClicked(false);
  };

  const handleAllClick = () => {
    setIsPopularClicked(false);
    setIsAllClicked(true);
    setIsTrendClicked(false);
  };

  const handleTrendClick = () => {
    setIsPopularClicked(false);
    setIsAllClicked(false);
    setIsTrendClicked(true);
  };

  return (
    <div className="App">
      <Navbar/>
      <StaticDiv/>
      <Menu 
        handlePopularClick={handlePopularClick} 
        handleAllClick={handleAllClick} 
        handleTrendClick={handleTrendClick}
      />
      {/* Render corresponding components based on button clicks */}
      {isPopularClicked && <GridItemPopular />}
      {isAllClicked && <Allgrid />}
      {isTrendClicked && <Trend />}
    </div>
  );
}

export default App;