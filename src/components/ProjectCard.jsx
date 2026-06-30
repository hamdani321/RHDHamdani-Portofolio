export default function ProjectCard({
  projekName = "Nama Projek",
  deskripsi = "Deskrisp",
  technology = [],
  link = "#",
}) {
  return (
    <>
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
            invoice-engine/
          </div>
          <h3>{projekName}</h3>
          <p>{deskripsi}</p>
          <div className="mb-3">
            {technology.map((index, item) => {
              return (
                <span key={index} className="tech-pill">
                  {item}
                </span>
              );
            })}
          </div>
          <div className="project-links">
            <a href="#">
              <i className="fa-brands fa-github"></i> Kode
            </a>
            <a href={link}>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
              Demo
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
