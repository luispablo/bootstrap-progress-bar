const React = require("react"); // eslint-disable-line no-unused-vars, no-undef

const DEFAULT_WIDTH = "100%";
const DEFAULT_MESSAGE = "";

const ProgressBar = (props) => {
	const style = { width: props.width || DEFAULT_WIDTH };
	const className = "progress-bar progress-bar-info progress-bar-striped active";
	const span = React.createElement("span", null, props.message || DEFAULT_MESSAGE);
	const innerDiv = React.createElement("div", { className, style }, span);

	return React.createElement("div", { className: "progress" }, innerDiv);
};

module.exports = ProgressBar; // eslint-disable-line no-undef
