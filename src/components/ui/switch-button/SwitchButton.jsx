import { LuArrowDownUp } from 'react-icons/lu'
import styles from './SwitchButton.module.scss'

const SwitchButton = () => {
	return (
		<div className={styles.wrapper}>
			<LuArrowDownUp fontSize={22} />
		</div>
	)
}

export default SwitchButton
