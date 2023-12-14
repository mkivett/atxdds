export default function Header({ title }) {
  return (
    <header className="section-header container">
      <h1 className="title text-uppercase text-primary">{title}</h1>
      <img class="logo" src="/atxdds-logo.svg" />
    </header>
  )  
}
