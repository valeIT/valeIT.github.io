---
layout: post
title: React Tic Tac Toe Tutorial - Bonus Steps
date: 2019-08-24 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

Today I'm in the countryside, sitting on a chair looking towards a field of corn and lots of flowers. But I won't let that distract me.

I'm trying React for the second time. I tried it briefly for react native, but did not like it too much. Now that I've used Flutter for 6 months I feel like I can try React again with a different mindset since the underline premise between the two is pretty similar: Declarative UIs.

I'm going through the base Tic Tac Toe tutorial they have on [reactjs.org][1]. If you've never tried the framework that's where you should start. I found it to be really well done. Honestly I had tried the tutorial before, but did not remember it being this good, I'm not sure if they changed it from the previous time I tried it or what...

I will go through the extra (bonus) steps and try to implement them. I'm new to React and don't really use javascript much either so I'm sure there will be lots of problem in my code (kudos if you point them out!).

Let's get started.

_Disclaimer: I'm in the countryside without internet. I've downloaded (cached) the tutorial and will be doing as much as I can from the bonus points. Since I'm without an actual connection I'm not sure if I can do them all <s>(surely not all today since it's already later, but I'm planning to continue tomorrow as well)</s>. Edit: I managed to finish them today_

I'm going to assume that if you want to follow along (WHY? I already said you should not take this as an example!) you have reached the end of the tutorial @ reactjs.org.

I've done one slight refactoring: I've moved the `calculateWinner` function inside the Game class since it's only used there and called it using `this.`.

# 1 - Display the location for each move in the format (col, row) in the move history list

_I'm not going to follow this to the letter, I don't like the col,row notation._

