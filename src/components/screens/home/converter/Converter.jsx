import React from 'react'
import SwitchButton from '../../../ui/switch-button/SwitchButton'
import styles from './Converter.module.scss'
import CurrencyCard from './currency-card/CurrencyCard'
const Converter = () => {
	return (
		<section className="converter">
			<form name="converter" className={styles.form}>
				<CurrencyCard currency="btc" actionType="Send" />
				<SwitchButton />
				<CurrencyCard currency="matic" actionType="Recieve" />
			</form>
		</section>
	)
}

export default Converter
