import NavBar from './navbar'
import Footer from './footer'


export default function Layout({ children, bg, footer }) {
	return(
		<div className={bg}>
			<NavBar />
			{children}
			{footer
				? <Footer />
				: <div/>}
		</div>
	)
}