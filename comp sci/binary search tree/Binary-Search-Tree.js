/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
/* eslint-disable max-classes-per-file */

const Node = require('./Node');

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
    }
    return this.find(value, node.right);
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
      } if (node.right === null) {
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

  levelOrder(fn) {
    const result = [];
    const queue = [];

    if (this.root !== null) {
      queue.push(this.root);
    }

    while (queue.length > 0) {
      const node = queue.shift();

      if (fn) {
        fn(node);
      } else {
        result.push(node.data);
      }

      if (node.left !== null) {
        queue.push(node.left);
      }

      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    return result;
  }

  inorder(fn) {
    const result = [];

    const traverse = (node) => {
      if (node === null) return;

      traverse(node.left);

      if (fn) {
        fn(node);
      } else {
        result.push(node.data);
      }

      traverse(node.right);
    };

    traverse(this.root);

    return result;
  }

  preorder(fn) {
    const result = [];

    const traverse = (node) => {
      if (node === null) return;

      if (fn) {
        fn(node);
      } else {
        result.push(node.data);
      }

      traverse(node.left);
      traverse(node.right);
    };

    traverse(this.root);

    return result;
  }

  postorder(fn) {
    const result = [];

    const traverse = (node) => {
      if (node === null) return;

      traverse(node.left);
      traverse(node.right);

      if (fn) {
        fn(node);
      } else {
        result.push(node.data);
      }
    };

    traverse(this.root);

    return result;
  }

  height(node = this.root) {
    if (node === null || node === undefined) return -1;

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  depth(node, root = this.root, depth = 0) {
    if (root === null) return -1;
    if (root.data === node) return depth;

    const leftDepth = this.depth(node, root.left, depth + 1);
    const rightDepth = this.depth(node, root.right, depth + 1);

    return Math.max(leftDepth, rightDepth);
  }

  isBalanced() {
    return this.checkBalance(this.root) !== -1;
  }

  checkBalance(node) {
    if (node === null) return 0;

    const leftHeight = this.checkBalance(node.left);
    if (leftHeight === -1) return -1;

    const rightHeight = this.checkBalance(node.right);
    if (rightHeight === -1) return -1;

    const heightDiff = Math.abs(leftHeight - rightHeight);
    if (heightDiff > 1) return -1;

    return Math.max(leftHeight, rightHeight) + 1;
  }

  rebalance() {
    const values = this.inorder();
    this.root = this.buildTree(values);
  }

  printTree(node = this.root, prefix = '', isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.printTree(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      this.printTree(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }
}

module.exports = Tree;
