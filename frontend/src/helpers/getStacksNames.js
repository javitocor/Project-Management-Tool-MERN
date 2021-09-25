/* eslint-disable no-plusplus */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
function getStacksNames (stacks) {
  const arr = [];
  for(var i = 0; i < stacks.length; i++){
    arr.push(stacks[i].name)
  }
  return arr;
};

export default getStacksNames;