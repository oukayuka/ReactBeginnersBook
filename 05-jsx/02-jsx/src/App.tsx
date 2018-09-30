import * as React from "react";
import "./App.css";

import logo from "./logo.svg";

class App extends React.Component {
  render() {
    const logoOptions = {
      alt: "logo",
      className: "App-logo",
      src: logo
    };
    const title = "こんにちはReact";
    const targets = ["World", "Kanae", "Yukina"];

    return (
      <div className="App">
        <header className="App-header">
          <img {...logoOptions} />
          {title && <h1 className="App-title">{title}</h1>}
        </header>
        {targets.map(target => (
          <p className="App-intro">Hello, {target}!</p>
        ))}
      </div>
    );
  }
}

export default App;
