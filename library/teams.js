import allTeamsData from '../dummy_data/allTeamsData';
import allTeamRosterData from '../dummy_data/allTeamRosterData';

export async function getAllTeamsData() {
  if (process.env.NODE_ENV !== 'production') {
    return allTeamsData;
  } else {
    const res = await fetch(`${process.env.API_PATH}Teams?key=${process.env.API_KEY}`);
    return res.json();
  }
}

export async function getTeamRoster(teamKey) {
  if (process.env.NODE_ENV !== 'production') {
    return allTeamRosterData;
  } else {
    const res = await fetch(`${process.env.API_PATH}Players/${teamKey}?key=${process.env.API_KEY}`);
    return res.json();
  }
}

export async function getTeamPaths() {
  const teams = await getAllTeamsData();
  const paths = teams.map((team) => {
    return {
      params: {
        teamKey: `${team.Key}`,
      },
    };
  });
  return paths;
}
