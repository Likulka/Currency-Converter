import { useCheckToken } from '../../hooks/useCheckToken'
import Header from './header/Header'

const Layout = ({ children, backLink }) => {
	useCheckToken()
	return (
		<section className="wrapper">
			<Header backLink={backLink} />
			<main className="main">{children}</main>
		</section>
	)
}

export default Layout
