import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Homepage from "./Components/Pages/Homepage";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="page-container">
      <Header />
      <Homepage></Homepage>
      <Footer />
    </div>
  );
}

export default App;
