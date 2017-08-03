const array1 = ([1, 2, 3, [4, 5, [6], [ ] ] ]) 

function flattenArray(arr) {
  return arr.reduce(function (flattened, x) {
    return flattened.concat(Array.isArray(x) ? flattenArray(x) : x);
  }, []);
}
console.log(flattenArray(array1))
