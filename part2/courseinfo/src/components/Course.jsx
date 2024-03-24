import Header from "./Header";
import Content from "./Content";

const Course = ({ course }) => {
	return (
		<div>
			<Header courseName={course.name}></Header>
			<Content content={course.parts}></Content>
		</div>
	);
};

export default Course;
