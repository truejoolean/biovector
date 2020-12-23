import { useState } from 'react'

function handleChange(e) {

{/*
if (filterActivated) {
		filterActivated = false;
	} else {
		filterActivated = true;
	}
*/}
	
	console.log(e.target.value)


}

export default function Filter({ name, filterHandler }) {
	function changeHandler(e) {
		console.log(e.target.value);
		filterHandler(e.target.value);
	}
	let filterActivated = false;
	return (
		<div className="flex items-center my-2">
			<input type="checkbox" value={name} name={name} id={name} onChange={changeHandler}/>
			<label for={name} className={filterActivated ? "text-3xl" : "ml-1"}>
				{name.charAt(0).toUpperCase() + name.slice(1)}
			</label>
		</div>
	)
}