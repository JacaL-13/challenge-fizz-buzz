// Write your solution below this line:

let divisors = [3, 5]
let words = ['fizz', 'buzz']

for (let i = 0; i < 50; i++) {
    let testNum = i + 1
    let logString = ''

    for (let j = 0; j < divisors.length; j++) {
        if (testNum % divisors[j] === 0) {
            logString = logString + words[j]
        }
    }

    if (logString === '') {
        console.log(testNum)
    } else {
        console.log(logString)
    }

}