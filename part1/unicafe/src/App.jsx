import { useState } from "react";

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	const [ratings, setRatings] = useState([]);

	// Determines which onClick function to utilize for each button
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

	// Button component
	const Button = (props) => {
		return <button onClick={props.onClickEvent}>{props.text}</button>;
	};

	// Stats component
	const Statistics = () => {
		// Stats line component
		const StatisticLine = (props) => {
			return (
				<tr>
					<td>{props.text}</td>
					<td>{props.value}</td>
				</tr>
			);
		};

		const calculateAverage =
			ratings.reduce((a, b) => a + b, 0) / ratings.length;

		const calculatePositive = (good / ratings.length) * 100;

		if (ratings.length > 0) {
			return (
				<>
					<h1>statistics</h1>
					<table>
						<tbody>
							<StatisticLine
								text="good"
								value={good}
							></StatisticLine>
							<StatisticLine
								text="neutral"
								value={neutral}
							></StatisticLine>
							<StatisticLine
								text="bad"
								value={bad}
							></StatisticLine>
							<StatisticLine
								text="all"
								value={ratings.length}
							></StatisticLine>
							<StatisticLine
								text="average"
								value={calculateAverage}
							></StatisticLine>
							<StatisticLine
								text="positive"
								value={`${calculatePositive} %`}
							></StatisticLine>
						</tbody>
					</table>
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
