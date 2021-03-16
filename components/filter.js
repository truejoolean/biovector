import { useContext } from 'react';
import GlobalContext from '../pages/_app.js'
import { prettify } from '../util/makePretty.js'
import { useRouter } from 'next/router'

import { translate } from '../util/translator.js';

export default function Filter({ name, checked, changeHandler }) {
	const router = useRouter();
	const { locale } = router; // is this equal to const locale = router.locale ? 
	const lang = locale === 'en' ? 'en' : 'de'
	return (
		<div className="my-2">
			<label for={name}>
				<input className="mr-1" type="checkbox" checked={checked} name={name} id={name} onChange={e =>
					changeHandler({ value: e.currentTarget.checked, prop: name })} />
					{/*name.charAt(0).toUpperCase() + name.slice(1)*/}
					{translate(name, lang)}
			</label>
		</div>
	)
}