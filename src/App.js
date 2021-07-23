import "./components/Helper/typography/typography.css";
import './App.css';
import Content from "./components/content/content"

function App() {
  return (
    <div id="App-grid" className="App">
    <header ></header>
    <div id="content">
      <Content/>
    </div>
    <footer ></footer>
  </div>
  );
}

export default App;
