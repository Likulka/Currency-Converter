import Header from './header/Header'

const Layout = ({ children }) => {
	return (
		<section className="wrapper">
			<Header />
			{children}
		</section>
	)
}

export default Layout
