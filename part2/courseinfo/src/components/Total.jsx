const Total = ({ content }) => {
	return (
		<strong>
			total of{" "}
			{content.reduce(
				(acc, currentVal) => acc + currentVal.exercises,
				0
			)}{" "}
			exercises
		</strong>
	);
};

export default Total;
