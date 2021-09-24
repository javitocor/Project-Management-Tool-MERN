/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
import {
  initialStateProfiles,
  GET_ALL_PROFILES, PROFILES_PENDING, PROFILES_ERROR,
  GET_SINGLE_PROFILE, CREATE_PROFILE, UPDATE_PROFILE, DELETE_PROFILE,
} from '../constants/constants';

const profileReducer = (state = initialStateProfiles, action) => {
  switch (action.type) {
    case GET_ALL_PROFILES:
      return {
        ...state,
        pending: false,
        profilesList: action.profilesList,
      };
    case PROFILES_PENDING:
      return {
        ...state,
        pending: true,
      };
    case PROFILES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      }; 
    case GET_SINGLE_PROFILE:
      return {
        ...state,
        pending: false,
        profile: action.profile,
      };
    case CREATE_PROFILE:
      return {
        ...state,
        pending: false,
        profilesList: [...state.profilesList, action.profile],
        profile: action.profile,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        pending: false,
        profilesList: state.profilesList.map(profile => {
          profile._id === action.id ? profile = action.profile : profile
        }),
        profile: action.profile
      }; 
    case DELETE_PROFILE:
      return {
        ...state,
        pending: false,
        profilesList: state.profilesList.filter(profile => profile._id !== action.id),
        profile: {},
      }; 
    default:
      return state;
  }
};

export default profileReducer;