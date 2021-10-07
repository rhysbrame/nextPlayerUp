import Link from 'next/link';

const Header = () => {
  return (
    <div className="header">
      <Link href="/">
        <a className="logo">
          <svg className="logo__icon">
            <use xlinkHref="/icons/sprite.svg#icon-flash"></use>
          </svg>
          <h1 className="logo__text" alt="npu text">
            next player up
          </h1>
        </a>
      </Link>
      <form action="#" className="search">
        <input type="text" className="search__input" placeholder="Search teams" />
        <button className="search__button">
          <svg className="search__icon">
            <use xlinkHref="/icons/sprite.svg#icon-magnifying-glass"></use>
          </svg>
        </button>
      </form>
      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <svg className="user-nav__icon">
            <use xlinkHref="/icons/sprite.svg#icon-bookmark"></use>
          </svg>
          <span className="user-nav__notification">7</span>
        </div>
        <div className="user-nav__icon-box">
          <svg className="user-nav__icon">
            <use xlinkHref="/icons/sprite.svg#icon-chat"></use>
          </svg>
          <span className="user-nav__notification">13</span>
        </div>
        <div className="user-nav__user">
          <img src="/img/profile_pic.jpg" alt="User photo" className="user-nav__user-photo" />
          <span className="user-nav__user-name">Rhys</span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
