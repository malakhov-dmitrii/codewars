// Problem A. Triwizard Tournament
// In 1792 year, not four wizards took part in the Triwizard Tournament, as one might think, but just three. It is known that one of the tasks in this tournament was to catch a cockatrice. Unfortunately, the cockatrice then reared up, and all the judges who climbed to calm him down were injured. Therefore, this task had to be replaced with a regular run around the stadium.
// The names of the participants of the Tournament, unfortunately, have not been preserved, so, for convenience, let's call them a, b and c. From the legends about each pair of wizards, it is known which of them in the last task came to the finish line earlier, or that they came at the same time. Help restore the order in which the wizards came to the finish line.

// Input data format
// Three lines are entered.
// The first one contains which of a and b came first, in the following format: the first character is always a, the third character is b, and one of the characters >, < or =.
// The string a<b means that a came first, a>b means that b came first,
// a=b means they came at the same time.

// In the second line, in the same format, it is written who came first: a or c.
// In the third line, in the same format, it is written who came first: b or c.
// It is guaranteed that the input data is not inconsistent.

// Output format
// Print the characters a,b,c in the order in which the wizards came to the finish line — each next wizard must come either at the same time or later than the previous one. If two wizards arrived at the same time, they can be taken out in any order.
// Characters must be displayed in one line without spaces.

// Comment
// In the example 2 the correct answer is also cab.

// Data examples

// Example 1
// Input:
// a>b
// a>c
// b>c
// Output: cba

// Example 2
// Input:
// a=b
// a>c
// b>c
// Output: cba or cab

const solve = (a, b, c) => {
  if (a === '>') {
    if (b === '>') {
      return c + 'bca';
    }
    if (c === '>') {
      return 'cba';
    }
    return 'cba';
  }
  if (a === '=') {
    if (b === '>') {
      return 'cba';
    }
    if (c === '>') {
      return 'cba';
    }
    return 'cba';
  }
  if (b === '>') {
    if (c === '>') {
      return 'cba';
    }
    return 'cba';
  }
  return 'cba';
};

test('triwizard tournament', () => {
  expect(solve('a>b', 'a>c', 'b>c')).toBe('cba');
  expect(solve('a=b', 'a>c', 'b>c')).toBe('cba');
});
