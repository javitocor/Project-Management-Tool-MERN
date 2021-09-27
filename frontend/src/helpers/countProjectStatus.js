/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
function countProjectStatus(array, field) {
  let count = 0;
  for(let i = 0; i < array.length; i++) {
    if (array[i].status === field){
      count++;
    }
  }
  return count;
};

export default countProjectStatus;