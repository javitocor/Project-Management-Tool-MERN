/* eslint-disable consistent-return */
import 'regenerator-runtime/runtime';
import { URL_BASIC } from '../constants/constants';
import * as stacks from '../actions/stacks';
import * as projects from '../actions/projects';
import * as profile from '../actions/profile';


export const AllCall = (route) => async dispatch => {
  const url = `${URL_BASIC + route}`;
  try {
    if(route==='stacks'){
      dispatch(stacks.stacksPending());
    } else if (route==='projects') {
      dispatch(projects.projectsPending());
    } else if (route==='profile'){
      dispatch(profile.profilesPending());
    }         

    const response = await fetch(url, { mode: 'cors'});
    const data = await response.json();
    if(route==='stacks'){
      dispatch(stacks.getAllStacks(data));
    } else if (route==='projects') {
      dispatch(projects.getAllProjects(data));
    } else if (route==='profile'){
      dispatch(profile.getAllProfiles(data));
    }     
    return data;
  } catch (error) {
    if(route==='stacks'){
      dispatch(stacks.stacksError(error));
    } else if (route==='projects') {
      dispatch(projects.projectsError(error));
    } else if (route==='profile'){
      dispatch(profile.profilesError(error));
    } 
  }
};

export const SingleCall = (route, id) => async dispatch => {
  const Url = `${URL_BASIC + route}`;
  try {
    if(route==='stacks'){
      dispatch(stacks.stacksPending());
    } else if (route==='projects') {
      dispatch(projects.projectsPending());
    } else if (route==='profile'){
      dispatch(profile.profilesPending());
    }      

    const response = await fetch(`${Url}/${id}`, { mode: 'cors' });
    const data = await response.json();
    if(route==='stacks'){
      dispatch(stacks.getSingleStack(data));
    } else if (route==='projects') {
      dispatch(projects.getSingleProject(data));
    } else if (route==='profile'){
      dispatch(profile.getSingleProfile(data));
    }     
    return data;
  } catch (error) {
    if(route==='stacks'){
      dispatch(stacks.stacksError(error));
    } else if (route==='projects') {
      dispatch(projects.projectsError(error));
    } else if (route==='profile'){
      dispatch(profile.profilesError(error));
    } 
  }
};