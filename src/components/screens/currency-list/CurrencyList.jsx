import React, { useContext } from 'react'
import { ConverterContext } from '../../../providers/ConverterProvider'
import Layout from '../../layout/Layout'

const CurrencyList = () => {
	const { coins } = useContext(ConverterContext)

	return (
		<>
			<Layout>
				<div>{console.log(coins)}</div>
			</Layout>
		</>
	)
}

export default CurrencyList
