import NavigationBar from './navigationBar'
import Footer from './footer'


export default function Layout({ children, bg, footer }) {
	return(
		<div className={bg}>
			<NavigationBar />
			{children}
			{footer
				? <Footer />
				: <div/>}
		</div>
	)
}