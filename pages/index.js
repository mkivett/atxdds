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

      <main className="container py-4">
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

        <h2>
          Locum Tenens
        </h2>

        <p>
          A current professional goal is to work as a Locum Tenens dentist with an upbeat team of fully trained auxiliary staff, helping me to be an effective "plug and play" dentist for Senior Dentists or Associates looking to take time off for C.E., Vacation, or unforeseen circumstances.
        </p>

        <h3 className="">
          Restorative
        </h3>

        <h3 className="">
          Prosthetics
        </h3>

        <h3 className="">
          Esthetics
        </h3>

        <h3 className="">
          Pediatrics
        </h3>

        <h3 className="">
          Oral Surgery
        </h3>

      </main>

      <Footer />

    </div>
  )
}
