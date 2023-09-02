import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import Layout from '../../layout/Layout'
import Converter from './converter/Converter'
import InfoSection from './info-section/InfoSection'
import Keyboard from './keyboard/Keyboard'
// import styles from './Home.module.scss';
const Home = () => {
	const navigate = useNavigate()
	const { isAuth, setIsAuth } = useAuth()

	// useEffect(() => {
	// 	if (isAuth) navigate('/auth')
	// }, [isAuth])
	return (
		<Layout backLink={'/auth'}>
			<Converter />
			<InfoSection />
			<Keyboard />
		</Layout>
	)
}

export default Home
