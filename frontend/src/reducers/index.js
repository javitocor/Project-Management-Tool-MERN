import { combineReducers } from 'redux';
import stackReducer from './stacks';
import profileReducer from './profile';
import projectReducer from './projects';

const rootReducer = combineReducers({
  stacks: stackReducer,
  profiles: profileReducer,
  projects: projectReducer,
});

export default rootReducer;