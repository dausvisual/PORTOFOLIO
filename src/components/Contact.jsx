export default function Contact() {
  return (
    <section id="contact">
      <span className="heading-sm display-block" data-aos="fade-up">CONTACT</span>
      <h2 className="heading" data-aos="fade-up" data-aos-delay="100">Let&apos;s Work Together</h2>
      <div className="contact-container">
        <div data-aos="fade-right">
          <p className="contact-intro">Punya proyek atau ingin berdiskusi? Saya siap membantu Anda.</p>
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
        
        <form className="contact-form" onSubmit={(e) => e.preventDefault()} data-aos="fade-left">
          <div className="input-group">
            <input type="text" className="form-input" placeholder="Your Name" />
            <input type="email" className="form-input" placeholder="Your Email" />
          </div>
          <input type="text" className="form-input form-input-subject" placeholder="Subject" />
          <textarea className="form-input" placeholder="Your Message"></textarea>
          <button className="btn btn-primary form-submit-btn">Send Message <i className='bx bx-send'></i></button>
        </form>
      </div>
    </section>
  );
}