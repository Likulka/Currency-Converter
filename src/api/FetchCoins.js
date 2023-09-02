import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { ConverterContext } from '../../providers/ConverterProvider'

const FetchCoins = () => {
	const [error, setError] = useState()
	const { handleRequestCoins } = useContext(ConverterContext)
	const fetchCoins = async () => {
		try {
			const { data } = await axios.get('https://api.1inch.io/v5.0/10/tokens')
			for (let key in data.tokens) {
				handleRequestCoins(data.tokens[key])
			}
		} catch {
			setError(true)
		}
	}

	useEffect(() => {
		fetchCoins()
	}, [])
}

export default FetchCoins
