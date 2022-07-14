import { useEffect } from "react";
import { useState } from "react";
import Cell from "./components/Cell";

function App() {
  const SYMBOLS = ["X", "O"];

  const [board, setBoard] = useState([
    {
      idx: 0,
      symbol: "",
      active: true,
    },
    {
      idx: 1,
      symbol: "",
      active: true,
    },
    {
      idx: 2,
      symbol: "",
      active: true,
    },
    {
      idx: 3,
      symbol: "",
      active: true,
    },
    {
      idx: 4,
      symbol: "",
      active: true,
    },
    {
      idx: 5,
      symbol: "",
      active: true,
    },
    {
      idx: 6,
      symbol: "",
      active: true,
    },
    {
      idx: 7,
      symbol: "",
      active: true,
    },
    {
      idx: 8,
      symbol: "",
      active: true,
    },
  ]);
  const [turn, setTurn] = useState(0);
  const [turnSymbol, setTurnSymbol] = useState("X");
  

  const isWin = (symbol) => {
    console.log(board);

    if (
      board[0].symbol === symbol &&
      board[1].symbol === symbol &&
      board[2].symbol === symbol
    ) {
      return { win: true, symbol: symbol };
    }

    return { win: false, symbol: "" };
  };

  const updateBoard = (idx, symbol) => {
    let tempBoard = board.map((cell) => {
      if (cell.idx === idx && cell.active === true) {
        turnSymbol == "X" ? setTurnSymbol("O") : setTurnSymbol("X");

        return { ...cell, symbol: symbol, active: false };
      }
      return cell; // else return unmodified item
    });

    return tempBoard;
  };

  useEffect(() => {
    SYMBOLS.map((symbol) => {
      console.log(isWin(symbol));

    });

  }, [board]);

  const handleClick = (cell) => {
    setBoard(updateBoard(cell.idx, turnSymbol));
    setTurn(turn + 1);
  };

  return (
    <div className="App grid place-items-center h-screen">
      <h1> {turn}</h1>
      <h1> {turnSymbol}</h1>

      <div className="grid grid-cols-3 gap-4  h-[500px] w-[500px]">
        {board.map((cell) => {
          return (
            <Cell key={cell.idx} handleClick={handleClick} cell={cell}></Cell>
          );
        })}
      </div>
    </div>
  );
}

export default App;
