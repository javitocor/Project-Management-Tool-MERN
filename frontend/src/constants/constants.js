export const URL_BASIC = '/api/';

export const initialStateStacks = {
  error: null,
  pending: false,
  stacksList: [],
  stack: {},
};

export const GET_ALL_STACKS = 'GET_ALL_STACKS';
export const GET_ALL_STACKS_PENDING = 'GET_ALL_STACKS_PENDING';
export const GET_ALL_STACKS_ERROR = 'GET_ALL_STACKS_ERROR';
export const GET_SINGLE_STACK = 'GET_STACK';
export const GET_SINGLE_STACK_PENDING = 'GET_STACK_PENDING';
export const GET_SINGLE_STACK_ERROR = 'GET_STACK_ERROR';

export const initialStateProjects = {
  error: null,
  pending: false,
  projectsList: [],
  project: {},
};

export const GET_ALL_PROJECTS = 'GET_ALL_PROJECTS';
export const GET_ALL_PROJECTS_PENDING = 'GET_ALL_PROJECTS_PENDING';
export const GET_ALL_PROJECTS_ERROR = 'GET_ALL_PROJECTS_ERROR';
export const GET_SINGLE_PROJECT = 'GET_PROJECT';
export const GET_SINGLE_PROJECT_PENDING = 'GET_PROJECT_PENDING';
export const GET_SINGLE_PROJECT_ERROR = 'GET_PROJECT_ERROR';

export const initialStateProfile = {
  error: null,
  pending: false,
  profilesList: [],
  profile: {},
};

export const GET_ALL_PROFILES = 'GET_ALL_PROFILES';
export const GET_ALL_PROFILES_PENDING = 'GET_ALL_PROFILES_PENDING';
export const GET_ALL_PROFILES_ERROR = 'GET_ALL_PROFILES_ERROR';
export const GET_SINGLE_PROFILE = 'GET_PROFILE';
export const GET_SINGLE_PROFILE_PENDING = 'GET_PROFILE_PENDING';
export const GET_SINGLE_PROFILE_ERROR = 'GET_PROFILE_ERROR';