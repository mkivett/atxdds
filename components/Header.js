export default function Header({ title }) {
  return (
    <header className="section-header container-fluid">

      <h3 className="m-0 text-uppercase text-primary">{title}</h3>

      <nav className="section-nav nav small text-uppercase">
          <a href="tel:8173128561" className="nav-link">
              Call
          </a>
          <a href="mailto:driller1207@gmail.com" className="nav-link">
              Email
          </a>
      </nav>

      <img class="logo" src="/atxdds-logo.svg" />

    </header>
  )  
}
