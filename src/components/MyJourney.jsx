import Stats from './Stats';
import JourneyMap from './JourneyMap';

export default function Education() {
  return (
    <section className="journey-section" id="myjourney">
      
      {/* Bagian Atas: Stats (Horizontal) */}
      <div className="stats-horizontal-wrapper" data-aos="fade-down">
        <Stats />
      </div>

      <div className="journey-content-container">

        {/* Kolom Kiri: My Journey (Riwayat Pendidikan) */}
        <div className="journey-box" data-aos="fade-right">
          <h2 className="heading journey-heading">My Journey</h2>

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

        {/* Kolom Kanan: Peta Riwayat Perjalanan */}
        <div className="map-box-wrapper" data-aos="fade-left">
          <JourneyMap />
        </div>

      </div>
      <div id="particles-js-education" className="particles-k3"></div>
    </section>
  );
}