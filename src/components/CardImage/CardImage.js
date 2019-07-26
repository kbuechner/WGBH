import React from "react";
import PropTypes from "prop-types";

function CardImage(props) {
	const { src, alt } = props;

	return (
		<div className="episode-image">
			<img
				alt={alt}
				width="640"
				height="360"
				src={`../../images/screencaps/${src}`}
			/>
		</div>
	);
}

CardImage.propTypes = {
	image: PropTypes.string,
	description: PropTypes.string
};

CardImage.defaultProps = {
	alt: "PBS logo",
	src: "./images/logos/pbs_logo.png"
};
export default CardImage;
