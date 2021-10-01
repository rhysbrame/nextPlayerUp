import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';

function Teams({ teams }) {
  return (
    <div className="teams-container">
      <ul>
        {teams &&
          teams.map((team) => (
            <div key={team.TeamID} className="team-box">
              <li className="team-box-title">Full Name: {team.FullName}</li>
              <Link href={`/teams/${team.Key}`} passHref>
                <a className="team-box-link">
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
    </div>
  );
}

Teams.propTypes = {
  teams: PropTypes.node.isRequired,
};

export default Teams;
