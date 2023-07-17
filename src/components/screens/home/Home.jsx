import Converter from './converter/Converter'
import InfoSection from './info-section/InfoSection'
import Keyboard from './keyboard/Keyboard'
// import styles from './Home.module.scss';
const Home = () => {
	return (
		<main className="main">
			<Converter />
			<InfoSection />
			<Keyboard />
		</main>
	)
}

export default Home
