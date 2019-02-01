

//https://medium.com/javascript-inside/safely-accessing-deeply-nested-values-in-javascript-99bf72a0855a
// I was going to use a loop and a temp variable, but this one seems to do the same with reduce...so that's what I'll use!
export const selectStateSlice = (path, obj) =>
  path.reduce((result, currentProperty) => (result && result[currentProperty]) ? result[currentProperty] : null, obj);