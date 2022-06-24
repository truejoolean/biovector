import NavigationBar from './navigationBar'
import Footer from './footer'
// import CookieConsent from "react-cookie-consent";


export default function Layout({ children, bg, footer, navbarAbsolute }) {
	return(
		<div className={bg}>
			<NavigationBar absolute={navbarAbsolute} />
			{children}
			{footer
				? <Footer />
				: <div/>}
		</div>
	)
}