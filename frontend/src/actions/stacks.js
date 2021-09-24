import {
  GET_ALL_STACKS, STACKS_PENDING, STACKS_ERROR,
  GET_SINGLE_STACK, CREATE_STACK, UPDATE_STACK, DELETE_STACK,
} from '../constants/constants';


export const getAllStacks = stacksList => ({
  type: GET_ALL_STACKS,
  stacksList,
});

export const getSingleStack = stack => ({
  type: GET_SINGLE_STACK,
  stack,
});

export const createStack = stack => ({
  type: CREATE_STACK,
  stack
});

export const updateStack = (stack, id) => ({
  type: UPDATE_STACK,
  stack,
  id
});

export const deleteStack = id => ({
  type: DELETE_STACK,
  id
});

export const stacksError = error => ({
  type: STACKS_ERROR,
  error,
});

export const stacksPending = () => ({
  type: STACKS_PENDING,
});