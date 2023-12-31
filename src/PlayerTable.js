import React from 'react';


const PlayerComparisonTable = ({ playerData, playerName }) => {
    const totalPoints = playerData.reduce((total, player) => total + player.points, 0);
    // Extract keys and values for each player
    return (
      <div className="player-comparison-table">
        <div className="player-table">
          <div className="team-header">
            <h2>{playerName}</h2>
            <Avatar alt={playerName} src={`https://sleepercdn.com/avatars/thumbs/${playerData.avatarID}`} /> 
          </div>
          <table className="custom-table">
            <thead>
              <tr>
                <th className="table-header">Position</th>
                <th className="table-header">Player</th>
                <th className="table-header last-column">Points</th>
              </tr>
            </thead>
            <tbody>
            {playerData.map((player, index) => (
              <tr key={player.name} className="table-row">
                <td className="data">{player.position}</td>
                <td className="data">{player.name}</td>
                <td className="data last-column">{player.points}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
        <h4> Total Points: <p style={{backgroundColor: 'lightblue'}}>{totalPoints}</p></h4>
      </div>
    )

}

export default PlayerComparisonTable;
