'use client';

export default function Contact() {


  return (
    <section id="contact">
      <span className="heading-sm display-block" data-aos="fade-up">CONTACT</span>
      <h2 className="heading" data-aos="fade-up" data-aos-delay="100">Let&apos;s Work Together</h2>
      
      <div className="contact-container">
        <div data-aos="fade-right">
          <p className="contact-intro">Punya proyek atau ingin berdiskusi? Saya siap membantu Anda mewujudkan ide menjadi solusi berbasis data spasial yang tepat dan berdampak.</p>
          
          <div className="contact-info-list" style={{ marginBottom: '3.5rem' }}>
            <div className="contact-info-item">
              <i className='bx bx-map'></i>
              <div><h4>Location</h4><p>Indonesia</p></div>
            </div>
            <div className="contact-info-item">
              <i className='bx bx-envelope'></i>
              <div><h4>Email</h4><p>firdausikram17@gmail.com</p></div>
            </div>
            <div className="contact-info-item">
              <i className='bx bx-phone'></i>
              <div><h4>Phone</h4><p>+62 85770029172</p></div>
            </div>
          </div>

          <div className="contact-socials-block">
            <h4 className="contact-subheading">Connect With Me</h4>
            <div className="contact-social-icons">
              <a href="https://www.linkedin.com/in/firdaus-ikram-86405b2a6" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile"><i className='bx bxl-linkedin'></i></a>
              <a href="https://www.instagram.com/firdausikram_17" target="_blank" rel="noreferrer" aria-label="Instagram Profile"><i className='bx bxl-instagram'></i></a>
              <a href="https://wa.me/6285770029172" target="_blank" rel="noreferrer" aria-label="WhatsApp Contact"><i className='bx bxl-whatsapp'></i></a>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub Profile"><i className='bx bxl-github'></i></a>
            </div>
          </div>

          <div className="contact-glass-card">
            <div className="contact-available">
              <h4 className="contact-subheading-blue">Available For</h4>
              <div className="available-grid">
                <div className="available-item"><i className='bx bx-check-circle'></i> GIS Analysis</div>
                <div className="available-item"><i className='bx bx-check-circle'></i> Drone Survey</div>
                <div className="available-item"><i className='bx bx-check-circle'></i> Urban Planning</div>
                <div className="available-item"><i className='bx bx-check-circle'></i> Environmental Consulting</div>
              </div>
            </div>
            <div className="contact-stats-grid">
              <div className="contact-stat">
                <i className='bx bx-briefcase'></i>
                <div>
                  <h4>3+</h4>
                  <p>Years Experience</p>
                </div>
              </div>
              <div className="contact-stat">
                <i className='bx bx-layer'></i>
                <div>
                  <h4>50+</h4>
                  <p>Projects Completed</p>
                </div>
              </div>
              <div className="contact-stat">
                <i className='bx bx-group'></i>
                <div>
                  <h4>50+</h4>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div data-aos="fade-left">
          <div className="contact-form" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '350px' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(0, 229, 255, 0.1)', color: 'var(--neon-blue)', fontSize: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid rgba(0, 229, 255, 0.2)' }}>
              <i className='bx bx-chat'></i>
            </div>
            <h3 style={{color: '#fff', fontSize: '1.6rem', marginBottom: '1rem', textAlign: 'center', fontWeight: '600'}}>Tertarik Bekerja Sama?</h3>
            <p style={{color: 'var(--text-muted)', textAlign: 'center', marginBottom: '2.5rem', fontSize: '1.1rem', maxWidth: '400px', lineHeight: '1.6'}}>
              Mari diskusikan ide dan kebutuhan proyek Anda. Klik tombol di bawah ini untuk terhubung langsung.
            </p>
            <a href="https://wa.me/6285770029172?text=Halo%20Firdaus%2C%20saya%20ingin%20berdiskusi%20lebih%20lanjut%20tentang%20proyek%20saya." target="_blank" rel="noreferrer" className="btn btn-primary form-submit-btn" style={{ justifyContent: 'center', padding: '1.2rem 2.5rem', fontSize: '1.1rem', borderRadius: '30px' }}>
              Kirim Pesan (WhatsApp) <i className='bx bxl-whatsapp' style={{ marginLeft: '0.5rem', fontSize: '1.3rem' }}></i>
            </a>
            <div className="contact-privacy" style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.9rem' }}>
              <i className='bx bx-check-shield'></i> Pesan langsung terkirim ke WhatsApp pribadi saya.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}