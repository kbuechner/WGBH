import React from "react";
import PropTypes from "prop-types";
import CardDetail from "../CardDetail/CardDetail";
import CardImage from "../CardImage/CardImage";

function Card(props) {
	let { title, description, episode } = { ...props };
	let episodeDetails = {
		title: episode.title,
		date: episode.date,
		time: episode.time
	};
	return (
		<div>
			<CardImage alt={episode.image.alt} src={episode.image.src} />
			<CardDetail
				title={title}
				description={description}
				episode={episodeDetails}
			/>
		</div>
	);
}

Card.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	episode: PropTypes.shape({
		title: PropTypes.string,
		date: PropTypes.string,
		time: PropTypes.string,
		image: PropTypes.shape({
			src: PropTypes.string,
			alt: PropTypes.string
		})
	})
};

Card.defaultProps = {
	title: "Series Title",
	description: "Episode Description",
	episode: {
		title: "Episode Title",
		date: "Friday, July 26, 2019",
		time: "12:00 am",
		image: {
			src: "#",
			alt: "Alt text for image"
		}
	}
};

export default Card;
