class BinaryTreeNode {
  value: number;
  parent: BinaryTreeNode | null = null;
  children: BinaryTreeNode[] = [];
  private _data: any;

  constructor(value: number) {
    this.value = value;
  }

  get data() { return this._data }
  set data(data: any) { this._data = data }

  get left() { return this.children[0] }
  set left(node: BinaryTreeNode) { this.children[0] = node; node.parent = this }

  get right() { return this.children[1] }
  set right(node: BinaryTreeNode) { this.children[1] = node; node.parent = this }

  get isRoot() { return this.parent === null }
  get isLeaf() { return this.children.length === 0 }

  get isLeftChild() { return this.parent && this.parent.left === this }
  get isRightChild() { return this.parent && this.parent.right === this }

  get hasLeftChild() { return this.left !== undefined }
  get hasRightChild() { return this.right !== undefined }

  get hasAnyChild() { return this.hasLeftChild || this.hasRightChild }
  get hasBothChildren() { return this.hasLeftChild && this.hasRightChild }
}

class BinaryTree {
  root: BinaryTreeNode | null = null;
  constructor() {
  }


  insert(value: number) {
    const node = new BinaryTreeNode(value);
    if (!this.root) {
      this.root = node;
      return;
    }

    let current: BinaryTreeNode | null = this.root;
    while (current) {
      if (value < current.value) {
        if (!current.hasLeftChild) {
          current.left = node;
          break;
        }
        current = current.left;
      } else {
        if (!current.hasRightChild) {
          current.right = node;
          break;
        }
        current = current.right;
      }
    }
  }

  find(value: number) {
    let current: BinaryTreeNode | null = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return current;
      }
    }
    return null;
  }

  addData(value: number, data: any) {
    const node = this.find(value);
    if (node) {
      node.data = data;
    }
  }

  getData(value: number) {
    const node = this.find(value);
    if (node) {
      return node.data;
    }
    return null;
  }

}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);

tree.addData(5, {userName: "John", age: 30});
console.log(tree.getData(5).userName);