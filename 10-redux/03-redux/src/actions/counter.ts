export enum CounterActionType {
  ADD = 'ADD',
  DECREMENT = 'DECREMENT',
  INCREMENT = 'INCREMENT',
}

export interface CounterAction {
  type: CounterActionType;
  amount?: number;
}

export const add = (amount: number): CounterAction => ({
  amount,
  type: CounterActionType.ADD,
});

export const decrement = (): CounterAction => ({
  type: CounterActionType.DECREMENT,
});

export const increment = (): CounterAction => ({
  type: CounterActionType.INCREMENT,
});
