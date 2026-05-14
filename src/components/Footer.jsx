import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>Plately.</h3>
          <p>Fresh recipes delivered to your screen.</p>
        </div>
        
        <div className="footer-links">
          <h4>Navigation</h4>
          <Link href="/">Home</Link>
          <Link href="/">Menu</Link>
          <Link href="/">Offers</Link>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>hello@plately.com</p>
          <p>+1 234 567 890</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Plately. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;