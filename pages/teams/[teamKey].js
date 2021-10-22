import { useContext } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { AppContext } from '../../contexts/AppContext';
import { getTeamPaths, getTeamRoster } from '../../library/teams';
import PlayerTile from '../../components/PlayerTile';

function Team({ teamRoster, params }) {
  const { teams } = useContext(AppContext);
  const team = teams.find((team) => {
    return team.Key == params.teamKey;
  });
  if (!teamRoster || !team) return <p></p>;
  return (
    <div className="players-container" style={{ backgroundColor: `#${team.PrimaryColor}e6` }}>
      <section className="players-team-view">
        <span className="players-team-view--img">
          <Image src={team.WikipediaLogoUrl} height={108} width={108} alt="Team Logo"></Image>
        </span>
        <h1 className="players-team-view--heading">{team.FullName}</h1>
      </section>
      <ul className="players-grid">
        {teamRoster.map((player) => (
          <li
            key={player.PlayerID}
            className="players-grid--item"
            style={{ borderColor: `#${team.SecondaryColor}` }}
          >
            <PlayerTile player={player} />
          </li>
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
