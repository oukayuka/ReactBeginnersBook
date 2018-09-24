import * as React from 'react';
import { Button, Card, Icon, Statistic } from 'semantic-ui-react';

const DEFAULT_LIMIT = 100;

export interface TimerProps {
  limit: number;
  timeLeft?: number;
  reset?: void;
}

const Timer: React.SFC<TimerProps> = ({
  limit = DEFAULT_LIMIT,
  timeLeft = DEFAULT_LIMIT,
  reset = () => {},
}) => (
  <Card>
    <Statistic>
      <br />
      <Statistic.Label>time</Statistic.Label>
      <Statistic.Value>{timeLeft}</Statistic.Value>
    </Statistic>
    <Card.Content>
      <Button color="red" fluid={true} onClick={reset}>
        <Icon name="redo" />
        Reset
      </Button>
    </Card.Content>
  </Card>
);

export default Timer;
