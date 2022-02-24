import React, { useState } from "react";
import PropTypes from "prop-types";
import useStyles from "./ModalBtnStyles";
import Modal from "./Modal";

const ModalBtn = ({ buttonLabel, children }) => {
	const classes = useStyles();
	const [showModal, setShowModal] = useState(false);

	return (
		<div className={classes.wrapper}>
			<button
				type="button"
				className={classes.modalButton}
				onClick={() => setShowModal(true)}
			>
				{buttonLabel}
			</button>

			{showModal && (
				<Modal onCloseRequest={() => setShowModal(false)}>{children}</Modal>
			)}
		</div>
	);
};

ModalBtn.propTypes = {
	buttonLabel: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export default ModalBtn;
