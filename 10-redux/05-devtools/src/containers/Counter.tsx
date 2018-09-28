import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Action } from 'typescript-fsa';

import {
  add,
  CounterActionPayload,
  decrement,
  increment,
} from 'actions/counter';
import Counter, { CounterProps } from 'components/Counter';
import { State } from 'reducer';

interface StateProps {
  count: number;
}

interface DispatchProps {
  add: (amount: number) => void;
  decrement: () => void;
  increment: () => void;
}

const mapStateToProps = (state: State): StateProps => ({
  count: state.count,
});

const mapDispatchToProps = (
  dispatch: Dispatch<Action<CounterActionPayload>>,
): DispatchProps =>
  bindActionCreators(
    {
      decrement,
      increment,
      add: (amount: number) => add({ amount }),
    },
    dispatch,
  );

export default connect<StateProps, DispatchProps, CounterProps>(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
