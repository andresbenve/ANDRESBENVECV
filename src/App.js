import Screen from "./Screen.png";
import ScreenSpanish from "./ScreenSpanish.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header" height={100}>
        <div>
          <h3>English | Spanish</h3>
        </div>
      </header>
      <div className="Space">
        <img src={Screen} alt="screen" height={700} />
        <img src={ScreenSpanish} alt="screen" height={700} />
      </div>
    </div>
  );
}

export default App;
