import NavBar from './navbar'
import Footer from './footer'


export default function Layout({ children, bg }) {
	return(
		<div className={bg}>
			<NavBar />
			{children}
			<Footer />
		</div>
	)
}