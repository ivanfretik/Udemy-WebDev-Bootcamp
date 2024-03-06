function fizzfuzz(max) {
    var output = [];

    for (let i = 1; i < max; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output.push("FizzFuzz!");
        } else if (i % 3 === 0) {
            output.push("Fizz");
        } else if (i % 5 === 0) {
            output.push("Fuzz");
        } else {
            output.push(i);
        }
    }
    return output;
}

console.log(fizzfuzz(1000))