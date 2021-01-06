import React from 'react'
class Modal extends React.Component {
	constructor() {
		super();
		this.state = {
			show: false
		}
	}

	showModal = () => {
    	this.setState({ show: true });
  	};

	hideModal = () => {
    	this.setState({ show: false });
  	};

	render() {
		const showHideClassName = show ? "modal display-block" : "modal display-none";
		return(
			<div>showHideClassName: {showHideClassName}
				<div className={showHideClassName}>
					<section className="modal-main">
						{children}
						<button type="button" onClick={handleClose}>Close</button>
					</section>
				</div>
			</div>
		)
	}
}
export default Modal;