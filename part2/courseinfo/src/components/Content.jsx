import Part from "./Part";

const Content = ({ content }) => {
	return (
		<div>
			{content.map((part) => (
				<Part key={part.id} partInfo={part}></Part>
			))}
		</div>
	);
};

export default Content;
