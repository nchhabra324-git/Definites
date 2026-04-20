import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-content">
      
      {/* 1. Added id="about" */}
      <section id="about" className="card about-card">
        <h3>About the Firm</h3>
        <p>We are a specialized law firm providing end-to-end legal and advisory services in indirect taxation, with a focus on GST and Customs law.</p>
        <p>Our practice combines deep regulatory expertise with practical business strategy, enabling clients to navigate complex tax frameworks efficiently. We serve a wide spectrum of clients—from emerging enterprises to large corporations—across diverse industries, with seamless Pan-India service delivery.</p>
      </section>

      {/* 2. Added id="practice-areas" and wrapped the grid */}
      <section id="practice-areas">
        <h3 className="section-title">Practice Areas</h3>
        <div className="services-grid">
          <div className="card service-card">
            <div className="card-accent green"></div>
            <h4>Customs Law Services</h4>
            <ul>
              <li><strong>Strategic Trade Advisory:</strong> Classification, valuation, and import/export structuring.</li>
              <li><strong>Operational Support:</strong> End-to-end import/export facilitation and logistics.</li>
              <li><strong>Litigation & Dispute Resolution:</strong> Port-level disputes and investigation representation.</li>
            </ul>
          </div>

          <div className="card service-card">
            <div className="card-accent orange"></div>
            <h4>GST Law Services</h4>
            <ul>
              <li><strong>Strategic Advisory:</strong> Statutory interpretation, tax planning, and preventive audits.</li>
              <li><strong>Dispute Resolution:</strong> Notice handling, audit defense, and anti-evasion matters.</li>
              <li><strong>Specialized Services:</strong> Advance rulings and supply chain tax structuring.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Added id="expertise" */}
      <section id="expertise" className="card expertise-card" style={{ marginTop: '30px' }}>
        <h3 className="section-title" style={{ marginBottom: '20px' }}>Our Expertise</h3>
        <div className="expertise-content">
          <p className="lead-text">Our firm is led by a former Indian Revenue Service (IRS) officer, bringing first-hand insight into the functioning, interpretation, and enforcement of indirect tax laws.</p>
          <p>This experience provides a distinct advantage—understanding not just the legal framework, but how tax authorities actually evaluate transactions, raise objections, and pursue proceedings. This allows us to anticipate challenges early and position our clients with stronger, more defensible strategies.</p>
          <p>Supported by a team of advocates focused on GST and customs law, we combine regulatory insight with legal execution across advisory, compliance, and litigation.</p>
          
          <h5>Our expertise is particularly strong in:</h5>
          <ul className="expertise-list">
            <li>Interpreting complex GST and customs provisions in practical business contexts</li>
            <li>Handling departmental proceedings, audits, and investigations with strategic clarity</li>
            <li>Structuring transactions to reduce exposure to disputes</li>
            <li>Representing matters across adjudication and appellate forums</li>
          </ul>
          <p className="closing-text">As a newly established firm, we operate with high involvement, responsiveness, and precision, ensuring that every matter receives focused attention.</p>
        </div>
      </section>

      {/* 4. Added id="why-us" */}
      <section id="why-us" className="why-choose-us">
        <h3 className="section-title">Why Choose Us</h3>
        <div className="features-grid">
          <div className="feature-box"><strong>Technical Depth</strong><p>Insight from former IRS officers</p></div>
          <div className="feature-box"><strong>Strong Litigation Capability</strong><p>Experienced courtroom representation</p></div>
          <div className="feature-box"><strong>End-to-End Service</strong><p>From planning to final resolution</p></div>
          <div className="feature-box"><strong>Pan-India Reach</strong><p>Consistent service across jurisdictions</p></div>
          <div className="feature-box"><strong>Client-Focused Approach</strong><p>Customized solutions for each business</p></div>
          <div className="feature-box"><strong>Proactive Strategy</strong><p>Focus on prevention, not just reaction</p></div>
        </div>
      </section>

      {/* 5. Added id="insights" */}
      <section id="insights" className="insights-section">
        <h3 className="section-title" style={{ marginBottom: '20px' }}>Key Insights & Legal Updates</h3>
        <div className="insights-grid">
          <div className="card insight-card"><span className="insight-date">April 2026</span><h4>Recent GST Tribunal Precedents</h4><p>An analysis of recent appellate rulings affecting input tax credit claims for the manufacturing sector.</p><button className="text-btn">Read Briefing &rarr;</button></div>
          <div className="card insight-card"><span className="insight-date">March 2026</span><h4>Customs Valuation Challenges</h4><p>Navigating SVB investigations and compliance for related-party imports.</p><button className="text-btn">Read Briefing &rarr;</button></div>
        </div>
      </section>

      {/* 6. Added id="testimonials" */}
      <section id="testimonials" className="testimonials-section">
        <h3 className="section-title" style={{ marginBottom: '20px' }}>Client Testimonials</h3>
        <div className="testimonials-grid">
          <div className="card testimonial-card">
            <div className="quote-icon">“</div>
            <p className="testimonial-text">"The technical depth and strategic clarity that Definites brought to our GST adjudication proceedings were purely unmatched. Their proactive approach saved us from significant exposure."</p>
            <div className="testimonial-author"><strong>Director of Finance</strong><span>Large-Scale Manufacturing Entity</span></div>
          </div>
          <div className="card testimonial-card">
            <div className="quote-icon">“</div>
            <p className="testimonial-text">"Navigating SVB investigations seemed daunting until we engaged Definites. Mr. Kaura's prior departmental experience provides a perspective that traditional advisory firms simply cannot offer."</p>
            <div className="testimonial-author"><strong>Supply Chain Head</strong><span>Multinational Logistics Firm</span></div>
          </div>
        </div>
      </section>

      {/* 7. Added id="team" */}
      <section id="team" className="team-section">
        <h3 className="section-title" style={{ marginBottom: '20px' }}>Our Team</h3>
        <div className="team-layout-container">
          <div className="card team-card lead-profile">
            <div className="team-content">
              <h4>Pradeep Kaura</h4><span className="team-title">Principal Consultant | Ex. IRS, CBIC, Customs & GST</span>
              <p>With an extensive career in the Indian Revenue Service, Mr. Kaura leads the firm's strategic advisory and litigation practices. His deep understanding of departmental mechanics ensures that clients receive highly practical, preemptive, and robust legal counsel.</p>
            </div>
          </div>
          <div className="associates-grid">
            <div className="card team-card associate-profile"><div className="team-content"><h4>Rohan Mehta</h4><span className="team-title">Senior Associate | Litigation</span><p>Specializes in drafting appeals and representing clients before appellate authorities and tribunals in complex GST and adjudication matters.</p></div></div>
            <div className="card team-card associate-profile"><div className="team-content"><h4>Priya Sharma</h4><span className="team-title">Manager | GST Compliance</span><p>Leads the compliance vertical, ensuring accurate statutory filings, preventative health checks, and seamless navigation of departmental audits.</p></div></div>
            <div className="card team-card associate-profile"><div className="team-content"><h4>Vikram Desai</h4><span className="team-title">Consultant | Customs & FTP</span><p>Focuses on import-export structuring, SVB investigations, and maximizing duty optimization under the Foreign Trade Policy.</p></div></div>
          </div>
        </div>
      </section>

      {/* 8. Added id="contact" */}
      <section id="contact" className="contact-section">
        <div className="contact-grid">
          <div className="card contact-card">
            <h3>Chandigarh Office</h3>
            <p className="contact-desc">Reach out to schedule a consultation regarding your indirect tax and regulatory needs.</p>
            <div className="contact-details">
              <p><strong>📍 Address:</strong> 5811, Modern Housing Complex, Sec - 13, Chandigarh</p>
              <p><strong>📞 Phone:</strong> +91 99142 20811</p>
              <p><strong>✉️ Email:</strong> definitesolutions2024@gmail.com</p>
            </div>
          </div>
          <div className="card action-card">
            <h3>Client Portal</h3>
            <p>Existing clients can log in to upload case documents, track litigation status, and review billing.</p>
            <button className="primary-btn">Access Portal</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Dashboard;