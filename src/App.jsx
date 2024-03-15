import Fact from "./components/CatFact/Fact";
import PersoneAge from "./components/PersoneAge/PersoneAge";

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="app__wrapper">
          <Fact />
          <PersoneAge />
        </div>
      </div>
    </div>
  );
}

export default App;
