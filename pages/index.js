import Link from 'next/link';
import Image from 'next/image';
import { AppContext } from '../contexts/AppContext';
import { useEffect, useContext } from 'react';
import { getAllTeamsData } from '../library/teams';

function Home({ teamsData }) {
  const { teams, setTeams } = useContext(AppContext);

  useEffect(() => {
    setTeams(teamsData);
  });

  return (
    <>
      <ul>
        {teams &&
          teams.map((team) => (
            <div key={team.TeamID}>
              <li>Full Name: {team.FullName}</li>
              <Link href={`/teams/${team.Key}`} passHref>
                <Image src={team.WikipediaLogoUrl} alt="Team Logo"></Image>
              </Link>
            </div>
          ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const teamsData = await getAllTeamsData();

  return {
    props: {
      teamsData,
    },
  };
}

export default Home;
