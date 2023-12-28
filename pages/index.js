import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Stephen L. Parker, DDS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Stephen L. Parker, DDS" />

      <main className="container py-4">
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
            <i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp;Central Texas
          </h6>

        </header>

        <p>
          A current professional goal is to work as a Locum Tenens dentist with an upbeat team of fully trained auxiliary staff, helping me to be an effective "plug and play" dentist for Senior Dentists or Associates looking to take time off for C.E., Vacation, or unforeseen circumstances.
        </p>

        <a href="/steve-parker-resume.pdf" target="_blank" className="small text-uppercase">
            View My Résumé
        </a>

      </main>

      <section class="l-services container-fluid mb-4">

        <div class="row bg-gradient">

          <div class="col-sm-5 d-flex flex-column align-items-center justify-content-center p-5">
            <figure class="">
              <h5 className="text-uppercase text-light">
                Restorative
              </h5>
            </figure>
          </div>

          <div class="col-sm-7 p-0">
            <img class="object-fit-cover filter-grayscale mix-blend-mode-luminosity" src="/images/service-restorative.jpg" />
          </div>

        </div>

        <div class="row bg-gradient">

          <div class="col-sm-5 d-flex flex-column align-items-center justify-content-center p-5">
            <figure class="">
              <h5 className="text-uppercase text-light">
                Prosthetics
              </h5>
            </figure>
          </div>

          <div class="col-sm-7 p-0 order-sm-first">
             <img class="object-fit-cover filter-grayscale mix-blend-mode-luminosity" src="/images/service-prosthetics.jpg" />
          </div>

        </div>

        <div class="row bg-gradient">

          <div class="col-sm-5 d-flex flex-column align-items-center justify-content-center p-5">
            <figure class="">
              <h5 className="text-uppercase text-light">
                Esthetics
              </h5>
            </figure>
          </div>

          <div class="col-sm-7 p-0">
            <img class="object-fit-cover filter-grayscale mix-blend-mode-luminosity" src="/images/service-esthetics.jpg" />
          </div>

        </div>

        <div class="row bg-gradient">

          <div class="col-sm-5 d-flex flex-column align-items-center justify-content-center p-5">
            <figure class="">
              <h5 className="text-uppercase text-light">
                Pediatrics
              </h5>
            </figure>
          </div>

          <div class="col-sm-7 p-0 order-sm-first">
            <img class="object-fit-cover filter-grayscale mix-blend-mode-luminosity" src="/images/service-pediatrics.jpg" />
          </div>

        </div>

        <div class="row bg-gradient">

          <div class="col-sm-5 d-flex flex-column align-items-center justify-content-center p-5">
            <figure class="">
              <h5 className="text-uppercase text-light">
                Oral Surgery
              </h5>
            </figure>
          </div>

          <div class="col-sm-7 p-0">
            <img class="object-fit-cover filter-grayscale mix-blend-mode-luminosity" src="/images/service-oral-surgery.jpg" />
          </div>

        </div>

      </section>

      <Footer />

      <section class="section-background">

      </section>

    </div>
  )
}
