export {}
class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
    this.parent = null;
  }

  get left() { return this.children[0] };
  set left(node) {
    this.children[0] = node;
    if (node) node.parent = this; 
  }

  get right() { return this.children[1] }
  set right(node) {
    this.children[1] = node;
    if (node) node.parent = this;
  }

  get isRoot() { return this.parent === null }
  get isLeaf() { return this.children.length === 0 }
  get isLeftChild() { return this.parent && (this.parent.left === this) }
  get isRightChild() { return this.parent && (this.parent.right === this) }

  log() {
    console.log('[this]', this);
    console.log('[this.parent]', this.parent);
    console.log('[this.parent.left]', this.parent.left);
  }

}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new TreeNode(value);
    if (!this.root) {
      this.root = node;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (!this.root) return null;

    let current = this.root;

    while (current) {
      if (value === current.value) return current;
      if (value < current.value) current = current.left;
      else current = current.right;
    }

    return null;
  }

  contains(value) {
    return !!this.find(value);
  }

  remove(value) {
    const nodeToRemove = this.find(value);
    if (!nodeToRemove) return null;

    const { parent } = nodeToRemove;

    if (nodeToRemove.isLeaf) {
      if (nodeToRemove.isLeftChild) parent.left = null;
      else parent.right = null;
    } else if (nodeToRemove.left && nodeToRemove.right) {
      const successor = this.findSuccessor(nodeToRemove);
      this.remove(successor.value);
      nodeToRemove.value = successor.value;
    } else {
      const child = nodeToRemove.left || nodeToRemove.right;
      if (nodeToRemove.isLeftChild) parent.left = child;
      else parent.right = child;
    }
  }

  findSuccessor(node) {
    let current = node.right;
    while (current.left) current = current.left;
    return current;
  }



}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
tree.insert(1);



console.log(tree.find(10).data());

