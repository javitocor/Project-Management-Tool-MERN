/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
import {
  initialStateStacks,
  GET_ALL_STACKS, STACKS_PENDING, STACKS_ERROR,
  GET_SINGLE_STACK, CREATE_STACK, UPDATE_STACK, DELETE_STACK,
} from '../constants/constants';

const stackReducer = (state = initialStateStacks, action) => {
  switch (action.type) {
    case GET_ALL_STACKS:
      return {
        ...state,
        pending: false,
        stacksList: action.stacksList,
      };
    case STACKS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case STACKS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      }; 
    case GET_SINGLE_STACK:
      return {
        ...state,
        pending: false,
        stack: action.stack,
      };
    case CREATE_STACK:
      return {
        ...state,
        pending: false,
        stacksList: [...state.stacksList, action.stack],
        stack: action.stack,
      };
    case UPDATE_STACK:
      return {
        ...state,
        pending: false,
        stacksList: state.stacksList.map(stack => {
          stack._id === action.id ? stack = action.stack : stack
        }),
        stack: action.stack
      }; 
    case DELETE_STACK:
      return {
        ...state,
        pending: false,
        stacksList: state.stacksList.filter(stack => stack._id !== action.id),
        stack: {},
      }; 
    default:
      return state;
  }
};

export default stackReducer;