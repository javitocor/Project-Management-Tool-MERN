/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
function countProjectStatus(array, field) {
  const count = array.reduce((acc, cur) => cur[field] === field ? acc++ : acc, 0);
  return count;
};

export default countProjectStatus;