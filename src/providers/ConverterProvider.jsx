import { createContext, useMemo, useState } from 'react'

export const ConverterContext = createContext()

const SetInputValue = (prevValue, setValue, symbol, value) => {
	if (symbol === 'del') {
		setValue(prevValue.slice(0, -1))
	} else setValue(prevValue + value)
}

export const ConverterProvider = ({ children }) => {
	const [inputValue1, setInputValue1] = useState('')
	const [inputValue2, setInputValue2] = useState('')
	const [focusedInput, setFocusedInput] = useState('')

	const [coins, setCoins] = useState([])

	const handleInputChange = (inputName, value, symbol) => {
		if (inputName === 'input1') {
			SetInputValue(inputValue1, setInputValue1, symbol, value)
		} else if (inputName === 'input2') {
			SetInputValue(inputValue2, setInputValue2, symbol, value)
		}
	}

	const handleRequestCoins = data => {
		setCoins(prevValue => [
			...prevValue,
			{ symbol: data.symbol, URL: data.logoURI }
		])
	}

	const handleInputFocus = inputName => {
		setFocusedInput(inputName)
	}

	const converterContextValue = useMemo(
		() => ({
			inputValue1,
			inputValue2,
			focusedInput,
			handleInputChange,
			handleInputFocus,
			coins,
			handleRequestCoins
		}),
		[inputValue1, inputValue2, focusedInput]
	)

	return (
		<ConverterContext.Provider value={converterContextValue}>
			{children}
		</ConverterContext.Provider>
	)
}
