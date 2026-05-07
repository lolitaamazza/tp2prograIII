import { navAuth, navMenu } from '../lib/navItems'; //importo la lista de datos para el navbar

const Navbar = () => {
  return (
    <header className="navbar">
      {/* lado izq: login y sign up */}
      <div className="nav-left">
        {navAuth.map((item, index) => (
          <a key={index} href={item.link} className="nav-item">
            {item.name}
          </a>
        ))}
      </div>

      {/* lado der: menú principal */}
      <div className="nav-right">
        {navMenu.map((item, index) => (
          <a key={index} href={item.link} className="nav-item">
            {item.name}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Navbar;

