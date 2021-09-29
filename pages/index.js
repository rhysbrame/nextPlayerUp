import { useEffect, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { AppContext } from '../contexts/AppContext';
import { getAllTeamsData } from '../library/teams';

function Home({ teamsData }) {
  const { teams, setTeams } = useContext(AppContext);

  useEffect(() => {
    setTeams(teamsData);
  });

  if (!teams || !teamsData) return <p></p>;
  return (
    <>
      <ul>
        {teams &&
          teams.map((team) => (
            <div key={team.TeamID}>
              <li>Full Name: {team.FullName}</li>
              <Link href={`/teams/${team.Key}`} passHref>
                <a>
                  <Image
                    src={team.WikipediaLogoUrl}
                    alt="Team Logo"
                    height={108}
                    width={108}
                  ></Image>
                </a>
              </Link>
            </div>
          ))}
      </ul>
    </>
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
