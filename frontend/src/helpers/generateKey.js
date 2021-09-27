const generateKey = (pre) => {
  return `${ pre }_${ new Date().getTime() }`;
}

export default generateKey;