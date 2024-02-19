import { useState } from "react";

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	const [ratings, setRatings] = useState([]);

	const clickEvents = (type) => {
		let returnFunction;
		switch (type) {
			case "good":
				returnFunction = () => {
					setGood(good + 1);
					setRatings(ratings.concat(1));
				};
				break;
			case "neutral":
				returnFunction = () => {
					setNeutral(neutral + 1);
					setRatings(ratings.concat(0));
				};
				break;
			case "bad":
				returnFunction = () => {
					setBad(bad + 1);
					setRatings(ratings.concat(-1));
				};
				break;
		}
		return returnFunction;
	};

	const Button = (props) => {
		return <button onClick={props.onClickEvent}>{props.text}</button>;
	};

	const Statistics = () => {
		const calculateAverage =
			ratings.reduce((a, b) => a + b, 0) / ratings.length;

		if (ratings.length > 0) {
			return (
				<>
					<h1>statistics</h1>
					<p>good {good}</p>
					<p>neutral {neutral}</p>
					<p>bad {bad}</p>
					<p>all {ratings.length}</p>
					<p>average {calculateAverage}</p>
					<p>positive {(good / ratings.length) * 100} %</p>
				</>
			);
		} else {
			return (
				<>
					<h1>statistics</h1>
					<p>No feedback given</p>
				</>
			);
		}
	};

	return (
		<>
			<h1>give feedback</h1>
			<Button
				text="good"
				onClickEvent={clickEvents("good")}
			></Button>
			<Button
				text="neutral"
				onClickEvent={clickEvents("neutral")}
			></Button>
			<Button text="bad" onClickEvent={clickEvents("bad")}></Button>
			<Statistics></Statistics>
		</>
	);
};

export default App;
