import cl from 'clsx'
import styles from './SimpleButton.module.scss'

const SimpleButton = ({ children, clickHandler = null, type }) => {
	return (
		<button
			type={type}
			onClick={clickHandler}
			className={cl(styles['simple-button'], {
				[styles.lilac]: children === 'Sign up',
				[styles.yellow]: children === 'Sign in'
			})}
		>
			{children}
		</button>
	)
}

export default SimpleButton
