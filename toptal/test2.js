const test1 = ["P>E","E>R","R>U"];
const test2 = ["I>N","A>I","P>A","S>P"];

const findWord = (arr) => {
    const r = {}
    // const r = {
    //     P: "E",
    //     E: "R",
    //     R: "U"
    // }
    const pointers = [];

    arr.forEach(letter => {
        const [curr, next] = letter.split(">");
        pointers.push(next);
        if (!r[curr]) r[curr] = next;
    })

    const startingLetter = Object.keys(r).find(i => !pointers.includes(i))

    let word = startingLetter;

    const a = Object.entries(r).length;

    for (let i = 0; i < a; i++) {
        console.log(r[startingLetter]);
        //  word += r[]        
    }
}
findWord(test2)