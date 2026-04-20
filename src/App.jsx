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

export default App;