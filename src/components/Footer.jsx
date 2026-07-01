import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dashboard-footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Definites. "Statute to Strategy"</p>
        
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#portal-help">Portal Help</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;