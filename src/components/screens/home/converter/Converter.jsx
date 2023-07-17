import axios from 'axios'
import { useState } from 'react'
import SwitchButton from '../../../ui/switch-button/SwitchButton'
import styles from './Converter.module.scss'
import CurrencyCard from './currency-card/CurrencyCard'

const Converter = () => {
	const [coins, setCoins] = useState([])
	const [error, setError] = useState()

	const fetchCoins = async event => {
		event.preventDefault()
		try {
			const { data } = await axios.get('https://api.1inch.io/v5.0/10/tokens')

			console.log(data)

			for (let key in data.tokens) {
				// console.log(data.tokens[key].name)
				setCoins(prevValue => [
					...prevValue,
					{ symbol: data.tokens[key].symbol, URL: data.tokens[key].logoURI }
				])
			}
		} catch {
			setError(true)
		}
	}
	// fetchCoins()

	// useEffect( () => {
	// 	fetchCoins()
	// }, [])

	console.log(coins)
	return (
		<section className="converter">
			<form
				// onSubmit={}
				name="converter"
				className={styles.form}
			>
				<CurrencyCard currency="btc" actionType="Send" inputName="input1" />
				<SwitchButton />
				<CurrencyCard
					currency="matic"
					actionType="Recieve"
					inputName="input2"
				/>

				<button onClick={event => fetchCoins(event)}>click</button>
			</form>
		</section>
	)
}

export default Converter
