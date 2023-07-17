import { useContext } from 'react'
import { ConverterContext } from '../../../providers/ConverterProvider'
import styles from './KeyboardButton.module.scss'

const KeyboardButton = ({ symbol }) => {
	const clickHandler = () => {
		symbol == 'del' ? setNum(num.slice(0, -1)) : setNum(num + symbol)
	}

	const { focusedInput, handleInputChange } = useContext(ConverterContext)

	const handleClick = event => {
		if (focusedInput) {
			handleInputChange(focusedInput, event.target.innerText, symbol)
		}

		console.log()
	}

	return (
		<button className={styles.wrapper} key={symbol} onClick={handleClick}>
			{symbol}
		</button>
	)
}

export default KeyboardButton
