import { useContext } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { AppContext } from '../../contexts/AppContext';
import { getTeamPaths, getTeamRoster } from '../../library/teams';

function Team({ teamRoster, params }) {
  const { teams } = useContext(AppContext);
  const team = teams.find((team) => {
    return team.Key == params.teamKey;
  });
  if (!teamRoster || !team) return <p></p>;
  return (
    <div>
      <h1>Team {team.FullName}</h1>
      <Image src={team.WikipediaLogoUrl} alt="Team Logo" height={108} width={108}></Image>
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

  return {
    props: {
      teamRoster,
      params,
    },
  };
}

Team.propTypes = {
  params: PropTypes.object.isRequired,
  teamRoster: PropTypes.array.isRequired,
};

export default Team;
