import { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  // This state remembers which menu item is currently clicked
  const [activeItem, setActiveItem] = useState('overview');

  // The master list of our sidebar links and the IDs they target
  const navItems = [
    { id: 'overview', label: 'Practice Overview' },
    { id: 'about', label: 'About the Firm' },
    { id: 'practice-areas', label: 'Practice Areas' },
    { id: 'expertise', label: 'Our Expertise' },
    { id: 'why-us', label: 'Why Choose Us' },
    { id: 'insights', label: 'Key Insights' },
    { id: 'testimonials', label: 'Client Testimonials' }, // Added to the list!
    { id: 'team', label: 'Our Team' },
    { id: 'contact', label: 'Contact Information' },
  ];

  // The function that performs the smooth scroll
  const handleScroll = (id) => {
    setActiveItem(id); // Make the clicked button turn green
    
    const element = document.getElementById(id);
    if (element) {
      // The magic native DOM command for smooth scrolling
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <aside className="sidebar">
      <div className="brand-section">
        <h2>Definites</h2>
        <p className="tagline">"Statute to Strategy"</p>
      </div>

      <nav className="nav-menu">
        <ul>
          {/* We "map" over the list above to generate the HTML automatically */}
          {navItems.map((item) => (
            <li 
              key={item.id} 
              className={activeItem === item.id ? 'active' : ''}
              onClick={() => handleScroll(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>

      <div className="profile-section">
        <p className="profile-name">Pradeep Kaura</p>
        <p className="profile-title">Ex. IRS, CBIC, Customs & GST</p>
      </div>
    </aside>
  );
};

export default Sidebar;