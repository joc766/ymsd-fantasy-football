import rosterData  from './rosters.json'
import playerData from './players.json'

function getPlayerData(userPlayerData, userStarters) {
    const userPlayerList = [];
    for (const [key, value] of Object.entries(userPlayerData)) {
        if (userStarters.includes(key)) {
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

export function extractMatchupData(matchupData) {
    const jamiID = '871571164550586368';
    const tylerID = '868689337007689728';

    const samID = '514706098083753984';
    const christianID = '868731140293468160';

    const jamiRosterID = rosterData.find(roster => roster.owner_id === jamiID).roster_id;
    const tylerRosterID = rosterData.find(roster => roster.owner_id === tylerID).roster_id;

    const samRosterID = rosterData.find(roster => roster.owner_id === samID).roster_id;
    const christianRosterID = rosterData.find(roster => roster.owner_id === christianID).roster_id; 

    const jamiMatchupData = matchupData.find(matchup => matchup.roster_id === jamiRosterID);
    const tylerMatchupData = matchupData.find(matchup => matchup.roster_id === tylerRosterID);

    const samMatchupData = matchupData.find(matchup => matchup.roster_id === samRosterID);
    const christianMatchupData = matchupData.find(matchup => matchup.roster_id === christianRosterID);

    // return a list of jamiMatchupData
    const jamiPlayerData = jamiMatchupData.players_points;
    const tylerPlayerData = tylerMatchupData.players_points;

    const samPlayerData = samMatchupData.players_points;
    const christianPlayerData = christianMatchupData.players_points;

    const jamiStarters = jamiMatchupData.starters;
    const tylerStarters = tylerMatchupData.starters;

    const samStarters = samMatchupData.starters;
    const christianStarters = christianMatchupData.starters;

    const jamiPlayerList = getPlayerData(jamiPlayerData, jamiStarters);
    const tylerPlayerList = getPlayerData(tylerPlayerData, tylerStarters);
    const samPlayerList = getPlayerData(samPlayerData, samStarters);
    const christianPlayerList = getPlayerData(christianPlayerData, christianStarters);



    return [jamiPlayerList, tylerPlayerList, samPlayerList, christianPlayerList];

}


