import { BsChevronLeft } from 'react-icons/bs'
import styles from './Header.module.scss'

const Header = ({ backLink }) => {
	return (
		<header className={styles.wrapper}>
			<div>
				<BsChevronLeft fontSize={15} />
			</div>
			<h1>Convert</h1>
		</header>
	)
}

export default Header
