const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function sumFibs(num) {
    let result = 0;

    function fibonacci(num) {
        if (num < 1) {
            return 0
        }
        if (num === 1) {
            return 1
        }
        return fibonacci(num - 1) + fibonacci(num - 2)

    }
    for(let i = 0; i <= num; i++) {
        if (fibonacci(i) % 2 === 1 && fibonacci(i) < num) {
            result += fibonacci(i)
        }
    }
    return result
}

readline.question(`Enter the base number for fibonacci calculation: `, input =>  {
    const baseNum = parseInt(input);
    console.time(`fibonacci numbers for - ${baseNum}`);
    const result = sumFibs(baseNum);
    console.timeEnd(`fibonacci numbers for - ${baseNum}`);
    console.log(`Fibonnaci numbers result for base number ${baseNum} is - ${result}`);
})

