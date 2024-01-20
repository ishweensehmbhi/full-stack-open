const Part = (props) => {
	return (
		<p>
			{props.courseInfo.name} {props.courseInfo.exercises}
		</p>
	);
};

export default Part;
