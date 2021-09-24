import {
  GET_ALL_PROFILES, PROFILES_PENDING, PROFILES_ERROR,
  GET_SINGLE_PROFILE, CREATE_PROFILE, UPDATE_PROFILE, DELETE_PROFILE,
} from '../constants/constants';


export const getAllProfiles = profilesList => ({
  type: GET_ALL_PROFILES,
  profilesList,
});

export const getSingleProfile = profile => ({
  type: GET_SINGLE_PROFILE,
  profile,
});

export const createProfile = profile => ({
  type: CREATE_PROFILE,
  profile
});

export const updateProfile = (id, profile) => ({
  type: UPDATE_PROFILE,
  profile,
  id
});

export const deleteProfile = id => ({
  type: DELETE_PROFILE,
  id
});

export const profilesError = error => ({
  type: PROFILES_ERROR,
  error,
});

export const profilesPending = () => ({
  type: PROFILES_PENDING,
});