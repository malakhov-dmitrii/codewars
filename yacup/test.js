function* sort(input) {
	let start = 1;
	while (start <= input.length / 3) {
		start = 3 * start + 1;
	}

	while (start > 0) {
		console.log('=======while========');
		for (let i = start; i <= input.length; i += start / 2) {
			console.log('=======for i========');
			for (let j = i; j > 0 && input[j] < input[j - start]; j -= start + 1) {
				console.log('=======for j========');
				console.log(input[j], input[j - start], {j});
				const element = input[j];
				input[j] = input[j - start];
				input[j - start] = element;
			yield input;
			}
		}
		start = --start / 3;
	}
	return input;
}

const r = sort([2, 1, 7, 8, 3, 50,1,2,3,4,5,6,3,2,1,2,3,4,5]);

let i = r.next();
while (!i.done) {
	i = r.next();
}

console.log(i.value);

module.exports = sort;
