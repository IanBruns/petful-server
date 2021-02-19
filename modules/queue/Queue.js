class _Node {
  constructor(data, next) {
    this.value = data;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }

    this.last = node;
  }

  dequeue() {
    if (this.first == null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;

    return node.value;
  }

  show() {
    if (this.first == null) {
      return;
    }

    return this.first.value;
  }

  all() {
    let vals = [];
    if (this.first == null) {
      return;
    } else {
      let curr = this.first;
      while (curr) {
        vals.push(curr.value);
        curr = curr.next;
      }
    }
    return vals;
  }
}

module.exports = Queue;
