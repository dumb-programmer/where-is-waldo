import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import puzzleImage from "./assets/puzzle.jpg";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <img src={puzzleImage} alt="puzzle" className="puzzle-img"/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
