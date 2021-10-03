import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';

function Teams({ teams }) {
  return (
    <div>
      <ul className="teams-container">
        {teams &&
          teams.map((team) => (
            <div
              key={team.TeamID}
              className="team-box-view"
              style={{ 'background-color': `#${team.PrimaryColor}` }}
            >
              <li className="team-box-title">
                <Link href={`/teams/${team.Key}`} passHref>
                  <a className="team-box-link">
                    <Image
                      src={team.WikipediaLogoUrl}
                      alt="Team Logo"
                      height={108}
                      width={108}
                      className="team-image"
                    ></Image>
                    <h1>{team.City}</h1>
                    <h2>{team.Name}</h2>
                  </a>
                </Link>
              </li>
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
