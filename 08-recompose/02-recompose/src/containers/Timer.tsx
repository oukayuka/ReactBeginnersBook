import * as React from 'react';
import {
  compose,
  lifecycle,
  setDisplayName,
  StateHandler,
  StateHandlerMap,
  withStateHandlers,
} from 'recompose';

import Timer, { TimerProps } from 'components/Timer';

interface LocalState {
  timeLeft: number;
  timerId?: NodeJS.Timer;
}

type LocalStateHandler = {
  reset(): StateHandler<LocalState>;
  tick(): StateHandler<LocalState>;
  setTimerId(timerId: NodeJS.Timer): StateHandler<LocalState>;
} & StateHandlerMap<LocalState>;

type EnhancedTimerProps = TimerProps & LocalState & LocalStateHandler;

const EnhancedTimer: React.SFC<EnhancedTimerProps> = props => (
  <Timer {...props} />
);

const enhance = compose<EnhancedTimerProps, TimerProps>(
  setDisplayName('Timer'),
  withStateHandlers<LocalState, LocalStateHandler, TimerProps>(
    props => ({
      timeLeft: props.limit,
    }),
    {
      reset: (state, props) => () => ({
        ...state,
        timeLeft: props.limit,
      }),
      tick: (state, props) => () => ({
        ...state,
        timeLeft: state.timeLeft - 1,
      }),
      setTimerId: (state, props) => (timerId: NodeJS.Timer) => ({
        ...state,
        timerId,
      }),
    },
  ),
  lifecycle<EnhancedTimerProps, LocalState>({
    componentDidMount() {
      const { setTimerId, tick } = this.props;
      setTimerId(setInterval(tick, 1000));
    },
    componentDidUpdate() {
      const { timeLeft, reset } = this.props;
      if (timeLeft === 0) {
        reset();
      }
    },
    componentWillUnmount() {
      const { timerId } = this.props;
      if (timerId) {
        clearInterval(timerId);
      }
    },
  }),
);

export default enhance(EnhancedTimer);
