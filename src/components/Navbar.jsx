export default function Navbar() {
  return (
    <>
      {/* <!-- NAVBAR --> */}
      <nav className="navbar navbar-expand-lg sticky-top py-0">
        <div className="container">
          <div className="d-flex align-items-center w-100 py-2">
            <div className="traffic">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <a className="navbar-brand me-auto" href="#home">
              <span className="kw">const</span> <span className="fn">dev</span>{" "}
              = "Rahmat Hamdani";
            </a>
            <button
              className="navbar-toggler border-0 text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#nav"
            >
              <i
                className="fa-solid fa-bars"
                style={{
                  color: "var(--text)",
                }}
                // style="color: var(--text)"
              ></i>
            </button>
            <div className="collapse navbar-collapse" id="nav">
              <ul className="navbar-nav ms-auto nav-tabs-custom flex-row flex-wrap">
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    <span className="dot"></span>about.md
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#skills">
                    <span className="dot"></span>skills.json
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">
                    <span className="dot"></span>projects/
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#experience">
                    <span className="dot"></span>log.txt
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    <span className="dot"></span>contact.sh
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
