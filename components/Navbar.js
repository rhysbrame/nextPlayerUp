import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <h1>Navbar</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>{' '}
      <Link href="/teams/">
        <a>Teams</a>
      </Link>{' '}
      <Link href="/player/">
        <a>Players</a>
      </Link>{' '}
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
};

export default Navbar;
