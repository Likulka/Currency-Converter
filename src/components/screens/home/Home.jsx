import Header from '../../layout/header/Header'
import AvailableCurrency from './available-currency/AvailableCurrency'
import Converter from './converter/Converter'
// import styles from './Home.module.scss';
const Home = () => {
	return (
		<section className="wrapper">
			<Header />
			<main>
				<Converter />
				<AvailableCurrency />
				<section className="terms">
					<div>
						<h4>Exchange fee</h4>
						<p>Read terms and conditions</p>
					</div>
					<span>40$</span>
				</section>
			</main>
		</section>
	)
}

export default Home
