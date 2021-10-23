import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li className="nav-bar__item nav-bar__item--active">
          <Link href="/">
            <a className="nav-bar__link">
              <svg className="nav-bar__icon">
                <use xlinkHref="/icons/sprite.svg#icon-menu"></use>
              </svg>
              <span>Home</span>
            </a>
          </Link>
        </li>
        <li className="nav-bar__item">
          <Link href="/teams">
            <a className="nav-bar__link">
              <svg className="nav-bar__icon">
                <use xlinkHref="/icons/sprite.svg#icon-key"></use>
              </svg>
              <span>Teams</span>
            </a>
          </Link>
        </li>
        <li className="nav-bar__item">
          <Link href="/players">
            <a className="nav-bar__link">
              <svg className="nav-bar__icon">
                <use xlinkHref="/icons/sprite.svg#icon-message"></use>
              </svg>
              <span>Players</span>
            </a>
          </Link>
        </li>
        <li className="nav-bar__item">
          <Link href="/news">
            <a className="nav-bar__link">
              <svg className="nav-bar__icon">
                <use xlinkHref="/icons/sprite.svg#icon-globe"></use>
              </svg>
              <span>News</span>
            </a>
          </Link>
        </li>
        <li className="nav-bar__item">
          <Link href="/about">
            <a className="nav-bar__link">
              <svg className="nav-bar__icon">
                <use xlinkHref="/icons/sprite.svg#icon-triangle"></use>
              </svg>
              <span>About</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
