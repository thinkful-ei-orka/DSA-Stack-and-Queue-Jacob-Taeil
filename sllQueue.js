class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    enqueue(data) {
        if (this.last === null) {
            this.last = new _Node(data, null);
            this.first = this.last;
        } else {
            let lastNode = this.last;
            this.last = new _Node(data, null);
            lastNode.next = this.last;
        }
    }
    dequeue() {
        if (this.first === null) {
            return new Error('There are no items in the queue.');
        } else {
            let firstNode = this.first;
            this.first = this.first.next;
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
    let starTrekQ = new Queue;
    starTrekQ.enqueue('Kirk');
    starTrekQ.enqueue('Spock');
    starTrekQ.enqueue('Uhura');
    starTrekQ.enqueue('Sulu');
    starTrekQ.enqueue('Checkov');

    starTrekQ.dequeue();
    starTrekQ.dequeue();

    console.log(display(starTrekQ));
}

function squareDancing() {
    //queue will consist of people.  These people will be represented by their gender
    //need to write a function that either adds person to sparequeue, or pairs new person with the first person in the queue of opposite gender.
    let spareQueue = new Queue;
    checkSpareQueue(spareQueue, 'F');
    checkSpareQueue(spareQueue, 'F');
    checkSpareQueue(spareQueue, 'M');
    console.log(display(spareQueue));

}

function checkSpareQueue(spareQueue, newPerson) {
    if(isEmpty(spareQueue)) {
        spareQueue.enqueue(newPerson);
        return;
    }
    let firstInLine = spareQueue.first.value;
    if(newPerson !== firstInLine && firstInLine !== null) {
        spareQueue.dequeue();
    } else {
        spareQueue.enqueue(newPerson);
    }
}

function OphidianBank() {
    //queue representing the line for the teller
    //adding people to the line
    //checking paperwork (using randomizer:  1 / 4 people have incorrect paperwork)
    //add people with wrong paperwork to the back of the line
    //if correct paperwork, remove them from the front of the line
    let queue = new Queue;
    queue.enqueue('bob');
    queue.enqueue('billy');
    queue.enqueue('janet');
    queue.enqueue('jill');
    queue.enqueue('karen');
    checkPaperwork(queue);

}

function checkPaperwork(queue) {
    while(queue.first !== null) {
        //check paperwork of first person
        let firstInLine = queue.first;
        let randomNum = Math.floor(Math.random() * 4);
        if (randomNum !== 0) {
            //paperwork is correct.
            queue.dequeue();
            console.log('NEXT IN LINE');
        } else {
            //paperwork is incorrect. Send person to back of line
            queue.dequeue();
            queue.enqueue(firstInLine.value);
            console.log('Paperwork is messed up yo.  Go to the back of the line');
        }
    }
    console.log('line is empty');
}

//main();
// squareDancing();
OphidianBank();
