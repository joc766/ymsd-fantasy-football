// DataFetcher.js
import React, { useState, useEffect } from 'react';

import  PlayerComparisonTable  from './PlayerTable.js';

import { extractMatchupData } from './utils.mjs';

const MatchupDisplay = ({matchups}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.sleeper.app/v1/league/990267272524541952/matchups/16'); // Replace with your API endpoint
        const matchupData = await response.json();
        const result = extractMatchupData(matchups, matchupData)
        console.log(result)
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();

    const intervalId = setInterval(fetchData, 60000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);

  }, []); // The empty dependency array means this effect runs once when the component mounts




  if (data == null) {
    return <div>Loading...</div>;
  }
  else {
    return (
      <div className="overall-display">
        <div className="matchup-display">
            <PlayerComparisonTable playerData={data[0]} playerName={'2. Suck My Gooch'}/>
            <PlayerComparisonTable playerData={data[1]} playerName={'1. Phil\'s Bookie'}/> 
        </div>
        <div className="matchup-display">
            <PlayerComparisonTable playerData={data[2]} playerName={'3. Can\'t Believe Not Bubba!'}/>
            <PlayerComparisonTable playerData={data[3]} playerName={'1. Monahan\'s Moaners'}/> 
        </div>
      </div>
    );
  }
};

export default MatchupDisplay;