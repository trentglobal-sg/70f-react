import "./App.css";
export default function App() {
  return (<>

    <header>
      <nav>
        <div class="logo">Wanderlust</div>
        <ul>
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#packages">Packages</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main>
       <section className="hero">
        <h1>Discover Your Next Adventure</h1>
        <p>Explore the world with our curated travel experiences</p>
        <button className="cta-button">Start Planning</button>
      </section>
    </main>

  </>)
}
