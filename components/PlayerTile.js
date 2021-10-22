import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';

function PlayerTile({ player }) {
  return (
    <article className="player-tile">
      <Link href={`/players/${player.PlayerID}`} passHref>
        <a className="player-tile--link">
          <span className="player-tile--img">
            <Image src={`${player.PhotoUrl}`} alt="Player Headshot" height={90} width={65}></Image>
            <h3 className="player-title--number"> #{player.Number} </h3>
            <h1 className="player-title">
              <span className="player-tilte--firstname"> {player.FirstName} </span>
              <span className="player-title--lastname"> {player.LastName} </span>
            </h1>
          </span>
        </a>
      </Link>
    </article>
  );
}

PlayerTile.propTypes = {
  player: PropTypes.object.isRequired,
};

export default PlayerTile;
