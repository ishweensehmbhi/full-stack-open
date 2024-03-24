import Part from "./Part";
import Total from "./Total";

const Content = ({ content }) => {
	return (
		<div>
			{content.map((part) => (
				<Part key={part.id} partInfo={part}></Part>
			))}
			<Total content={content}></Total>
		</div>
	);
};

export default Content;
