import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="page-container">
      <Header />
      <main>
        <section className="hero-section">
          <h2>Welcome to Little Lemon</h2>
          <p>Fresh Mediterranean flavors.</p>
        </section>

        <section className="specials-section">
          <h2>Specials</h2>
          <div className="cards">
            <div className="card">Card 1</div>
            <div className="card">Card 2</div>
            <div className="card">Card 3</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
