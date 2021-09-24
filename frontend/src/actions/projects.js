import {
  GET_ALL_PROJECTS, PROJECTS_PENDING, PROJECTS_ERROR,
  GET_SINGLE_PROJECT, CREATE_PROJECT, UPDATE_PROJECT, DELETE_PROJECT,
} from '../constants/constants';


export const getAllProjects = projectsList => ({
  type: GET_ALL_PROJECTS,
  projectsList,
});

export const getSingleProject = project => ({
  type: GET_SINGLE_PROJECT,
  project,
});

export const createProject = project => ({
  type: CREATE_PROJECT,
  project
});

export const updateProject = (project, id) => ({
  type: UPDATE_PROJECT,
  project,
  id,
});

export const deleteProject = id => ({
  type: DELETE_PROJECT,
  id
});

export const projectsError = error => ({
  type: PROJECTS_ERROR,
  error,
});

export const projectsPending = () => ({
  type: PROJECTS_PENDING,
});