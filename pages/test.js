import Modal from './modal'
import React, { useState, useEffect } from 'react';

export default function Test() {
	const [isShown, setIsShown] = useState(true);

	const showModal = () => {
		console.log("showModal called")
		setIsShown(true)
	}

	function closeModal () {
		console.log(window.innerHeight)
		setIsShown(false)
		console.log("closeModal called")
	}
	return (
		<div className="w-full h-full bg-gray-200">
			<h2 className="text-xl">Hey this is test</h2>
			<button onClick={showModal}>Open the modal</button>
			<Modal closeFunc={closeModal} isShown={isShown} />
		</div>
		)
}