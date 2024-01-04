export default function Footer() {
  return (
    <>
      <section className="section-footer">
        <footer className="container">

          <nav className="section-nav">
              <a href="tel:8173128561" className="" title="Phone">
                <i className="fa-solid fa-phone me-1"></i>817-312-8561
              </a>
              <br />
              <a href="mailto:driller1207@gmail.com" className="" title="Email">
                <i className="fa-solid fa-envelope me-1"></i>driller1207@gmail.com
              </a>
              <br />
              <a href="#section-main" className="" title="Location: Central Texas">
                <i className="fa-solid fa-location-dot me-1"></i>Central Texas
              </a>
          </nav>

          <img
            src="/images/stephen-parker--portrait.svg"
            alt="Stephen L Parker, DDS"
            className="section-portrait"
          />

        </footer>
      </section>
    </>
  )
}
