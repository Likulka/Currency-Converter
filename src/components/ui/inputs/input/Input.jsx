import styles from './Input.module.scss'

const Input = ({ placeholder, name, register, error, options }) => {
	return (
		<div className={styles['input-wrapper']}>
			<input
				type="text"
				placeholder={placeholder}
				className={styles.input}
				{...register(name, { required: `${name} is required` })}
			/>
			{error && <span className={styles.error}>{error}</span>}
		</div>
	)
}

export default Input
