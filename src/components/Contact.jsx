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
                  <h4>5+</h4>
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
                  <h4>20+</h4>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div data-aos="fade-left">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <input type="text" className="form-input" placeholder="Your Name" />
              <input type="email" className="form-input" placeholder="Your Email" />
            </div>
            <input type="text" className="form-input" placeholder="Subject" style={{ marginBottom: '2.5rem', width: '100%' }} />
            <textarea className="form-input" placeholder="Your Message"></textarea>
            <button className="btn btn-primary form-submit-btn" style={{ width: '100%', justifyContent: 'center' }}>Send Message <i className='bx bx-send'></i></button>
            <div className="contact-privacy">
              <i className='bx bx-check-shield'></i> Your information is safe with me. I will get back to you as soon as possible.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}