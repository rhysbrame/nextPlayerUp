import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';

function TeamTile({ team }) {
  return (
    <article
      className="team-tile"
      style={{ backgroundColor: `#${team.PrimaryColor}`, borderColor: `#${team.SecondaryColor}` }}
    >
      <Link href={`/teams/${team.Key}`} passHref>
        <a className="team-tile--link">
          <span className="team-tile--img">
            <Image
              src={`/img/${team.Name}_logo.svg`}
              alt="Team Logo"
              height={108}
              width={108}
            ></Image>
            <h1 className="team-title">
              <span className="team-title--city"> {team.City} </span>
              <span className="team-title--name"> {team.Name} </span>
            </h1>
          </span>
        </a>
      </Link>
    </article>
  );
}

TeamTile.propTypes = {
  team: PropTypes.array.isRequired,
};

export default TeamTile;
