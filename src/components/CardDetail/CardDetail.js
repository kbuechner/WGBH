import React from "react";
import PropTypes from "prop-types";

function CardDetails(props) {
	const { title, description, episode } = props;

	return (
		<React.Fragment>
			<h2 className="episode-airdate">
				{episode.date} | {episode.time}
			</h2>
			<h3 className="episode-title">
				{title}: {episode.title}
			</h3>
			<p className="episode-description">{description}</p>
		</React.Fragment>
	);
}

CardDetails.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	episode: PropTypes.shape({
		title: PropTypes.string,
		date: PropTypes.string,
		time: PropTypes.string
	})
};
CardDetails.defaultProps = {
	title: "Title",
	description: "Description",
	episode: {
		title: "EpisodeTitle",
		date: "Today's Date",
		time: "12:00 am",
		image: "%PUBLIC_URL%/public/images/logos/pbs_logo.png"
	}
};
export default CardDetails;
