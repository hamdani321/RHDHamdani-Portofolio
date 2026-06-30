export default function Hero() {
  return (
    <>
      {/* <!-- HERO --> */}
      <header className="hero" id="home">
        <div className="container">
          <img src="/src/assets/dani.jpg" alt="" />
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="role-badge mb-3">
                <span className="blip"></span> introdcution
              </span>
              <h1
                className="display-5 fw-bold mt-3 mb-3"
                style={{
                  fontFamily: "JetBrains Mono",
                  lineHeight: "1.25",
                }}
                // style='font-family: "JetBrains Mono"; line-height: 1.25'
              >
                Halo, Aku Rahmat Hamdani.
                <span
                  // style="color: var(--str)"
                  style={{
                    color: "var(--str)",
                  }}
                >
                  {" "}
                  Fullstack
                </span>{" "}
                <span
                  // style="color: var(--str)"
                  style={{
                    color: "var(--fn)",
                  }}
                >
                  Developer
                </span>{" "}
                Full Time & Freelance
              </h1>
              <p
                className="mb-4"
                s
                // tyle="color: var(--muted); max-width: 480px"
                style={{
                  color: "var(--fn)",
                  maxWidth: "480px",
                }}
              >
                Rahmat Hamdani — Software Developer berfokus pada backend dan
                sistem terdistribusi. 3 tahun mengubah kebutuhan bisnis menjadi
                kode terintegrasi.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a href="#projects" className="btn btn-term">
                  <i className="fa-solid fa-terminal me-2"></i>
                  lihat-projects.sh
                </a>
                <a href="#contact" className="btn btn-outline-term">
                  hubungi saya →
                </a>
              </div>
            </div>

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
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span> <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                    <span>11</span>
                  </div>
                  <div className="editor-code">
                    <span
                      // style="color: var(--cmt)"
                      style={{
                        color: "var(--cmt)",
                      }}
                    >
                      // quick intro
                    </span>
                    <br />
                    <span
                      // style="color: var(--kw)"
                      style={{
                        color: "var(--kw)",
                      }}
                    >
                      interface
                    </span>
                    <span
                      // style="color: var(--fn)"
                      style={{
                        color: "var(--fn)",
                      }}
                    >
                      Engineer
                    </span>{" "}
                    <br />
                    <span className="ind">
                      name:{" "}
                      <span
                        // style="color: var(--str)"
                        style={{
                          color: "var(--str)",
                        }}
                      >
                        string
                      </span>
                      ;
                    </span>
                    <br />
                    <span className="ind">
                      role:{" "}
                      <span
                        // style="color: var(--str)"
                        style={{
                          color: "var(--str)",
                        }}
                      >
                        string
                      </span>
                      ;
                    </span>
                    <br />
                    <span className="ind">
                      location:
                      <span
                        // style="color: var(--str)"
                        style={{
                          color: "var(--str)",
                        }}
                      >
                        string
                      </span>
                      ;
                    </span>
                    <br />
                    <span className="ind">
                      stack:
                      <span
                        // style="color: var(--str)"
                        style={{
                          color: "var(--str)",
                        }}
                      >
                        string
                      </span>
                      [];
                    </span>
                    <br />
                    <br />
                    <br />
                    <span
                      // style="color: var(--kw)"
                      style={{
                        color: "var(--kw)",
                      }}
                    >
                      const
                    </span>{" "}
                    me
                    <span
                      // style="color: var(--tag)"
                      style={{
                        color: "var(--tag)",
                      }}
                    >
                      :
                    </span>
                    <span
                      // style="color: var(--fn)"
                      style={{
                        color: "var(--fn)",
                      }}
                    >
                      Engineer
                    </span>{" "}
                    = <br />
                    <span className="ind">
                      name
                      <span
                        // style="color: var(--tag)"
                        style={{
                          color: "var(--tag)",
                        }}
                      >
                        :
                      </span>
                      <span
                        // style="color: var(--str)"
                        style={{
                          color: "var(--str)",
                        }}
                      >
                        "Rahmat Hamdani"
                      </span>
                      ,
                    </span>
                    <br />
                    <span className="ind">
                      role
                      <span
                        // style="color: var(--tag)"
                        style={{
                          color: "var(--tag)",
                        }}
                      >
                        :
                      </span>
                      <span
                        // style="color: var(--str)"
                        style={{
                          color: "var(--str)",
                        }}
                      >
                        "Fullstack Developer"
                      </span>
                      ,
                    </span>
                    <br />
                    <span className="ind">
                      location
                      <span
                        // style="color: var(--tag)"
                        style={{
                          color: "var(--tag)",
                        }}
                      >
                        :
                      </span>
                      <span
                        // style="color: var(--str)"
                        style={{
                          color: "var(--str)",
                        }}
                      >
                        "Pekanbaru, ID"
                      </span>
                      ,
                    </span>
                    <br />
                    <span className="ind">
                      stack
                      <span
                        // style="color: var(--tag)"
                        style={{
                          color: "var(--tag)",
                        }}
                      >
                        :
                      </span>{" "}
                      [
                      <span
                        // style="color: var(--str)"
                        style={{
                          color: "var(--str)",
                        }}
                      >
                        "Laravel"
                      </span>
                      ,
                      <span
                        // style="color: var(--str)"
                        style={{
                          color: "var(--str)",
                        }}
                      >
                        "React"
                      </span>
                      ,
                      <span
                        // style="color: var(--str)"
                        style={{
                          color: "var(--str)",
                        }}
                      >
                        "MySQL"
                      </span>
                      ]
                    </span>
                    <br />;<span className="cursor"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
