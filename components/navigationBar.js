import Link from 'next/link'
import { useRouter } from 'next/router';
import { translate } from '../util/translator.js'

export default function NavigationBar({ absolute }) {
	const router = useRouter();
	const { locale } = router; // is this equal to const locale = router.locale ? 
	const lang = locale === 'en' ? 'en' : 'de'

	const changeLanguage = (e) => {
		plausible('change-language');
		const locale = e.target.value;
		// console.log("new locale: " + locale)
		router.push("/", "/", { locale });
	}

	return (
		<nav className={"nav-bar h-16 w-full bg-white flex items-center justify-between" + (absolute ? " absolute" : "")}>
			<Link href="/"><a>
				<div className="ml-4"><img src="/images/logo_blue.svg" className="h-8"/></div>
			</a></Link>
			<div className="flex mr-4">
				<Link href="/findTalent"><a className="no-underline"><div className="mr-4 md:mr-4 bg-blue-700 text-white rounded-lg px-4 py-2 md:py-2 md:text-xs">{translate('employernavbar', lang)}</div></a></Link>
				<select onChange={changeLanguage} defaultValue={locale}>
					<option value="en">EN</option>
					<option value="de">DE</option>
				</select>
			</div>
		</nav>
	)
}