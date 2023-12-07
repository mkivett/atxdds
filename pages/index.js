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

      <main className="container py-5">
        <Header title="Stephen L. Parker, DDS" />
        <p className="description">
          General Dentist with 41 yrs of experience in Comprehensive Dentistry.
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

      <section class="l-services mb-4">

        <div class="row bg-gradient">

          <div class="col-lg-5 d-flex flex-column align-items-center justify-content-center p-5">
            <figure class="">
              <h5 className="text-uppercase text-light">
                Restorative
              </h5>
              <p class="m-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus distinctio fuga explicabo, illum ex ut, at accusantium rem qui nemo incidunt nostrum suscipit voluptate atque rerum omnis deleniti autem doloremque.
              </p>
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
              <p class="m-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus distinctio fuga explicabo, illum ex ut, at accusantium rem qui nemo incidunt nostrum suscipit voluptate atque rerum omnis deleniti autem doloremque.
              </p>
            </figure>
          </div>

        </div>

        <div class="row bg-gradient">

          <div class="col-lg-5 d-flex flex-column align-items-center justify-content-center p-5">
            <figure class="">
              <h5 className="text-uppercase text-light">
                Esthetics
              </h5>
              <p class="m-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus distinctio fuga explicabo, illum ex ut, at accusantium rem qui nemo incidunt nostrum suscipit voluptate atque rerum omnis deleniti autem doloremque.
              </p>
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
              <p class="m-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus distinctio fuga explicabo, illum ex ut, at accusantium rem qui nemo incidunt nostrum suscipit voluptate atque rerum omnis deleniti autem doloremque.
              </p>
            </figure>
          </div>

        </div>

        <div class="row bg-gradient">

          <div class="col-lg-5 d-flex flex-column align-items-center justify-content-center p-5">
            <figure class="">
              <h5 className="text-uppercase text-light">
                Oral Surgery
              </h5>
              <p class="m-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus distinctio fuga explicabo, illum ex ut, at accusantium rem qui nemo incidunt nostrum suscipit voluptate atque rerum omnis deleniti autem doloremque.
              </p>
            </figure>
          </div>

          <div class="col-lg-7 p-0">
            <img class="image-cover" src="https://picsum.photos/seed/5/960/540.jpg?grayscale&blur=5" />
          </div>

        </div>

      </section>

      <Footer />

      <section class="l-background">

      </section>

    </div>
  )
}
