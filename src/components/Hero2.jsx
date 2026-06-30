import daniImg from "/src/assets/dani.jpg";

export default function Hero2() {
  return (
    <header className="hero" id="home">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* ── Kolom Kiri: Avatar + Teks ── */}
          <div className="col-lg-6">
            {/* Avatar */}
            <div className="hero-avatar-wrap mb-4">
              <div className="hero-avatar-ring">
                <img
                  src={daniImg}
                  alt="Rahmat Hamdani"
                  className="hero-avatar-img"
                />
              </div>
              {/* Badge "online" menempel di pojok kanan bawah avatar */}
              <span
                className="hero-avatar-status"
                title="Tersedia untuk proyek baru"
              >
                {/* <span className="blip"></span> */}
              </span>
            </div>

            {/* Role badge */}
            {/* <span className="role-badge mb-3">
              <span className="blip"></span> introduction
            </span> */}

            <h1
              className="display-5 fw-bold mt-3 mb-3"
              style={{ fontFamily: "JetBrains Mono", lineHeight: "1.25" }}
            >
              Halo, Aku Rahmat Hamdani.{" "}
              <span style={{ color: "var(--str)" }}>Fullstack</span>{" "}
              <span style={{ color: "var(--fn)" }}>Developer</span> Full Time
              &amp; Freelance
            </h1>

            <p
              className="mb-4"
              style={{ color: "var(--muted)", maxWidth: "480px" }}
            >
              Rahmat Hamdani — Software Developer berfokus pada backend dan
              sistem terdistribusi. 3 tahun mengubah kebutuhan bisnis menjadi
              kode terintegrasi.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-term">
                <i className="fa-solid fa-terminal me-2"></i>lihat-projects.sh
              </a>
              <a href="#contact" className="btn btn-outline-term">
                hubungi saya →
              </a>
            </div>
          </div>

          {/* ── Kolom Kanan: Editor Window ── */}
          <div className="col-lg-6">
            <div className="editor-window">
              <div className="editor-titlebar">
                <div className="traffic">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="editor-tabs">
                  <div className="editor-tab active">developer.ts</div>
                  <div className="editor-tab">README.md</div>
                </div>
              </div>

              <div className="editor-body">
                <div className="editor-gutter">
                  {Array.from({ length: 15 }, (_, i) => (
                    <span key={i + 1}>{i + 1}</span>
                  ))}
                </div>

                <div className="editor-code">
                  <span style={{ color: "var(--cmt)" }}>// quick intro</span>
                  <br />
                  <span style={{ color: "var(--kw)" }}>interface</span>{" "}
                  <span style={{ color: "var(--fn)" }}>Engineer</span> {"{"}
                  <br />
                  <span className="ind">
                    name: <span style={{ color: "var(--str)" }}>string</span>;
                  </span>
                  <br />
                  <span className="ind">
                    role: <span style={{ color: "var(--str)" }}>string</span>;
                  </span>
                  <br />
                  <span className="ind">
                    location:{" "}
                    <span style={{ color: "var(--str)" }}>string</span>;
                  </span>
                  <br />
                  <span className="ind">
                    stack: <span style={{ color: "var(--str)" }}>string</span>
                    [];
                  </span>
                  <br />
                  {"}"}
                  <br />
                  <br />
                  <span style={{ color: "var(--kw)" }}>const</span> me
                  <span style={{ color: "var(--tag)" }}>:</span>{" "}
                  <span style={{ color: "var(--fn)" }}>Engineer</span> = {"{"}
                  <br />
                  <span className="ind">
                    name<span style={{ color: "var(--tag)" }}>:</span>{" "}
                    <span style={{ color: "var(--str)" }}>
                      "Rahmat Hamdani"
                    </span>
                    ,
                  </span>
                  <br />
                  <span className="ind">
                    role<span style={{ color: "var(--tag)" }}>:</span>{" "}
                    <span style={{ color: "var(--str)" }}>
                      "Fullstack Developer"
                    </span>
                    ,
                  </span>
                  <br />
                  <span className="ind">
                    location<span style={{ color: "var(--tag)" }}>:</span>{" "}
                    <span style={{ color: "var(--str)" }}>"Pekanbaru, ID"</span>
                    ,
                  </span>
                  <br />
                  <span className="ind">
                    stack<span style={{ color: "var(--tag)" }}>:</span> [
                    <span style={{ color: "var(--str)" }}>"Laravel"</span>,{" "}
                    <span style={{ color: "var(--str)" }}>"React"</span>,{" "}
                    <span style={{ color: "var(--str)" }}>"MySQL"</span>]
                  </span>
                  <br />
                  {"}"};<span className="cursor"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
