export default function Experience() {
  return (
    <>
      {/* <!-- EXPERIENCE --> */}
      <section className="section" id="experience">
        <div className="container">
          <div className="section-head">
            <div className="section-eyebrow">log.txt</div>
            <h2 className="section-title">
              Riwayat <span className="kw">kerja</span>
            </h2>
          </div>
          <div className="terminal">
            <div className="terminal-head">
              <i className="fa-solid fa-terminal me-2"></i>bagas@career — tail
              -f log.txt
            </div>
            <div className="terminal-body">
              <div className="log-line">
                <span className="ts">2023—now</span>
                <span className="lvl">[ACTIVE]</span>
                <span className="msg">
                  <span className="role">Senior Software Engineer</span> ·
                  <span className="co">PT Teknologi Nusantara</span>
                  <span className="desc">
                    Memimpin tim 4 orang membangun ulang sistem pembayaran,
                    menurunkan latensi rata-rata 40%.
                  </span>
                </span>
              </div>

              <div className="log-line">
                <span className="ts">2021—2023</span>
                <span className="lvl">[DONE]</span>
                <span className="msg">
                  <span className="role">Software Engineer</span> ·
                  <span className="co">Startup Logistik Cepat</span>
                  <span className="desc">
                    Membangun API tracking real-time yang melayani 200rb+
                    permintaan harian.
                  </span>
                </span>
              </div>

              <div className="log-line">
                <span className="ts">2019—2021</span>
                <span className="lvl">[DONE]</span>
                <span className="msg">
                  <span className="role">Junior Backend Developer</span> ·
                  <span className="co">Agensi Digital Kreasi</span>
                  <span className="desc">
                    Mengembangkan dan memelihara 10+ layanan backend untuk klien
                    e-commerce.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
