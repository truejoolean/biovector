import NavBar from './navbar'

export default function Layout({ children, bg }) {
	return(
		<div className={bg}>
			<NavBar />
			{children}
		</div>
	)
}