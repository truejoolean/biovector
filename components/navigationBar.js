import Link from 'next/link'

export default function NavigationBar() {
	return (
		<nav className="absolute h-16 w-full flex items-center justify-between">
			<Link href="/"><a>
				<div className="ml-4"><img src="/images/logo_blue.svg" className="h-8"/></div>
			</a></Link>
			<Link href="/findTalent"><a className="no-underline"><div className="mr-16 md:mr-4 bg-blue-700 text-white rounded-lg px-4 py-2 md:py-2 md:text-xs">I want to list</div></a></Link>
		</nav>
	)
}