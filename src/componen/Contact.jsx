export default function Contact() {
  return (
    <section id="contact">
      <h5 className="heading-sm">CONTACT</h5>
      <h2 className="heading">Let&apos;s Work Together</h2>
      <div className="contact-container">
        <div>
          <p style={{fontSize: '1.5rem', color: 'var(--text-muted)', marginBottom: '4rem'}}>Punya proyek atau ingin berdiskusi? Saya siap membantu Anda.</p>
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
        
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <input type="text" className="form-input" placeholder="Your Name" />
            <input type="email" className="form-input" placeholder="Your Email" />
          </div>
          <input type="text" className="form-input" placeholder="Subject" style={{marginBottom: '2rem', width: '100%'}}/>
          <textarea className="form-input" placeholder="Your Message" style={{width: '100%'}}></textarea>
          <button className="btn btn-primary" style={{width: '100%', justifyContent: 'center'}}>Send Message <i className='bx bx-send'></i></button>
        </form>
      </div>
    </section>
  );
}