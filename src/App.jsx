<<<<<<< HEAD
import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Expertise from './components/Expertise';
import Insights from './components/Insights';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Expertise />
        <Insights />
        <Testimonials />
        <Team />
        <Contact /> 
      </main>
    </div>
  );
};
=======
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />

      <main style={{ marginLeft: '280px', width: '100%', padding: '40px', maxWidth: '1200px' }}>
        
        {/* ADDED: id="overview" to the header */}
        <header id="overview" style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '38px', marginBottom: '8px' }}>Practice Overview</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>Welcome to the Definites Legal Practice Management System.</p>
        </header>

        <Dashboard />
        <Footer /> 

      </main>
    </div>
  );
}
>>>>>>> e24e8b235153d452eccf4fc91e2378d2df90125e

export default App;