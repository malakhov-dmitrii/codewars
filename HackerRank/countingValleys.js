const countingValleys = (n, s) => {
  const path = s.split("");

  let level = 0;
  let valleys = 0;

  for (let i = 0; i < path.length; i++) {
    const step = path[i];
    if (step === "U") level++;
    if (step === "D") level--;

    if (step === "U" && level === 0) {
      valleys++;
    }
  }
  return valleys;
};

console.log(countingValleys(8, "UDDDUDUU"));
