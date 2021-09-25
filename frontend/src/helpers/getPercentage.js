function getPercentage(partialValue, totalValue){
  const per = (100 * partialValue) / totalValue;
  return `${per.toString()}%`;
};

export default getPercentage;