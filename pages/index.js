import Head from 'next/head'
import Header from '@components/Header'
import Services from '@components/Services'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Stephen L. Parker, DDS</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Stephen L. Parker, DDS is a General Dentist in Central Texas with over 42 yrs of experience." />
      </Head>

      <Header title="Stephen L. Parker, DDS" />

      <main id="section-main" className="section-main container py-4">
        <p className="description">
          General Dentist with 42 yrs of experience in Comprehensive Dentistry.
        </p>
        <p>
          By focusing on family, community, and integrity, I have earned lifelong generations of patients.
        </p>
        <p>
          I now live in Austin with my wife, Dina.
        </p>

        <header id="section-locum-tenens" className="d-flex align-items-center justify-content-between">

          <h4 className="text-uppercase">
            Locum Tenens
          </h4>

          <h6 className="text-uppercase">
            <i className="fa-solid fa-location-dot"></i>&nbsp;&nbsp;Central Texas
          </h6>

        </header>

        <p>
          A current professional goal is to work as a Locum Tenens dentist with an upbeat team of fully trained auxiliary staff, helping me to be an effective "plug and play" dentist for Senior Dentists or Associates looking to take time off for C.E., Vacation, or unforeseen circumstances.
        </p>

        <a href="/steve-parker-resume.pdf" target="_blank" className="small text-uppercase">
            View My Résumé
        </a>

      </main>

      <Services />

      <Footer />

      <section className="section-background">

      </section>

    </div>
  )
}
