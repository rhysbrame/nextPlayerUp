const URL =
  'https://api.sportsdata.io/v3/nfl/scores/json/AllTeams?key=a79947c2b7ac4db7849431550720651c';

function Home({ teams }) {
  return (
    <ul>
      {teams.map((team) => (
        <div>
          <li key={team.TeamID}>{team.FullName}</li>
          <img src={team.WikipediaLogoUrl}></img>
        </div>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const res = await fetch(URL);
  const teams = await res.json();

  return {
    props: {
      teams,
    },
  };
}

export default Home;
