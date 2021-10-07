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

  return !teams || !teamsData ? <p></p> : <Teams teams={teams} />;
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
