import Link from 'next/link'
export default function NavBar() {
	return (
		<nav className="h-16 w-full bg-white flex items-center justify-between">
			<Link href="/"><a>
				<div className="ml-4"><img src="/images/logo.png" className="w-60"/></div>
			</a></Link>
			<div className="mr-16 bg-blue-700 text-white rounded-lg border-2 px-4 py-2"><Link href="/findTalent"><a className="no-underline">I want to list</a></Link></div>
		</nav>
	)
}