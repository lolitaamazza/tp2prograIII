import Link from 'next/link';
import { navAuth, navMenu } from '../lib/navItems'; //importo la lista de datos para el navbar

const Navbar = () => {
  return (
    <header className="navbar">
      {/* lado izq: login y sign up */}
      <div className="nav-left">
        {navAuth.map((item, index) => (
          <Link key={index} href={item.link} className="nav-item">
            {item.name}
          </Link>
        ))}
      </div>

      {/* lado der: menú principal */}
      <div className="nav-right">
        {navMenu.map((item, index) => (
          <Link key={index} href={item.link} className="nav-item">
            {item.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;

