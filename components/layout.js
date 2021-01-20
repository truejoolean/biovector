import NavigationBar from './navigationBar'
import Footer from './footer'
import CookieConsent from "react-cookie-consent";


export default function Layout({ children, bg, footer }) {
	return(
		<div className={bg}>
			<NavigationBar />
			{children}
			{footer
				? <Footer />
				: <div/>}
			<CookieConsent>The Biovector uses cookies to enhance your user experience.</CookieConsent>
		</div>
	)
}