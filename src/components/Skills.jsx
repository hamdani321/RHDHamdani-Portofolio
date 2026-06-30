const Skills = () => {
  return (
    <>
      {/* <!-- SKILLS --> */}
      <section className="section" id="skills">
        <div className="container">
          <div className="section-head">
            <div className="section-eyebrow">skills.json</div>
            <h2 className="section-title">
              Tools &amp; <span className="kw">teknologi</span>
            </h2>
          </div>
          <div className="pkg-window p-4">
            <div className="skill-group-title">
              dependencies — bahasa &amp; backend
            </div>
            <div>
              <span className="badge-pkg">
                <i className="fa-brands fa-php"></i> PHP
                <span className="ver">^8.4</span>
              </span>
              <span className="badge-pkg">
                <i className="fa-brands fa-laravel"></i> Laravel
                <span className="ver">^8.4</span>
              </span>
              <span className="badge-pkg">
                <i className="fa-brands fa-node"></i> Node.js
                <span className="ver">^20</span>
              </span>
              <span className="badge-pkg">
                <i className="fa-brands fa-js"></i> Javascript
                <span className="ver">^3.12</span>
              </span>
              <span className="badge-pkg">
                <i className="fa-solid fa-database"></i> MySQL
                <span className="ver">^16</span>
              </span>
            </div>
            <div className="skill-group-title">dependencies — frontend</div>
            <div>
              <span className="badge-pkg">
                <i className="fa-brands fa-react"></i> React
                <span className="ver">^18</span>
              </span>

              <span className="badge-pkg">
                <i className="fa-brands fa-js"></i> Javascript
                <span className="ver">^5.4</span>
              </span>

              <span className="badge-pkg">
                <i className="fa-solid fa-code"></i> TypeScript
                <span className="ver">^5.4</span>
              </span>

              <span className="badge-pkg">
                <i className="fa-brands fa-bootstrap"></i> Bootstrap
                <span className="ver">^5.3</span>
              </span>
            </div>
            <div className="skill-group-title">
              devDependencies — infra &amp; tools
            </div>
            <div>
              <span className="badge-pkg">
                <i className="fa-brands fa-docker"></i> Docker
                <span className="ver">^25</span>
              </span>
              <span className="badge-pkg">
                <i className="fa-brands fa-aws"></i> AWS
              </span>
              <span className="badge-pkg">
                <i className="fa-brands fa-git-alt"></i> Git
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
