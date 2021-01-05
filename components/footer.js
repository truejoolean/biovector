import NavBar from './navbar'
import Link from 'next/link'

export default function Footer() {
	return(
		<section className="bg-gray-100 w-full h-24 border-t-2 mt-16">
			<div className="ml-20">
				<h2 className="text-black">Product</h2>
				<ul>
					<Link href="/"><a><li>Job listings</li></a></Link>
					<Link href="/findTalent"><a><li>For employers</li></a></Link>
				</ul>
			</div>
		</section>
	)
}