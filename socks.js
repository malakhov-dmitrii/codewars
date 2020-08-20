// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  const counter = {};
  let pairs = 0;

  for (let i = 0; i < ar.length; i++) {
    const sock = String(ar[i]);
    if (sock in counter) {
      counter[sock] += 1;
    } else {
      counter[sock] = 1;
    }

    if (counter[sock] % 2 === 0) pairs++;

    // console.log({ counter, pairs });
  }
  return pairs;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
