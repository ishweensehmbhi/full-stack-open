const Total = (props) => {
	return (
		<p>
			Number of exercises{" "}
			{props.itemsList[0].exercises +
				props.itemsList[1].exercises +
				props.itemsList[2].exercises}
		</p>
	);
};

export default Total;
