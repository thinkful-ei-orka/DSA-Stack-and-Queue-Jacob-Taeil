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

main();
