import rosterData  from './rosters.json'
import playerData from './players.json'

import users from './users.json'

function getPlayerData(userPlayerData, userMatchupData) {
    const userPlayerList = [];
    for (const [key, value] of Object.entries(userPlayerData)) {
        if (userMatchupData.start.includes(key)) {
            const player_info = playerData[key]
            let player_name = `${player_info.first_name[0]}. ${player_info.last_name}`;
            const player = {
                name: player_info.position === "DEF" ? `${player_info.last_name}` : `${player_name}`,
                points: value,
                position: player_info.position
            }
            userPlayerList.push(player);
        }
    }
    // order userPlayerList by position in the following order: QB, RB, WR, TE, K, DEF
    const orderedPlayerList = [];
    const positionOrder = ['QB', 'RB', 'WR', 'TE', 'K', 'DEF'];
    for (const position of positionOrder) {
        for (const player of userPlayerList) {
            if (player.position === position) {
                orderedPlayerList.push(player);
            }
        }
    }

    return userPlayerList;
}

function getRosterData(displayName, matchupData) {
    const user = users.find(user => user.display_name === displayName);
    const userRosterID = rosterData.find(roster => roster.owner_id === user.user_id).roster_id;
    const rosterData = matchupData.find(matchup => matchup.roster_id === userRosterID);
    return matchupData;
}



export function extractMatchupData(matchups, matchupData) {
    const jamiRosterData = getRosterData(matchups[0].player1, matchupData);
    const tylerRosterData = getRosterData(matchups[0].player2, matchupData);

    const samRosterData = getRosterData(matchupData[1].player1, matchupData);
    const christianRosterData = getRosterData(matchupData[1].player2, matchupData);

    const jamiPlayerList = getPlayerData(jamiRosterData.players_points, jamiRosterData.start);
    const tylerPlayerList = getPlayerData(tylerRosterData.players_points, tylerRosterData.start);
    const samPlayerList = getPlayerData(samRosterData.players_points, samRosterData.start);
    const christianPlayerList = getPlayerData(christianRosterData.players_points, christianRosterData.start);



    return [jamiPlayerList, tylerPlayerList, samPlayerList, christianPlayerList];

}


