import SwitchButton from '../../../ui/switch-button/SwitchButton'
import styles from './Converter.module.scss'
import CurrencyCard from './currency-card/CurrencyCard'

const Converter = () => {
	return (
		<section className="converter">
			<form name="converter" className={styles.form}>
				<CurrencyCard currency="btc" actionType="Send" inputName="input1" />
				<SwitchButton />
				<CurrencyCard
					currency="matic"
					actionType="Recieve"
					inputName="input2"
				/>
			</form>
		</section>
	)
}

export default Converter
