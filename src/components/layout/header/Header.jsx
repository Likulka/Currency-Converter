import Cookies from 'js-cookie'
import { BsChevronLeft } from 'react-icons/bs'
import { IoExitOutline } from 'react-icons/io5'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { TOKEN } from '../../../api/api.constants'
import { useAuth } from '../../../hooks/useAuth'
import styles from './Header.module.scss'
import { headers } from './headers.data'

const Header = ({ backLink }) => {
	const { pathname } = useLocation()
	const { isAuth, setIsAuth } = useAuth()

	const path = headers.find(heading => heading.path == pathname || '')

	const navigate = useNavigate()

	const logoutHandler = () => {
		Cookies.remove(TOKEN)
		setIsAuth(false)
		navigate('/auth')
	}

	return (
		<header className={styles.wrapper}>
			<div>
				<Link to={backLink}>
					<BsChevronLeft fontSize={15} fill="white" />
				</Link>
			</div>
			<h1>{path?.heading}</h1>
			{isAuth && (
				<button onClick={logoutHandler}>
					<IoExitOutline />
				</button>
			)}
		</header>
	)
}

export default Header
