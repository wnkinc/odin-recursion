function fibs(n) {
  let fibArray = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) fibArray.push(0);
    if (i === 1) fibArray.push(1);
    if (i > 1) fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
  }
  return fibArray;
}

console.log(fibs(8));

function fibsRec(n, sequence = [0, 1]) {
  if (sequence.length === n) {
    return sequence;
  }

  const nextFib = sequence[sequence.length - 1] + sequence[sequence.length - 2];

  sequence.push(nextFib);

  return fibsRec(n, sequence);
}

console.log(fibsRec(8));
