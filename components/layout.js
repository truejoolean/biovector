import NavBar from './navbar'

export default function Layout({ children }) {
	return(
		<div className="bg-gray-100">
			<NavBar />
			{children}
		</div>
	)
}