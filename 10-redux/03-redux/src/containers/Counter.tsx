import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { add, CounterAction, decrement, increment } from 'actions/counter';
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

const mapDispatchToProps = (dispatch: Dispatch<CounterAction>): DispatchProps =>
  bindActionCreators(
    {
      add,
      decrement,
      increment,
    },
    dispatch,
  );

export default connect<StateProps, DispatchProps, CounterProps>(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
