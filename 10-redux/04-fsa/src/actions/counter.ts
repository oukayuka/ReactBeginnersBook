import actionCreatorFactory from 'typescript-fsa';

export interface CounterActionPayload {
  amount: number;
}

const actionCreator = actionCreatorFactory();

export const add = actionCreator<CounterActionPayload>('ADD');
export const decrement = actionCreator('DECREMENT');
export const increment = actionCreator('INCREMENT');
