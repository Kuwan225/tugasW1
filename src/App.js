import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    count: 1,
  };
  addButton = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div className="App">
        {/* <header><Greeting name="lucky"/></header> */}
        {[...Array(this.state.count)].map(() => (
          <button onClick={this.addButton}>Klik Me</button>
        ))}
      </div>
    );
  }
}

export default App;
