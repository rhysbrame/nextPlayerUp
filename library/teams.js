export async function getAllTeamsData() {
  const res = await fetch(
    `${process.env.API_PATH}Teams?key=${process.env.API_KEY}`
  );
  return res.json();
}

export async function getTeamRoster(teamKey) {
  const res = await fetch(
    `${process.env.API_PATH}Players/${teamKey}?key=${process.env.API_KEY}`
  );
  return res.json();
}

export async function getTeamNews(teamKey) {
  const res = await fetch(
    `${process.env.API_PATH}NewsByTeam/${teamKey}?key=${process.env.API_KEY}`
  );
  return res.json();
}

export async function getTeamPaths() {
  const teams = await getAllTeamsData();
  const paths = teams.map((team) => {
    return {
      params: {
        key: `${team.Key}`,
      },
    };
  });
  return paths;
}
