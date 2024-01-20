import Part from "./Part";

const Content = (props) => {
	return (
		<>
			<Part courseInfo={props.courseList[0]}></Part>
			<Part courseInfo={props.courseList[1]}></Part>
			<Part courseInfo={props.courseList[2]}></Part>
		</>
	);
};

export default Content;
