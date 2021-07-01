import Modal from './modal'
import React, { useState, useEffect } from 'react';

export default function Test() {
	const [isShown, setIsShown] = useState(true);

	const showModal = () => {
		// console.log("showModal called")
		setIsShown(true)
	}

	function closeModal () {
		console.log(window.innerHeight)
		setIsShown(false)
		// console.log("closeModal called")
	}
	return (
		<iframe src="https://biovector.de/bio-rn" height="100%" width="100%"/>
		)
}