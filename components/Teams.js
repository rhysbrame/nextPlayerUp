import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';

function Teams({ teams }) {
  return (
    <section className="teams-view">
      <ul className="teams-grid">
        {teams &&
          teams.map((team) => (
            <li key={team.TeamID} className="teams-grid--item">
              <article className="team-tile" style={{ backgroundColor: `#${team.PrimaryColor}` }}>
                <Link href={`/teams/${team.Key}`} passHref>
                  <a className="team-tile--link">
                    <span className="team-tile--img">
                      <Image
                        src={`/img/${team.Name}_logo.svg`}
                        alt="Team Logo"
                        height={108}
                        width={108}
                      ></Image>
                      <h1 className="team-title clearfix">
                        <span className="team-title--city"> {team.City} </span>
                        <span className="team-tilte--name"> {team.Name} </span>
                      </h1>
                    </span>
                  </a>
                </Link>
              </article>
            </li>
          ))}
      </ul>
    </section>
  );
}

Teams.propTypes = {
  teams: PropTypes.array.isRequired,
};

export default Teams;
