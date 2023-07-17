import { BiChevronDown } from 'react-icons/bi'
import KeyboardButton from '../../../ui/keyboard-button/KeyboardButton'
import styles from './Keyboard.module.scss'

const Keyboard = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.arrow}>
				<BiChevronDown fontSize={20} />
			</div>
			<div className={styles.keyboard}>
				<KeyboardButton symbol="1" />
				<KeyboardButton symbol="2" />
				<KeyboardButton symbol="3" />
				<KeyboardButton symbol="4" />
				<KeyboardButton symbol="5" />
				<KeyboardButton symbol="6" />
				<KeyboardButton symbol="7" />
				<KeyboardButton symbol="8" />
				<KeyboardButton symbol="9" />
				<KeyboardButton symbol="," />
				<KeyboardButton symbol="0" />
				<KeyboardButton symbol="del" />
			</div>
		</section>
	)
}

export default Keyboard
