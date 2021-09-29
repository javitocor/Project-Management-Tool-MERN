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

export const CreateCall = (route, token, data) => async dispatch => {
  const url = `${URL_BASIC + route}`
  try {
    if(route==='stacks'){
      dispatch(stacks.stacksPending());
    } else if (route==='projects') {
      dispatch(projects.projectsPending());
    } else if (route==='profile'){
      dispatch(profile.profilesPending());
    }      

    const response = await fetch(`${url}/create`, {
      method: 'POST',
      headers: {
        'X-CSRF-Token': token,
      },
      body: data,
    });
    const newData = await response.json();
    if(route==='stacks'){
      dispatch(stacks.createStack(newData.stack));
    } else if (route==='projects') {
      dispatch(projects.createProject(newData.project));
    } else if (route==='profile'){
      dispatch(profile.createProfile(newData.profile));
    }    
    return newData;
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

export const UpdateCall = (route, token, data, id) => async dispatch => {
  const url = `${URL_BASIC + route}`
  try {
    if(route==='stacks'){
      dispatch(stacks.stacksPending());
    } else if (route==='projects') {
      dispatch(projects.projectsPending());
    } else if (route==='profile'){
      dispatch(profile.profilesPending());
    }      
    
    const response = await fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: {
        'X-CSRF-Token': token,
      },
      body: data,
    });
    const newData = await response.json();
    if(route==='stacks'){
      dispatch(stacks.updateStack(newData.stack, id));
    } else if (route==='projects') {
      dispatch(projects.updateProject(newData.project, id));
    } else if (route==='profile'){
      dispatch(profile.updateProfile(newData.profile, id));
    }    
    return newData;
  } catch (error) {
    console.log(error)
    if(route==='stacks'){
      dispatch(stacks.stacksError(error));
    } else if (route==='projects') {
      dispatch(projects.projectsError(error));
    } else if (route==='profile'){
      dispatch(profile.profilesError(error));
    } 
  }
};

export const DeleteCall = (route, token, id) => async dispatch => {
  const url = `${URL_BASIC + route}`
  try {
    if(route==='stacks'){
      dispatch(stacks.stacksPending());
    } else if (route==='projects') {
      dispatch(projects.projectsPending());
    } else if (route==='profile'){
      dispatch(profile.profilesPending());
    }      

    const response = await fetch(`${url}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': token,
      },
    });
    const newData = await response.json();
    if(route==='stacks'){
      dispatch(stacks.deleteStack(id));
    } else if (route==='projects') {
      dispatch(projects.deleteProject(id));
    } else if (route==='profile'){
      dispatch(profile.deleteProfile(id));
    }    
    return newData;
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