function balanced(string) {
    // implement stack to check balanced strings
    let matches = {
        '(': ')',
        '{': '}',
        '[': ']',
    }

    let stack = [];
    // if open, add to stack
    for (let char of string) {
        if (char in matches) {
            stack.push(char);
            continue;
        } else {
            let popped = stack.pop();
            if (matches[popped] === char) continue;
            else return false;
        }
    }

    if (stack.length) return false;
    return true;
}

function evaluatePostfix(expr) {
    let operations = {
        '+': add = (a, b) => a + b,
        '*': mult = (a, b) => a * b,
        '-': subtract = (a, b) => a - b,
        '/': divide = (a, b) => a / b,
    }
    
    let stack = [];
    let newNum = 0;

    for (let char of expr) {
        if (char in operations) {
            if (stack.length > 1) {
                let popA = +stack.shift();
                let popB = +stack.shift();
                newNum = Math.floor(operations[char](popA, popB));
            } else if (stack.length === 1) {
                let popped = +stack.shift();
                newNum = Math.floor(operations[char](newNum, popped));
            }
        } else {
            stack.push(char);
            continue;
        }
    }
    if (stack.length === 0) return newNum;
}

module.exports = { balanced, evaluatePostfix }