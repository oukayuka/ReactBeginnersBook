import * as React from 'react';
import { Button, Card, Icon, Statistic } from 'semantic-ui-react';

import './App.css';

const LIMIT = 60;

interface AppState {
  second: number;
}

class App extends React.Component<{}, AppState> {
  timerId: NodeJS.Timer;

  constructor(props: {}) {
    super(props);
    this.state = { second: LIMIT };
  }

  reset = () => this.setState({ second: LIMIT });

  tick = () => {
    this.setState({ second: this.state.second - 1 });
  };

  componentDidMount = () => {
    this.timerId = setInterval(this.tick, 1000);
  };

  componentDidUpdate = (prevProps: {}, prevState: AppState) => {
    if (this.state.second === 0) {
      this.reset();
    }
  };

  componentWillUnmount = () => {
    clearInterval(this.timerId);
  };

  render() {
    return (
      <div className="container">
        <header>
          <h1>タイマー</h1>
        </header>
        <Card>
          <Statistic>
            <br />
            <Statistic.Label>time</Statistic.Label>
            <Statistic.Value>{this.state.second}</Statistic.Value>
          </Statistic>
          <Card.Content>
            <Button color="red" fluid={true} onClick={this.reset}>
              <Icon name="redo" />
              Reset
            </Button>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default App;
