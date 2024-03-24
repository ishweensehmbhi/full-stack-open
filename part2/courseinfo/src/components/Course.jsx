import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ course }) => {
	return (
		<div id={`course-${course.id}`}>
			<Header courseName={course.name}></Header>
			<Content content={course.parts}></Content>
			<Total content={course.parts}></Total>
		</div>
	);
};

export default Course;
