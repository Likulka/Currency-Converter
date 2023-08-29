import { useContext, useRef } from 'react'
import { ConverterContext } from '../../../../providers/ConverterProvider'
import styles from './AmountInput.module.scss'

const AmountInput = ({ name, inputName }) => {
	const divRef = useRef(null)
	const inputRef = useRef(null)

	const { inputValue1, inputValue2, handleInputFocus } =
		useContext(ConverterContext)

	const inputValue = inputName === 'input1' ? inputValue1 : inputValue2

	const inputStyle = {
		width: `${inputValue.length * 17}px`
	}

	return (
		<div className={styles.container}>
			<div
				className={styles.wrapper}
				onClick={() => inputRef.current.focus()}
				ref={divRef}
			>
				<input
					ref={inputRef}
					className={styles.input}
					onFocus={() => handleInputFocus(inputName)}
					value={inputValue}
					onChange={event => {
						event.preventDefault()
					}}
					name={name}
					type="text"
					id={name}
					placeholder="Enter amount"
					style={
						inputValue
							? inputValue.length * 17 < divRef.current.offsetWidth
								? inputStyle
								: { width: '100%' }
							: { width: '100%' }
					}
				/>
			</div>
		</div>
	)
}

export default AmountInput
