import PropTypes from 'prop-types';

export const Chevron = (props) => {
	return (
		<svg
			width="12"
			height="7"
			viewBox="0 0 12 7"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={props.className}
		>
			<path d="M11 1L6 6L1 1" stroke="black" />
		</svg>
	);
};

// Prop Validation
Chevron.propTypes = {
	className: PropTypes.string.isRequired,
};
