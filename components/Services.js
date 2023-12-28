export default function Services() {
  return (
    <>
      <section className="l-services container-fluid mb-4">

        <div className="row bg-gradient">

          <div className="col-sm-5 d-flex flex-column align-items-center justify-content-center p-5">
            <figure className="">
              <h5 className="text-uppercase text-light">
                Restorative
              </h5>
            </figure>
          </div>

          <div className="col-sm-7 p-0">
            <img className="object-fit-cover filter-grayscale mix-blend-mode-luminosity" src="/images/service-restorative.jpg" />
          </div>

        </div>

        <div className="row bg-gradient">

          <div className="col-sm-5 d-flex flex-column align-items-center justify-content-center p-5">
            <figure className="">
              <h5 className="text-uppercase text-light">
                Prosthetics
              </h5>
            </figure>
          </div>

          <div className="col-sm-7 p-0 order-sm-first">
             <img className="object-fit-cover filter-grayscale mix-blend-mode-luminosity" src="/images/service-prosthetics.jpg" />
          </div>

        </div>

        <div className="row bg-gradient">

          <div className="col-sm-5 d-flex flex-column align-items-center justify-content-center p-5">
            <figure className="">
              <h5 className="text-uppercase text-light">
                Esthetics
              </h5>
            </figure>
          </div>

          <div className="col-sm-7 p-0">
            <img className="object-fit-cover filter-grayscale mix-blend-mode-luminosity" src="/images/service-esthetics.jpg" />
          </div>

        </div>

        <div className="row bg-gradient">

          <div className="col-sm-5 d-flex flex-column align-items-center justify-content-center p-5">
            <figure className="">
              <h5 className="text-uppercase text-light">
                Pediatrics
              </h5>
            </figure>
          </div>

          <div className="col-sm-7 p-0 order-sm-first">
            <img className="object-fit-cover filter-grayscale mix-blend-mode-luminosity" src="/images/service-pediatrics.jpg" />
          </div>

        </div>

        <div className="row bg-gradient">

          <div className="col-sm-5 d-flex flex-column align-items-center justify-content-center p-5">
            <figure className="">
              <h5 className="text-uppercase text-light">
                Oral Surgery
              </h5>
            </figure>
          </div>

          <div className="col-sm-7 p-0">
            <img className="object-fit-cover filter-grayscale mix-blend-mode-luminosity" src="/images/service-oral-surgery.jpg" />
          </div>

        </div>

      </section>
    </>
  )
}
