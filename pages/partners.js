import { translate } from '../util/translator.js';
import { useRouter } from 'next/router'
import Layout from '../components/layout'



export default function Partners() {
		const router = useRouter();

	const { locale } = router; // is this equal to const locale = router.locale ? 

	const lang = locale === 'en' ? 'en' : 'de'

	return(
		<Layout bg="bg-gray-100" footer={true} navbarAbsolute={true}>
			<div className="bannerPartners">
				<div className="mx-auto max-screen-lg md:w-11/12 py-32">
					<h1 className="text-5xl md:text-3xl font-semibold inline-block p-2" style={{ background: 'rgba(255,255,255,.9)' }}>In order to find the best synergies in the industry, we are happy to present our partners.</h1>
				</div>
			</div>
			<section className="w-full h-36">
				<h2>btS – Life Sciences Studierendeninitiative e.V.</h2>
			</section>
		</Layout>
	)
}