import { useState } from 'react'
import styles from './Input.module.scss'
const Input = ({ name }) => {
	const [inputValue, setInputValue] = useState('')

	const handleInputChange = event => {
		setInputValue(event.target.value)
	}

	const getTextWidth = text => {
		const canvas = document.createElement('canvas')
		const context = canvas.getContext('2d')
		context.font = window.getComputedStyle(document.getElementById(name)).font
		const width = context.measureText(text).width
		return width
	}

	const handleInputBlur = event => {
		const textWidth = getTextWidth(inputValue)
		console.log('Длина текста:', textWidth, 'пикселей')
		event.target.style.backgroundSize = `${textWidth}px 2.5px`
	}

	const handleInputFocus = event => {
		event.target.style.backgroundSize = '0 0'
	}

	return (
		<input
			className={styles.input}
			value={inputValue}
			onChange={handleInputChange}
			onFocus={handleInputFocus}
			onBlur={handleInputBlur}
			name={name}
			type="text"
			id={name}
			placeholder="Enter amount"
			size={1}
		/>
	)
}

export default Input
