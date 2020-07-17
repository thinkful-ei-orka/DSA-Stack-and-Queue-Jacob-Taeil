class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }
    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }
        let newNode = new _Node(data, this.top);
        this.top = newNode;
    }
    pop() {
        let topNode = this.top;
        this.top = topNode.next;
        return topNode.data;
    }
}

function peek(stack) {
    return stack.top;
}
function isEmpty(stack) {
    if (stack.top === null) {
        return true;
    }
    return false;
}
function display(stack) {
    let display = [];
    let node = stack.top;
    while (node !== null) {
        display.push(node.data);
        node = node.next;
    }
    return display;
}

function is_palindrome(s) {

    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').split('');
    let palindromeStack = new Stack;
    let bool = true;
    s.forEach(char => palindromeStack.push(char));
    s.forEach(char => {
        if(char !== peek(palindromeStack).data) {
            bool = false;
        }
        palindromeStack.pop();
    });
    return bool;
}

function matching_parentheses(expression) {
    // let parCount = {
    //     openingParentheses: 0,
    //     closingParentheses: 0,
    // };
    // let expStack = new Stack;
    // let expArr = expression.split('');
    // expArr.forEach(char => expStack.push(char));
    // while (expStack.top !== null) {
    //     if(parCount.openingParentheses > parCount.closingParentheses) {
    //       '(()'
    //     }
    //     if(expStack.top === '(') {
    //         parCount.openingParentheses = parCount.openingParentheses + 1;
    //     }
    //     if(expStack.top === ')') {
    //         parCount.closingParentheses = parCount.closingParentheses + 1;
    //     }
    // }
    // if (parCount.openingParentheses < parCount.closingParentheses) {
    //     return 'you are mising a "("';
    // }
    // if (parCount.openingParentheses > parCount.closingParentheses) {
    //     return 'you are mising a ")"';
    // }
    // return 'Good!';

}

function main() {
    let starTrek = new Stack;
    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');

    starTrek.pop();
    starTrek.pop();

    starTrek.push('Scotty');


    console.log(display(starTrek));
    console.log(is_palindrome('racecar'));
}

main();
