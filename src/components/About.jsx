export default function About() {
  return (
    <>
      {/* <!-- ABOUT --> */}
      <section className="section" id="about">
        <div className="container">
          <div className="section-head">
            <div className="section-eyebrow">about.md</div>
            <h2 className="section-title">
              Tentang <span className="kw">saya</span>
            </h2>
          </div>
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-7">
              <div className="about-card h-100">
                <p
                  // style="color: var(--text); font-size: 1.02rem"
                  style={{
                    color: "var(--text)",
                    fontSize: "1.02rem",
                  }}
                >
                  Saya seorang software engineer yang menikmati proses mengubah
                  masalah nyata menjadi sistem yang sederhana, cepat, dan mudah
                  dirawat. Berpengalaman bekerja di tim kecil maupun lintas
                  divisi, dari merancang arsitektur backend, membangun API,
                  hingga memastikan aplikasi tetap stabil setelah dirilis ke
                  pengguna.
                </p>
                <p
                  // style="color: var(--muted); font-size: 0.95rem"
                  style={{
                    color: "var(--muted)",
                    fontSize: "0.95rem",
                  }}
                >
                  Di luar coding, saya senang menulis catatan teknis, mengulik
                  tooling developer, dan berkontribusi kecil-kecilan ke proyek
                  open source.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-card h-100 d-flex">
                <div className="row text-center w-100 align-items-center">
                  <div className="col-4 stat">
                    <div className="num">5+</div>
                    <div className="lbl">tahun pengalaman</div>
                  </div>
                  <div className="col-4 stat">
                    <div className="num">32</div>
                    <div className="lbl">proyek selesai</div>
                  </div>
                  <div className="col-4 stat">
                    <div className="num">99.9%</div>
                    <div className="lbl">uptime rata-rata</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
