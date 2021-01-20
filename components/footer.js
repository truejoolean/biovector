import NavigationBar from './navigationBar'
import Link from 'next/link'

export default function Footer() {
	return(
		<section className="bg-gray-100 w-full border-t-2 mt-16 pb-12 flex">
			<div className="flex md:block space-around">
				<div className="ml-20 mt-8">
					<h2 className="text-black">Navigation</h2>
					<ul className="footer-list">
						<li><Link href="/" className="py-2"><a>Find employer</a></Link></li>
						<li><Link href="/findTalent" className="py-2"><a>Find employees</a></Link></li>
					</ul>
				</div>
				<div className="ml-20 mt-8">
					<h2 className="text-black">Legal</h2>
					<ul className="footer-list">
						<li><Link href="/legal-disclosure" className="py-2"><a>Legal Disclosure</a></Link></li>
						<li><Link href="/privacy-policy" className="py-2"><a>Privacy Policy</a></Link></li>
					</ul>
				</div>
				<p className="ml-20 mt-8 w-5/12">The Biovector collects Germany's top vacancies for biotechnology, ranging from theses in startups over working student opportunities to consulting careers.</p>
			</div>
		</section>
	)
}