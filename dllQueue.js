class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}
//  1 - 2 - 3 - 4 
class dllQueue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    enqueue(data) {
        if (this.last === null) {
            this.last = new _Node(data, null, null);
            this.first = this.last;
        } else {
            let lastNode = this.last;
            this.last = new _Node(data, null, lastNode);
            lastNode.next = this.last;
        }
    }
    dequeue() {
        if (this.first === null) {
            return new Error('There are no items in the queue.');
        } else {
            let firstNode = this.first;
            this.first = this.first.next;
            this.first.previous = null;
            return firstNode.value;
        }
    }
}

function peek(queue) {
    return queue.first;
}

function isEmpty(queue) {
    if (queue.first === null) {
        return true;
    }
    return false;
}

function display(queue) {
    let node = queue.first;
    let display = [];
    while (node !== null) {
        display.push(node.value);
        node = node.next;
    }
    return display;
}

function main() {
    let DstarTrekQ = new dllQueue;
    DstarTrekQ.enqueue('Kirk');
    DstarTrekQ.enqueue('Spock');
    DstarTrekQ.enqueue('Uhura');
    DstarTrekQ.enqueue('Sulu');
    DstarTrekQ.enqueue('Checkov');

    DstarTrekQ.dequeue();
    DstarTrekQ.dequeue();

    console.log(display(DstarTrekQ));
}

main();