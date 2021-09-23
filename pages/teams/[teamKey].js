import Image from 'next/image';
import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { getTeamNews, getTeamPaths, getTeamRoster } from '../../library/teams';

function Team({ teamRoster, teamNews, params }) {
  const { teams } = useContext(AppContext);
  const team = teams.find((team) => {
    return team.Key == params.teamKey;
  });
  if (!teamRoster || !team || !teamNews) return <p></p>;
  return (
    <div>
      <h1>Team {team.FullName}</h1>
      <Image
        src={team.WikipediaLogoUrl}
        alt="Team Logo"
        height={108}
        width={108}
      ></Image>
      <p>{teamNews[0].Title}</p>
      <ul>
        {teamRoster.map((player) => (
          <div key={player.PlayerID}>
            <li>Full Name: {player.Name}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await getTeamPaths();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const teamRoster = await getTeamRoster(params.teamKey);
  const teamNews = await getTeamNews(params.teamKey);

  return {
    props: {
      teamRoster,
      teamNews,
      params,
    },
  };
}

export default Team;
