const Stack = require("../lib/stack");
const Queue = require("../lib/queue");
/*
Time Complexity: ?
Space Complexity: ?
*/
const balanced = (string) => {
    if (string.length === 0) return true;

    let stack = new Stack;
    let hash = {
      '(' : ')',
      '[' : ']',
      '{' : '}'
    };

    for (let i = 0; i < string.length; i++) {
      if (string[i] === '(' || string[i] === '{' || string[i] === '[') {
        stack.push(string[i]);    
      } else if (hash[stack.pop()] !== string[i]) {
        return false;
      }
    };

    return stack.isEmpty() ? true : false;

}

/*
Time Complexity: ?
Space Complexity: ?
*/
const evaluatePostfix = (expr) => {
    let stack = new Stack;
    
}

exports.balanced = balanced;
exports.evaluatePostfix = evaluatePostfix;