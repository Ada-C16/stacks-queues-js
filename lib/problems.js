const Stack = require("../lib/stack");
const Queue = require("../lib/queue");
/*
Time Complexity: ?
Space Complexity: ?
*/
const balanced = (string) => {
    // if string is empty return true
    if (string.length === 0) return true;

    //initialize stack
    let stack = new Stack;
    // create hasp map for brackets/parentheses
    let hash = {
      '(' : ')',
      '[' : ']',
      '{' : '}'
    };

    // scan each element of the string
    for (let i = 0; i < string.length; i++) {
      // if the element is an opener, push to the stack
      if (string[i] === '(' || string[i] === '{' || string[i] === '[') {
        stack.push(string[i]);    
      } else if (hash[stack.pop()] !== string[i]) {
        // else pop the stack, if that element is not the corresponding opener return false
        // otherwise continue the loop
        return false;
      }
    };

    // if the stack is empty, return true
    return stack.isEmpty() ? true : false;

}

/*
Time Complexity: ?
Space Complexity: ?
*/
const evaluatePostfix = (expr) => {
    let stack = new Stack;

    // scan each character in the expression
    for(let i=0;i<expr.length;i++) {
      let ch = expr[i];

      if (ch >= '0' && ch <= '9') {
        //convert string to integer
        stack.push(parseInt(ch, 10));
      } else {
        let val1 = stack.pop();
        let val2 = stack.pop();
        
        // switch case that runs through the possible operators
        switch (ch)
          {
              case '+':
              stack.push(val2 + val1);
              break;

              case '-':
              stack.push(val2 - val1);
              break;

              case '/':
              stack.push(parseInt(val2 / val1, 10));
              break;

              case '*':
              stack.push(val2 * val1);
              break;
          }
      }
    }
    return stack.pop();
}

exports.balanced = balanced;
exports.evaluatePostfix = evaluatePostfix;