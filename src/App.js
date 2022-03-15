import Screen from "./Screen.png";
import ScreenSpanish from "./ScreenSpanish.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h3>English | Spanish</h3>
        </div>
        <div className="Space">
          <img src={Screen} alt="screen" height={1100} className={App} />
          <img src={ScreenSpanish} alt="screen" height={1100} className={App} />
        </div>
      </header>
    </div>
  );
}

export default App;
