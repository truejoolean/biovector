import Link from 'next/link'
export default function NavBar() {
	return (
		<nav>
			<div className="relative bg-white h-16 text-xl opacity-40 z-30" />
			<Link href="/"><a>
				<div className="absolute top-1 left-5 z-40">
					<img src="/images/logo.png" className="w-60 z-40"/>
				</div>
			</a>
			</Link>
			<p className="relative z-40">Test</p>
		</nav>
	)
}


{/*
	<nav className="relative bg-gray-400 h-20 text-xl opacity-50 z-40">
			<img src="/images/logo.png" className="w-72 z-40"/>
		</nav>
*/}