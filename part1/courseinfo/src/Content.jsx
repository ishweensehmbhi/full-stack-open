const Content = (props) => {
	console.log(props.courseList);
	return (
		<>
			<div>
				<p>
					{props.courseList[0].name}{" "}
					{props.courseList[0].exercises}
				</p>
				<p>
					{props.courseList[1].name}{" "}
					{props.courseList[1].exercises}
				</p>
				<p>
					{props.courseList[2].name}{" "}
					{props.courseList[2].exercises}
				</p>
			</div>
		</>
	);
};

export default Content;
