export default function Header({ title }) {
  return (
    <header className="section-header container-fluid">
      <section className="d-flex align-items-center">
        <img class="logo" src="/atxdds-logo.svg" />
        <h3 className="m-0 text-uppercase text-primary">{title}</h3>
      </section>

      <nav className="section-nav nav">
          <a href="tel:8173128561" className="nav-link" title="Phone">
            <i class="fa-solid fa-phone"></i>
          </a>
          <a href="mailto:driller1207@gmail.com" className="nav-link" title="Email">
            <i class="fa-solid fa-envelope"></i>
          </a>
          <a href="https://maps.app.goo.gl/tSu9R4YaaApXQ2oX6" target="_blank" className="nav-link" title="Location: Central Texas">
            <i class="fa-solid fa-location-dot"></i>
          </a>
      </nav>

    </header>
  )  
}