Already I feel like I made a huge mistake. This is supposed to be the easiest point (it says they're sorted from easier to harder) and I'm here making a new function and looping through the array to find the diff between the 2 histories.

I didn't want to add something else to .state to store the current move since it did not feel right. It is duplicate information that is already included in the history array, it should be more correct to just compute it. But this way you need to do a diff so, why is it marked as the easiest step? I feel like I'm really missing something big here, but well. A naïve and slow solution is still better than nothing.

Inside render edit the description to call currentMove passing in the step and the move. We're going to create it later.

```
const moves = history.map((step, move) => {
      const desc = move
        ? "Go to move " + this.currentMove(step, move)
        : "Go to game start";
```

We can now add the currentMove function that returns the icon ("X" or "O") and the number of the position (for now still 0 based):

```
  currentMove(step, move) {
    if (move === 0) {//1
      //should not be called for 1st move
      return "";
    }
    const previous = this.state.history[move - 1];//2
    const currentSquares = step.squares;
    let diff;
    for (var i = 0; i < previous.squares.length; i++) {
      if (previous.squares[i] !== currentSquares[i]) {
        diff = i;//3
        break;
      }
      diff = null;
    }
    if (diff === null) {
      return "";
    }
    const humanReadablePos = diff + 1;//4
    return "" + currentSquares[diff] + "->" + humanReadablePos;
  }
```

1. Should never happen, but we still defensively code against it to return an empty string.
2. We get the previous move and use it to get the diff with the current one.
3. When we find the diff we save the index of the move.
4. Using thew index we get the content of the square and we return the index. We need to remember that indexes are 0 based and people obviously expect the first element to be 1 so we add one to the description

# 2 - Bold the currently selected item in the move list.

For this we first need to figure out if this is the current step and if it is add the text as bold. It seems straightforward enough:

```
const moves = history.map((step, move) => {
      const bold = move === this.state.stepNumber;// We figure out if this is the current step.
      const desc = move
        ? "Go to move " + this.currentMove(step, move)
        : "Go to game start";
      const boldDesc = bold ? "<b>" + desc + "</b>" : desc;//If it is we bold the description, otherwise we don't.
```

This is obviously not right. `<b>` doesn't get unescaped and there is probably some kind of operator to define something as bold, but I have no idea and no internet connection to check it out so for now you will need to be happy with `<b>Go to move X->2</b>` until I get back online and find out the answer.

# 3 - Rewrite Board to use two loops to make the squares instead of hardcoding them.

`renderSquare` remains the same. `render()` on the other hand will not simply call `renderBoard()` and wrap it in a div:

```
  render() {
    return <div>{this.renderBoard()}</div>;
  }
```

Render board will render the row and the relative columns. Let's start by implementing renderBoard():

```
  renderBoard() {
    const items = [];//1
    for (
      let y = 0;
      y < this.props.squares.length;
      y = y + this.props.squares.length / 3
    ) {//2
      items.push(this.renderRow(y));
    }
    return items;
  }
```

1. We need to return multiple elements so we need to wrap them in an array and return that. This took quite some time to figure out...
2. Now we know that each row and column is made of 3 squares and in total we have 9 squares (3x3 board). What you put here depends on what you want to happen if the number of squares increase from 9, in this simple example we just divide them evenly and have some wrapping at the end in the case they're more than 9 squares, but it's not a big deal since it won't actually happen. Decided that we just add 3 each time:(this.props.squares.length / 3).

For each row we render the columns by calling `renderRow`.

This one is easy, we create the board-row that includes all the columns for that specific row:

```
renderRow(i) {
    return <div className="board-row">{this.renderColumnsPerRow(i)}</div>;
  }
```

Finally we render the squares in `renderColumnsPerRow`:

```
  renderColumnsPerRow(i) {
    const items = [];
    for (let y = 0; y < this.props.squares.length / 3; y++) {
      items.push(this.renderSquare(i + y));
    }
    return items;
  }
```

Here we need to be careful to map the index of the square correctly by summing its position based on the row to its position based on the column. We're also assuming that we have 3 rows per columns which might not always be correct in case we don't play normal tic tac toe and we have a bigger board, but it is fine for this example (see above).

# 4 - Add a toggle button that lets you sort the moves in either ascending or descending order.

In game we add `reverseHistory` in the state object.

```
constructor(props) {
    super(props);
    this.state = {
      reverseHistory: false,
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }
```

Before we start I renamed `handleClick` to `handleBoardClick` since we are going to have another click event to be aware of and `handleClick` is way too generic.

We first create the handler for the click event that will flip the boolean value:

```
  handleReverseHistoryClick() {
    this.setState({
      reverseHistory: !this.state.reverseHistory
    });
  }
```

We now need to use this value to reverse the array of the buttons in render right after we create the moves array:

```
...

if (this.state.reverseHistory) {
      moves.reverse();
    }

    let status;
    if (winner) {
```

Try setting reverse as true or false in the constructor and you will see that it works. There is one problem though. Since we are using `li` the numbers are not correct. It would be better to show 1,2,3 if we start from the beginning and 3,2,1 if we start from the end. When we create the li for the moves change it to:

```
<li value={move + 1} key={move}>
          <button onClick={() => this.jumpTo(move)}>{boldDesc}</button>
        </li>
```

Note that we are adding 1 to move since its index is 0 based.

It is now time to create the button:

```
const reverseButtonDesc = this.state.reverseHistory
      ? "Change to Reversed History"
      : "Change to Linear History";//1
    const reverseButton = (
      <button onClick={() => this.handleReverseHistoryClick()}>
        {reverseButtonDesc}
      </button>
    );
    if (!this.state.reverseHistory) {
      moves.reverse();
    }
```

1. I'm aware the logic is reversed. The state name needs to be changed from reverseHistory to linearHistory since now it does the opposite of what the name would suggest.

And add it to the render function:

```
<div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
          <div>{reverseButton}</div>
        </div>
```

It would be better to also show the current order status, something like "Linear Order" above the button.

# 5 - When someone wins, highlight the three squares that caused the win.

This is surely not the best way to do it, but it was quick.

Extract the lines array outside the function and return the index inside the lines array as well (ontop of the winning player) in case of winning.

```
  lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  calculateWinner(squares) {
    for (let i = 0; i < this.lines.length; i++) {
      const [a, b, c] = this.lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return [squares[a], i];
      }
    }
    return null;
  }
```

In the render function we return the winning squares to board for highlighting:

```

    let status;
    let winningSquares;
    if (winner) {
      status = "Winner: " + winner[0];
      winningSquares = this.lines[winner[1]];
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
      winningSquares = [];
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            winningSquares={winningSquares}
            onClick={i => this.handleBoardClick(i)}
          />
```

And finally in board edit `renderSquare`:

```
  renderSquare(i) {
    // const winning = this.props.winningSquares.contains(i);//1
    let winning = false;
    for (var k = 0; k < this.props.winningSquares.length; k++) {
      if (this.props.winningSquares[k] === i) {
        winning = true;
      }
    }
    let content = this.props.squares[i];
    if (winning) {
      content = "|" + this.props.squares[i] + "|";
    } else {
      content = this.props.squares[i];
    }
    return <Square value={content} onClick={() => this.props.onClick(i)} />;
  }
```

1. I though js had a contains operator for array, but apparently it is called something else and I don't have internet at the moment so I had to do a disgusting for loop for now.
2. Again I don't know how to set the color or bold in React and I don't want to set style= since it's really ugly so I just add "|" for now in case of winning

# 6 - When no one wins, display a message about the result being a draw.

Again there is the usual problem with contains so I will be forced to do a for loop.

In render (inside Game) add in the end:

```

    // let draw = current.contains(null) && !winner;
    let draw = true;
    for (var k = 0; k < current.squares.length; k++) {
      if (current.squares[k] === null || winner) {
        draw = false;
      }
    }

    let status;
    let winningSquares;
    if (winner) {
      status = "Winner: " + winner[0];
      winningSquares = this.lines[winner[1]];
    } else {
      if (draw) {
        status = "Draw";
      } else {
        status = "Next player: " + (this.state.xIsNext ? "X" : "O");
      }
      winningSquares = [];
    }

    return (
```

Most of these solutions are not pretty, but being done on a new framework and without internet connection it is not as bad as it seems.

Let me know how you would have done it,apart from the few things I've already pointed out.

[You can find the repository here][2]

PS: Liking React so far!

[1]: https://reactjs.org/tutorial/tutorial.html#overview
[2]: https://github.com/valeIT/ReactTicTacToe
