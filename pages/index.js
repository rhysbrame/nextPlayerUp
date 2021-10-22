import { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../contexts/AppContext';
import { getAllTeamsData } from '../library/teams';
import TeamTile from '../components/TeamTile';

function Home({ teamsData }) {
  const { teams, setTeams } = useContext(AppContext);

  useEffect(() => {
    setTeams(teamsData);
  });

  return !teams || !teamsData ? (
    <p></p>
  ) : (
    <section className="teams-view">
      <ul className="teams-grid">
        {teams.map((team) => (
          <li key={team.TeamID} className="teams-grid--item">
            <TeamTile team={team} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Home.propTypes = {
  teamsData: PropTypes.array.isRequired,
};

export async function getStaticProps() {
  const teamsData = await getAllTeamsData();

  return {
    props: {
      teamsData,
    },
  };
}

export default Home;
