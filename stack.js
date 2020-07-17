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

1 - 3 - 5;

1 - 3 - 5; 

5; 

class stackQueue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    enqueue(data) {
        if(this.last === null) {
            this.first = new Stack;
            this.last = new Stack;
            this.first.push(data);
            this.last.push(data);
        } else {
            this.last.push(data);
            this.first = this.alterFirst(this.first, data);
        }
    }
    alterFirst(stack, newData) {
        let oldStack = [];
        let newStack = new Stack;
        while(stack.top !== null) {
            oldStack.push(stack.top.value);
            stack.pop();
        }
        newStack.push(newData);
        for (let i = (oldStack.length - 1); i > 0; i--) {
            newStack.push(oldStack[i]);
        }
        return newStack;
    }
}

function displayStackQueue(queue) {
    let stack = queue.last;
    console.log(queue);
    display(stack);
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
    console.log(stack);
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
    let expStack = new Stack;
    let expArr = expression.split('');
    expArr.forEach(char => expStack.push(char));

    let parCounter = 0;
    let outOfOrderMax = 0;

    // loop through the stack
    while (expStack.top !== null) {
        if (expStack.top.data === '(') {
            parCounter -= 1;
        } else if (expStack.top.data === ')') {
            parCounter += 1;
        }
        if (parCounter < -outOfOrderMax) {
            outOfOrderMax = -parCounter;
        }
        expStack.pop();
    }

    let message = '';
    // set result messages
    if (parCounter === 0) {
        message = 'You have the same number of "(" as ")".';
    } else if (parCounter < 0) {
        message = `You have ${-parCounter} too many "("s.`;
    } else if (parCounter > 0) {
        message = `You have ${parCounter} too many ")"s.`;
    }

    if (outOfOrderMax) {
        message += ` Your parentheses went out of order ${outOfOrderMax} times.`;
    }

    return message;


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

function sortStack(stack) {
    let newStack = new Stack;
    let largest = null;
    let prevLargest = null;
    let counter = 1;

    // find the length of the stack
    let length = 0;
    let node = stack.top;
    while (node !== null) {
        length++;
        node = node.next;
    }

    // loop through the stack
    for (let i = 0; i < length; i++) {
        largest = null;
        counter = 0;
        let node = stack.top;
        while (node !== null) { //  (first time, prevLargest = null)
            if (prevLargest === null) {
                if (largest === null) {
                    largest = node.data;
                    counter = 1;
                }
                if (node.data > largest) {
                    largest = node.data;
                    counter = 1;
                }
                if (node.data === largest) {
                    counter += 1;
                }
            } else { // prevLargest = 7;
                if (node.data < prevLargest && largest === null) {
                    largest = node.data;
                    counter = 1;
                }
                if (node.data < prevLargest && node.data > largest) {
                    largest = node.data;
                    counter = 1;
                }
                if (node.data === largest) {
                    counter += 1;
                }
            }
            // if (prevLargest === null) {
            //   largest = node.data;
            //   counter = 0;
            // }
            // if (largest === null) { // largest = 4
            //   largest = node.data;
            //   counter = 0;
            // }
            // if (prevLargest === null) {
            //   if (node.data > largest) {
            //     largest = node.data;
            //     counter = 0;
            //   }
            // } else {
            //   if (node.data > largest && node.data < prevLargest) {
            //     largest = node.data;
            //     counter = 0;
            //   }
            // }
            node = node.next;
        }
        for (let j = 0; j < counter; j++) {
            newStack.push(largest);
        }
        prevLargest = largest; // prev largest = 3
    }

    return newStack;
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


    // console.log(display(starTrek));
    // console.log(is_palindrome('racecar'));
    // console.log(matching_parentheses('()awegaag(aawe)a()'));
    // console.log(matching_parentheses('(ae(g)dsawse)))sd'));
    // console.log(matching_parentheses('(((as)v(    (daasd)'));
    // console.log(matching_parentheses('))fq)ad((qqwfqw('));

    // let unsorted = new Stack;
    // unsorted.push(4);
    // unsorted.push(7);
    // unsorted.push(3);
    // unsorted.push(4);
    // unsorted.push(6);
    // unsorted.push(4);
    // unsorted.push(1);
    // console.log(display(unsorted));
    // console.log(display(sortStack(unsorted)));

    let stkQueue = new stackQueue;
    stkQueue.enqueue(3);
    stkQueue.enqueue(5);
    stkQueue.enqueue(1);
    console.log(displayStackQueue(stkQueue));
}

main();
