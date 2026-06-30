export default function Contact() {
  return (
    <>
      {/* <!-- CONTACT --> */}
      <section className="section" id="contact">
        <div className="container">
          <div className="section-head">
            <div className="section-eyebrow">contact.sh</div>
            <h2 className="section-title">
              Hubungi <span className="kw">Saya</span>
            </h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-7">
              <div className="contact-panel">
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="term-label prompt">nama</label>
                      <input
                        type="text"
                        className="form-control form-control-term"
                        placeholder="nama-anda"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="term-label prompt">email</label>
                      <input
                        type="email"
                        className="form-control form-control-term"
                        placeholder="anda@email.com"
                      />
                    </div>
                    <div className="col-12">
                      <label className="term-label prompt">pesan</label>
                      <textarea
                        className="form-control form-control-term"
                        rows="4"
                        placeholder="Ceritakan tentang proyek Anda…"
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-term">
                        <i className="fa-solid fa-paper-plane me-2"></i>
                        kirim-pesan.sh
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="contact-panel h-100">
                <div className="mb-4">
                  <div className="term-label">EMAIL</div>
                  <a href="mailto:bagas.pratama@email.com" className="mono">
                    rahmathamdani314@gmail.com
                  </a>
                </div>
                <div className="mb-4">
                  <div className="term-label">LOKASI</div>
                  <span
                    className="mono"
                    // style="color: var(--text)"
                    style={{
                      color: "var(--text)",
                    }}
                  >
                    Pekanbaru, Riau, Indonesia
                  </span>
                </div>
                <div>
                  <div className="term-label mb-2">SOSIAL MEDIA</div>
                  <a className="social-ico" href="#">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a className="social-ico" href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a className="social-ico" href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
