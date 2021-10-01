import { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../contexts/AppContext';
import { getAllTeamsData } from '../library/teams';
import Teams from '../components/Teams';

function Home({ teamsData }) {
  const { teams, setTeams } = useContext(AppContext);

  useEffect(() => {
    setTeams(teamsData);
  });

  if (!teams || !teamsData) return <p></p>;
  return (
    <div>
      <Teams teams={teams} />
    </div>
  );
}

Home.propTypes = {
  teamsData: PropTypes.node.isRequired,
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
