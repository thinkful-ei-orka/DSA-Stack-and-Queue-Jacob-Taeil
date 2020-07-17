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
}

main();
