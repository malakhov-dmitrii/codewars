const repeatedString = require("./repeatedString");

test("should ", () => {
  const r = repeatedString("jdiacikk", 899491);
  expect(r).toBe(112436);
});

test("should ", () => {
  const r = repeatedString("a", 1000000000000);
  expect(r).toBe(1000000000000);
});

test("should ", () => {
  const r = repeatedString("aba", 10);
  expect(r).toBe(7);
});

test("should ", () => {
  const r = repeatedString(
    "epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq",
    549382313570
  );
  expect(r).toBe(16481469408);
});
