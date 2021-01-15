import Link from 'next/link'

export default function NavigationBar() {
	return (
		<nav className="h-16 w-full bg-white flex items-center justify-between">
			<Link href="/"><a>
				<div className="ml-4"><img src="/images/logo_blue.svg" className="h-8"/></div>
			</a></Link>
			<Link href="/findTalent"><a className="no-underline"><div className="mr-16 bg-blue-700 text-white rounded-lg border-2 px-4 py-2">I want to list</div></a></Link>
		</nav>
	)
}