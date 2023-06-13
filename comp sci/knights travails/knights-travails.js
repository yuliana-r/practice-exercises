/* eslint-disable consistent-return */
const knightMoves = [
  [1, 2], [-1, 2],
  [2, 1], [-2, 1],
  [-2, -1], [2, -1],
  [-1, -2], [1, -2],
];

const Node = ([x, y]) => {
  const node = { position: `${x},${y}`, prev: null };
  return node;
};

function createBoard() {
  const arr = [];

  for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8; j++) {
      arr.push([i, j]);
    }
  }
  return arr;
}

function createAdjacencyList(board, knightMoves) {
  const graph = {};

  board.forEach((square) => {
    graph[square] = knightMoves
      .map(([dx, dy]) => [square[0] + dx, square[1] + dy])
      .filter(([x, y]) => x <= 8 && y <= 8 && x >= 1 && y >= 1);
  });

  return graph;
}

const graph = createAdjacencyList(createBoard(), knightMoves);

function breadthFirstSearch(start, target) {
  const q = [];
  const visited = [];
  const initialNode = Node(start);
  q.push(initialNode);
  visited.push(initialNode.position);

  while (q.length > 0) {
    const node = q.shift();
    if (node.position === Node(target).position) {
      return node;
    }
    const children = graph[node.position];
    children.forEach((child) => {
      if (!visited.includes(child.toString())) {
        const childNode = { position: child.toString(), prev: node };
        q.push(childNode);
        visited.push(childNode.position);
      }
    });
  }

  return null;
}

const findShortestPath = (start, end) => {
  if (
    !start.every((coord) => coord >= 1 && coord <= 8)
        || !end.every((coord) => coord >= 1 && coord <= 8)
  ) {
    return 'Please enter start and end points between [1, 1] and [8, 8].';
  }

  const path = breadthFirstSearch(start, end);

  if (path === null) {
    return 'No path found.';
  }

  const output = [];
  let currentNode = path;

  while (currentNode !== null) {
    output.unshift(currentNode.position);
    currentNode = currentNode.prev;
  }

  console.log(`You made it in ${output.length - 1} moves! Here's your path:`);
  output.forEach((move) => console.log(`[${move}]`));
};

findShortestPath([1, 1], [8, 8]);
// You made it in 6 moves! Here's your path:
// [1,1]
// [2,3]
// [3,5]
// [4,7]
// [6,8]
// [7,6]
// [8,8]
