import React, { useState, useEffect } from "react";

//create your first component
const Home = () => {
	const startingTime = 5

  const [text, setWord] = useState("");
  const [timer, setTimer] = useState(startingTime);
  const [isRunningGame, setRunningGame] = useState(false);
  const [wordCount, setWordCount] = useState(0)

  const handleChange = (event) => {
    setWord(event.target.value);
  };

  const countWords = (text) => {
    let wordsArray = text.trim().split(" ");
    return wordsArray.filter((words) => words !== " ").length;
  };

  const startGame = ()=>{
	setRunningGame(true)
	console.log(countWords(text))
	setTimer(startingTime)
	setWord("")
  }

  const endGame = ()=>{
	setRunningGame(false)
	setWordCount(countWords(text))
  }

  useEffect(() => {
    if (isRunningGame && timer > 0) {
      var timeoutId = setTimeout(() => {
        setTimer((prevTime) => prevTime - 1);
        console.log(timer);
      }, 1000);
    } else {
      clearTimeout(timeoutId);
	  endGame() 
    }
  }, [timer, isRunningGame]);


  return (
    <div>
      <div className="header">
        <h1>Type as fast as you can...</h1>
      </div>
      <div className="main-textarea">
        <textarea onChange={handleChange} value={text} disabled={!isRunningGame}></textarea>
      </div>
      <div className="amount-time">
        <h4>Time remaining: {timer}</h4>
      </div>
      <button
        onClick={startGame}
		disabled={isRunningGame}
>
Start!</button>

      <h1>{`Words count: ${wordCount}`}</h1>
    </div>
  );
};

export default Home;
