class Node {
    constructor(data = 'null') {
      this.data = data;
      this.right = null;
      this.left = null;
    }
}

class Tree {
    constructor(arr) {
        const sorted = [...new Set(arr)].sort((a, b) => a - b);
        this.root = this.buildTree(sorted);
    }

    buildTree(array) {
        if (array.length === 0) return null;

        const mid = Math.floor(array.length / 2);
        const root = new Node(array[mid]);
        root.left = this.buildTree(array.slice(0, mid));
        root.right = this.buildTree(array.slice(mid + 1));

        return root;
    }

    find(value, node = this.root) {
        if (node === null || node.data === value) return node;

        if (value < node.data) {
            return this.find(value, node.left);
        } else {
            return this.find(value, node.right);
        }
    }

    insert(value, node = this.root) {
        if (this.find(value) !== null) return 'Value already exists.';

        if (node === null) return new Node(value);

        if (value < node.data) {
            node.left = this.insert(value, node.left);
        } else {
            node.right = this.insert(value, node.right);
        }

        return node;
    }

    delete(value, node = this.root) {
        if (this.find(value) === null) return 'Value does not exist.';

        if (node === null) return node;

        if (value < node.data) {
            node.left = this.delete(value, node.left);
        } else if (value > node.data) {
            node.right = this.delete(value, node.right);
        } else {
            if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            }

            const minNode = this.minNode(node.right);
            node.data = minNode.data;
            node.right = this.delete(minNode.data, node.right);
        }

        return node;
    }

    minNode(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    levelOrder(func) {

    }

    inOrder() {

    }

    preOrder() {

    }

    postOrder() {

    }

    height() {

    }

    depth() {

    }

    isBalanced() {

    }

    rebalance() {
        
    }

}

const printTree = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      printTree(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      printTree(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
printTree(tree.root);
console.log(tree.find(4));
console.log(tree.insert(27));
printTree(tree.root);
tree.delete(23);
printTree(tree.root);
