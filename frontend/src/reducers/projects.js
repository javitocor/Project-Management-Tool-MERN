/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
import {
  initialStateProjects,
  GET_ALL_PROJECTS, PROJECTS_PENDING, PROJECTS_ERROR,
  GET_SINGLE_PROJECT, CREATE_PROJECT, UPDATE_PROJECT, DELETE_PROJECT,
} from '../constants/constants';

const projectReducer = (state = initialStateProjects, action) => {
  switch (action.type) {
    case GET_ALL_PROJECTS:
      return {
        ...state,
        pending: false,
        projectsList: action.projectsList,
      };
    case PROJECTS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case PROJECTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      }; 
    case GET_SINGLE_PROJECT:
      return {
        ...state,
        pending: false,
        project: action.project,
      };
    case CREATE_PROJECT:
      return {
        ...state,
        pending: false,
        projectsList: [...state.projectsList, action.project],
        project: action.project,
      };
    case UPDATE_PROJECT:
      return {
        ...state,
        pending: false,
        projectsList: state.projectsList.map(project => {
          project._id === action.id ? project = action.project : project
        }),
        project: action.project
      }; 
    case DELETE_PROJECT:
      return {
        ...state,
        pending: false,
        projectsList: state.projectsList.filter(project => project._id !== action.id),
        project: {},
      }; 
    default:
      return state;
  }
};

export default projectReducer;