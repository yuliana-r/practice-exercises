/* eslint-disable import/prefer-default-export */
const knightMoves = [
  [1, 2], [-1, 2],
  [2, 1], [-2, 1],
  [-2, -1], [2, -1],
  [-1, -2], [1, -2],
];

const q = [];
const visited = [];

const Node = ([x, y]) => {
  const node = { position: `[${x}, ${y}]`, prev: null };
  return node;
};

function createBoard() {
  const board = [];

  for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8; j++) {
      board.push([i, j]);
    }
  }

  return board;
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

const board = createBoard();
console.log(createAdjacencyList(board, knightMoves));
