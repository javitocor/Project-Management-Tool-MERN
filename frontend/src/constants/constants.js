export const URL_BASIC = '/api/';

export const initialStateStacks = {
  error: null,
  pending: false,
  stacksList: [],
  stack: {},
};

export const GET_ALL_STACKS = 'GET_ALL_STACKS';
export const GET_SINGLE_STACK = 'GET_STACK';
export const CREATE_STACK = 'CREATE_STACK';
export const UPDATE_STACK = 'UPDATE_STACK';
export const DELETE_STACK = 'DELETE_STACK';
export const STACKS_ERROR = 'STACKS_ERROR';
export const STACKS_PENDING = 'STACKS_PENDING';

export const initialStateProjects = {
  error: null,
  pending: false,
  projectsList: [],
  project: {},
};

export const GET_ALL_PROJECTS = 'GET_ALL_PROJECTS';
export const PROJECTS_PENDING = 'PROJECTS_PENDING';
export const PROJECTS_ERROR = 'PROJECTS_ERROR';
export const GET_SINGLE_PROJECT = 'GET_PROJECT';
export const CREATE_PROJECT = 'CREATE_PROJECT';
export const UPDATE_PROJECT = 'UPDATE_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';

export const initialStateProfiles = {
  error: null,
  pending: false,
  profilesList: [],
  profile: {},
};

export const GET_ALL_PROFILES = 'GET_ALL_PROFILES';
export const PROFILES_PENDING = 'PROFILES_PENDING';
export const PROFILES_ERROR = 'PROFILES_ERROR';
export const GET_SINGLE_PROFILE = 'GET_PROFILE';
export const CREATE_PROFILE = 'CREATE_PROFILE';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const DELETE_PROFILE = 'DELETE_PROFILE';