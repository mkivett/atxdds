import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="py-5">
      <Head>
        <title>Stephen L. Parker, DDS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Stephen L. Parker, DDS" />

      <main className="container">
        <p className="description">
          General Dentist with 42 yrs of experience in Comprehensive Dentistry.
        </p>
        <p>
          By focusing on family, community, and integrity, I have earned lifelong generations of patients.
        </p>
        <p>
          I now live in NW Austin with my wife, Dina.
        </p>

        <h2 className="text-uppercase">
          Locum Tenens
        </h2>

        <p>
          A current professional goal is to work as a Locum Tenens dentist with an upbeat team of fully trained auxiliary staff, helping me to be an effective "plug and play" dentist for Senior Dentists or Associates looking to take time off for C.E., Vacation, or unforeseen circumstances.
        </p>

      </main>

      <section class="l-services container-fluid mb-4">

        <div class="row bg-gradient">

          <div class="col-lg-5 d-flex flex-column align-items-center justify-content-center p-5">
            <figure class="">
              <h5 className="text-uppercase text-light">
                Restorative
              </h5>
            </figure>
          </div>

          <div class="col-lg-7 p-0">
            <img class="image-cover" src="https://picsum.photos/seed/1/960/540.jpg?grayscale&blur=5" />
          </div>

        </div>

        <div class="row bg-gradient">

          <div class="col-lg-7 p-0">
              <img class="image-cover" src="https://picsum.photos/seed/2/960/540.jpg?grayscale&blur=5" />
          </div>

          <div class="col-lg-5 d-flex flex-column align-items-center justify-content-center p-5">
            <figure class="">
              <h5 className="text-uppercase text-light">
                Prosthetics
              </h5>
            </figure>
          </div>

        </div>

        <div class="row bg-gradient">

          <div class="col-lg-5 d-flex flex-column align-items-center justify-content-center p-5">
            <figure class="">
              <h5 className="text-uppercase text-light">
                Esthetics
              </h5>
            </figure>
          </div>

          <div class="col-lg-7 p-0">
            <img class="image-cover" src="https://picsum.photos/seed/3/960/540.jpg?grayscale&blur=5" />
          </div>

        </div>

        <div class="row bg-gradient">

          <div class="col-lg-7 p-0">
              <img class="image-cover" src="https://picsum.photos/seed/4/960/540.jpg?grayscale&blur=5" />
          </div>

          <div class="col-lg-5 d-flex flex-column align-items-center justify-content-center p-5">
            <figure class="">
              <h5 className="text-uppercase text-light">
                Pediatrics
              </h5>
            </figure>
          </div>

        </div>

        <div class="row bg-gradient">

          <div class="col-lg-5 d-flex flex-column align-items-center justify-content-center p-5">
            <figure class="">
              <h5 className="text-uppercase text-light">
                Oral Surgery
              </h5>
            </figure>
          </div>

          <div class="col-lg-7 p-0">
            <img class="image-cover" src="https://picsum.photos/seed/5/960/540.jpg?grayscale&blur=5" />
          </div>

        </div>

      </section>

      <Footer />

      <section class="section-background">

      </section>

    </div>
  )
}
