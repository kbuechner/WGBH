import React from "react";
import PropTypes from "prop-types";

function Header(props) {
	let { title, content } = { ...props };

	return (
		<React.Fragment>
			<h1 className="header-main">{title}</h1>
			<p className="header-content">{content}</p>
		</React.Fragment>
	);
}

Header.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string
};

Header.defaultProps = {
	title: "Schedule",
	content:
		"See what is coming up on our national broadcast schedule below. Check back for upcoming airing information, updated frequently. (Make sure to consult your local station listings for more detailed information about MASTERPIECE broadcasts in your area.)"
};

export default Header;
