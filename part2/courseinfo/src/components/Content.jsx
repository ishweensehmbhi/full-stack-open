import Part from "./Part";

const Content = ({ content }) => {
	return (
		<div id="course-contents">
			{content.map((part) => (
				<Part key={part.id} partInfo={part}></Part>
			))}
		</div>
	);
};

export default Content;
