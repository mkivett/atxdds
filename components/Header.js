export default function Header({ title }) {
  return (
    <header className="section-header container-fluid">
      <section className="d-flex align-items-center">
        <a href="#" className="logo">
          <img className="logo_image" src="/atxdds-logo.svg" />
          <h3 className="m-0 text-uppercase">{title}</h3>
        </a>
      </section>

      <nav className="section-nav nav">
          <a href="/steve-parker-resume.pdf" target="_blank" className="nav-link" title="Résumé">
            <i className="fa-solid fa-file-lines"></i>
          </a>
          <a href="tel:8173128561" className="nav-link" title="Phone: 817-312-8561">
            <i className="fa-solid fa-phone"></i>
          </a>
          <a href="mailto:driller1207@gmail.com" className="nav-link" title="Email: driller1207@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a href="#section-footer" className="nav-link" title="Location: Central Texas">
            <i className="fa-solid fa-location-dot"></i>
          </a>
      </nav>

    </header>
  )  
}
