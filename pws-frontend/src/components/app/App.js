import {Component} from "react";
import './App.css';
import Header from "../header/Header";

class App extends Component {
  state = {
  };

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <Header />
          </header>
        </div>
    );
  }
}
export default App;