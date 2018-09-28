import * as React from 'react';

import ColorfulBeads from 'containers/ColorfulBeads';
import Counter from 'containers/Counter';
import './App.css';

const App: React.SFC = () => (
  <div className="container">
    <header>
      <h1>ビーズカウンター</h1>
    </header>
    <Counter />
    <ColorfulBeads />
  </div>
);

export default App;
