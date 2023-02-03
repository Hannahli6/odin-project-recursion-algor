// write fibonacci using reuglar iteration
// make another function fibRec using recursion.

const fibs = (n) => {
  const array = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      array.push(0);
    } else if (i === 1) {
      array.push(1);
    } else {
      array.push(array[i - 1] + array[i - 2]);
    }
  }
  return array;
};


const fibRec = (n) => {
  if (n === 0) {
    return [0]
  }
  if (n === 1) {
    return [0, 1]
  }

  const arr = [0, 1]
  const fib = (n) => {
    if (n < 2) {
      return arr[n]
    }

    const res = fib(n-1) + fib(n-2)
    if (!arr[n]) {
      arr.push(res)
    }
    return res
  }

  fib(n)
  return arr
}

console.log(fibRec(3));
