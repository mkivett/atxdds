export default function Header({ title }) {
  return (
    <header className="section-header container-fluid">

      <h3 className="m-0 text-uppercase text-primary">{title}</h3>

      <img class="logo" src="/atxdds-logo.svg" />

    </header>
  )  
}
