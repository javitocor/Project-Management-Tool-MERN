/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
import getStacksNames from './getStacksNames';

function getProjectsPerStack(stacks, projects) {
  let count = [];
  const arrStacks = getStacksNames(stacks);
  for (let i = 0; i < arrStacks.length; i++) { 
    var value = 0;   
    for (let j = 0; j < projects.length; j++){
      value += projects[j].stack.filter(stack=>stack.name === arrStacks[i]).length
    }
    count.push(value)
  }
  return count;
};

export default getProjectsPerStack;


    
    