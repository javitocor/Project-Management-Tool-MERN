/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
import getStacksNames from './getStacksNames';
import countProjectStatus from './countProjectStatus';

function getProjectsPerStack(stacks, projects) {
  let count = [];
  let value = '';
  const arrStacks = getStacksNames(stacks);
  for (let i = 0; i < arrStacks.length; i++) {
    value = countProjectStatus(projects, arrStacks[i])
    count.push(value)
  }
  return count;
};

export default getProjectsPerStack;