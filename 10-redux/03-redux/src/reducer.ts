import { CounterAction, CounterActionType } from 'actions/counter';

export interface State {
  count: number;
}

export const initialState: State = { count: 0 };

const appReducer = (state: State, action: CounterAction) => {
  switch (action.type) {
    case CounterActionType.ADD:
      return {
        ...state,
        count: state.count + (action.amount || 0),
      };

    case CounterActionType.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case CounterActionType.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    default:
      return state;
  }
};

export default appReducer;
