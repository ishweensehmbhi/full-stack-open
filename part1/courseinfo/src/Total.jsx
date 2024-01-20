const Total = (props) => {
	return (
		<p>
			Number of exercises{" "}
			{props.itemsList[0] + props.itemsList[1] + props.itemsList[2]}
		</p>
	);
};

export default Total;
