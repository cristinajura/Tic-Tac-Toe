import React, { useState } from "react";
import "../App.scss";
import GameBoard from "./GameBoard.js";
import { MdAutorenew } from "react-icons/md";

const checkForWinner = (square) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }
  return null;
};

const TicTacToeGame = () => {
  const [history, setHistory] = useState([{ buttons: Array(9).fill(null) }]);
  const [turn, setTurn] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  const [gameStart, setGameStart] = useState(false);

  const handleClick = (i) => {
    const gameHistory = history.slice(0, stepNumber + 1);
    const currVal = gameHistory[gameHistory.length - 1];
    const squares = currVal.buttons.slice();
    if (checkForWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = turn ? "X" : "O";
    setHistory(gameHistory.concat([{ buttons: squares }]));
    setTurn(!turn);
    setStepNumber(gameHistory.length);
    setGameStart(true);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
  };

  // console.log("history", history);

  const moves = gameStart
    ? history.map((step, move) => {
        // console.log("move", move);
        const index = move ? "Go to move: # " + move : "Go to game start";
        return (
          <li key={move} className="moves">
            <button onClick={() => jumpTo(move)}>{index}</button>
          </li>
        );
      })
    : null;

  const reload = () => {
    setGameStart(false);
    setHistory([{ buttons: Array(9).fill(null) }]);
    setTurn(true);
    setStepNumber(0);
  };

  console.log("moves", moves);

  const currVal = history[stepNumber];
  const winner = checkForWinner(currVal.buttons);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (stepNumber === 9) {
    status = "Game over!";
  } else {
    status = "Next player: " + (turn ? "X" : "O");
  }

  return (
    <div id="container">
      <div id="title">Tic Tac Toe</div>
      <div className="text">{status}</div>
      <div id="game-container">
        <GameBoard buttons={currVal.buttons} onClick={(i) => handleClick(i)} />
        <div className="historyBox">
          <ul>{moves}</ul>
        </div>
      </div>
      <div className="reload">
        <MdAutorenew onClick={reload} />
      </div>
    </div>
  );
};

export default TicTacToeGame;
