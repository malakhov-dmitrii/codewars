import * as fs from "fs";

const file = JSON.parse(fs.readFileSync("./puzzle.json", { encoding: "utf8" }));

let c = 0;
for (const str of file) {
  const [full, min, max, letter, pass] = str.match(
    /(\d{1,2})-(\d{1,2}) ([a-z]): ([a-zA-Z]+)/
  );

  const occur = pass
    .split("")
    .filter((i, idx) => (idx + 1 === +min || idx + 1 === +max) && i === letter);

  console.log({ min, max, letter, pass, occur });
  if (occur.length === 1) c++;
}
console.log({ c });
