import ProjectCard from "./ProjectCard";

export default function Projects() {
  const dataProject = [
    {
      name: "Nama Project",
      deskripsi: "Deskripsi",
      technology: ["Go", "Java", "Laravel"],
    },
    {
      name: "Nama Project",
      deskripsi: "Deskripsi",
      technology: ["Go", "Java", "Laravel"],
    },
    {
      name: "Nama Project",
      deskripsi: "Deskripsi",
      technology: ["Go", "Java", "Laravel"],
    },
    {
      name: "Nama Project",
      deskripsi: "Deskripsi",
      technology: ["Go", "Java", "Laravel"],
    },
  ];

  return (
    <>
      {/* <!-- PROJECTS --> */}
      <section className="section" id="projects">
        <div className="container">
          <div className="section-head">
            <div className="section-eyebrow">projects/</div>
            <h2 className="section-title">
              Proyek <span className="kw">terpilih</span>
            </h2>
          </div>
          <div className="row g-4">
            {dataProject.map((index, item) => {
              return (
                <ProjectCard
                  key={index}
                  projekName={item.name}
                  deskripsi={item.deskripsi}
                  technology={item.technology}
                />
              );
            })}

            {/* <div className="col-md-6 col-lg-4">
              <div className="project-card">
                <div className="file-name">
                  <i
                    className="fa-regular fa-folder-open"
                    // style="color: var(--num)"
                    style={{
                      color: "var(--num)",
                    }}
                  ></i>
                  invoice-engine/
                </div>
                <h3>Sistem Penagihan Otomatis</h3>
                <p>
                  Platform invoicing untuk UKM dengan rekonsiliasi pembayaran
                  otomatis dan notifikasi real-time.
                </p>
                <div className="mb-3">
                  <span className="tech-pill">Go</span>
                  <span className="tech-pill">PostgreSQL</span>
                  <span className="tech-pill">Redis</span>
                </div>
                <div className="project-links">
                  <a href="#">
                    <i className="fa-brands fa-github"></i> Kode
                  </a>
                  <a href="#">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="project-card">
                <div className="file-name">
                  <i
                    className="fa-regular fa-folder-open"
                    // style="color: var(--num)"
                    style={{
                      color: "var(--num)",
                    }}
                  ></i>
                  realtime-chat/
                </div>
                <h3>Aplikasi Chat Real-time</h3>
                <p>
                  Chat multi-room dengan WebSocket, presence indicator, dan
                  riwayat pesan tersimpan.
                </p>
                <div className="mb-3">
                  <span className="tech-pill">Node.js</span>
                  <span className="tech-pill">React</span>
                  <span className="tech-pill">Socket.IO</span>
                </div>
                <div className="project-links">
                  <a href="#">
                    <i className="fa-brands fa-github"></i> Kode
                  </a>
                  <a href="#">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="project-card">
                <div className="file-name">
                  <i
                    className="fa-regular fa-folder-open"
                    // style="color: var(--num)"
                    style={{
                      color: "var(--num)",
                    }}
                  ></i>
                  ml-recommender/
                </div>
                <h3>Mesin Rekomendasi Produk</h3>
                <p>
                  Sistem rekomendasi berbasis collaborative filtering untuk
                  e-commerce dengan API ringan.
                </p>
                <div className="mb-3">
                  <span className="tech-pill">Python</span>
                  <span className="tech-pill">FastAPI</span>
                  <span className="tech-pill">Docker</span>
                </div>
                <div className="project-links">
                  <a href="#">
                    <i className="fa-brands fa-github"></i> Kode
                  </a>
                  <a href="#">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="project-card">
                <div className="file-name">
                  <i
                    className="fa-regular fa-folder-open"
                    // style="color: var(--num)"
                    style={{
                      color: "var(--num)",
                    }}
                  ></i>
                  devops-pipeline/
                </div>
                <h3>CI/CD Pipeline Internal</h3>
                <p>
                  Pipeline deployment otomatis multi-environment dengan rollback
                  satu klik dan audit log.
                </p>
                <div className="mb-3">
                  <span className="tech-pill">Kubernetes</span>
                  <span className="tech-pill">GitHub Actions</span>
                  <span className="tech-pill">AWS</span>
                </div>
                <div className="project-links">
                  <a href="#">
                    <i className="fa-brands fa-github"></i> Kode
                  </a>
                  <a href="#">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="project-card">
                <div className="file-name">
                  <i
                    className="fa-regular fa-folder-open"
                    // style="color: var(--num)"
                    style={{
                      color: "var(--num)",
                    }}
                  ></i>
                  task-board/
                </div>
                <h3>Papan Manajemen Tugas</h3>
                <p>
                  Kanban board kolaboratif dengan drag-and-drop, label, dan
                  integrasi kalender tim.
                </p>
                <div className="mb-3">
                  <span className="tech-pill">React</span>
                  <span className="tech-pill">TypeScript</span>
                  <span className="tech-pill">PostgreSQL</span>
                </div>
                <div className="project-links">
                  <a href="#">
                    <i className="fa-brands fa-github"></i> Kode
                  </a>
                  <a href="#">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="project-card">
                <div className="file-name">
                  <i
                    className="fa-regular fa-folder-open"
                    // style="color: var(--num)"
                    style={{
                      color: "var(--num)",
                    }}
                  ></i>
                  api-gateway/
                </div>
                <h3>Gateway API Terpadu</h3>
                <p>
                  Gateway dengan rate limiting, auth terpusat, dan observability
                  untuk 12+ microservice.
                </p>
                <div className="mb-3">
                  <span className="tech-pill">Go</span>
                  <span className="tech-pill">gRPC</span>
                  <span className="tech-pill">Redis</span>
                </div>
                <div className="project-links">
                  <a href="#">
                    <i className="fa-brands fa-github"></i> Kode
                  </a>
                  <a href="#">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    Demo
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
