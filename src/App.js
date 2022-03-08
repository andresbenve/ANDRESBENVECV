import Screen from "./Screen.png";
import ScreenSpanish from "./ScreenSpanish.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Screen} alt="screen" height={400} className={App} />
        <img src={ScreenSpanish} alt="screen" height={400} className={App} />
      </header>
    </div>
  );
}

export default App;
