const Tree = require('./Binary-Search-Tree');

function randomArr(size) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
}

const tree = new Tree(randomArr(15));

console.log(tree.isBalanced());

console.log(tree.levelOrder());
console.log(tree.preorder());
console.log(tree.inorder());
console.log(tree.postorder());

tree.insert(115);
tree.insert(234);
tree.insert(195);

console.log(tree.isBalanced());
tree.rebalance();
console.log(tree.isBalanced());

console.log(tree.levelOrder());
console.log(tree.preorder());
console.log(tree.inorder());
console.log(tree.postorder());

tree.printTree();
