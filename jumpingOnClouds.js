const jumpingOnClouds = (c) => {
  let steps = 0;

  for (let i = 0; i < c.length; i++) {
    const currCloud = c[i];
    const nextCloud = c[i + 1];
    const nextNextCloud = c[i + 2];

    if (nextNextCloud === 0) i += 1;
    if (nextCloud === undefined) break;
    steps++;

    console.log({ nextCloud, nextNextCloud, currCloud });
  }
  return steps;
};

console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]));
