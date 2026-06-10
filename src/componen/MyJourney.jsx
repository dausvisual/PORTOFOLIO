import Stats from './Stats'; // Memanggil Stats ke dalam sini

export default function Education() {
  return (
    <section className="journey-section" id="myjourney">
      <div className="journey-stats-container">
        
        {/* Kolom Kiri: My Journey (Riwayat Pendidikan) */}
        <div className="journey-box">
          <h2 className="heading" style={{ marginBottom: '3rem', fontSize: '2.5rem' }}>My Journey</h2>
          
          <div className="timeline-vertical"> 
            <div className="timeline-item-v"> 
              <div className="timeline-dot-v"></div> 
              <div className="timeline-content-v">
                <div className="timeline-date-v">2014 - 2017</div> 
                <a href="https://smpn5bulukumba.sch.id/index.php/home.html" target="_blank" rel="noreferrer">
                  <h3>SMP NEGERI 5 BULUKUMBA</h3> 
                </a>
              </div>
            </div>
            
            <div className="timeline-item-v"> 
              <div className="timeline-dot-v"></div>
              <div className="timeline-content-v">
                <div className="timeline-date-v">2017 - 2020</div>
                <a href="https://www.instagram.com/smanegeri8bulukumba/?hl=en" target="_blank" rel="noreferrer">
                  <h3>SMA NEGERI 8 BULUKUMBA</h3> 
                </a>
              </div>
            </div>

            <div className="timeline-item-v"> 
              <div className="timeline-dot-v"></div>
              <div className="timeline-content-v">
                <div className="timeline-date-v">2020 - 2024</div>
                <a href="https://www.instagram.com/umbulukumba_official/" target="_blank" rel="noreferrer">
                  <h3>UNIVERSITAS MUHAMMADIYAH BULUKUMBA</h3> 
                  <p>Teknik Perencanaan Wilayah dan Kota</p>
                </a>
              </div>
            </div>
            
            <div className="timeline-item-v"> 
              <div className="timeline-dot-v"></div> 
              <div className="timeline-content-v">
                <div className="timeline-date-v">Dalam Perencanaan</div>
                <h3>Studi Magister (S2)</h3>
                <p>Sedang dalam tahap persiapan akademik.</p>
              </div>
            </div>
            
            <div className="timeline-item-v"> 
              <div className="timeline-dot-v"></div>
              <div className="timeline-content-v">
                <div className="timeline-date-v">Dalam Perencanaan</div>
                <h3>Pendidikan Profesi Insinyur</h3>
                <p>Sedang dalam tahap persiapan akademik.</p>
              </div>
            </div>
            
            <div className="timeline-item-v"> 
              <div className="timeline-dot-v"></div>
              <div className="timeline-content-v">
                <div className="timeline-date-v">Target Studi</div>
                <h3>Studi Doktoral (S3)</h3>
                <p>Target pencapaian di masa mendatang.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Stats */}
        <div className="stats-box-wrapper">
          <Stats />
        </div>

      </div>
      <div id="particles-js-education" className="particles-wrapper"></div>
    </section>
  );
}