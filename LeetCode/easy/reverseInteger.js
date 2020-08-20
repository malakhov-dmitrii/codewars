const reverse = (x) => {
  const s = String(x).replace(/0+$/g, "").split("").reverse().join("");

  if (x < 0) return Number(s.slice(0, s.length - 1) * -1);
  if (Number(s) > 0x7fffffff) return 0;
  return Number(s);
};

module.exports = reverse;
