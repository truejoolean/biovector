import { useContext } from 'react';
import GlobalContext from '../pages/_app.js'

export default function Filter({ name, checked, changeHandler }) {
	return (
		<div className="flex items-center my-2">
			<label for={name} className={"ml-1"}>
				<input type="checkbox" checked={checked} name={name} id={name} onChange={e =>
					changeHandler({ value: e.currentTarget.checked, prop: name })} />
					{name.charAt(0).toUpperCase() + name.slice(1)}
			</label>
		</div>
	)
}