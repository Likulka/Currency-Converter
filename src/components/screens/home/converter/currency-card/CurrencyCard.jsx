import { BiChevronDown } from 'react-icons/bi'
import AmountInput from '../../../../ui/inputs/amount-input/AmountInput'
import styles from './CurrencyCard.module.scss'

const CurrencyCard = ({ currency, actionType, inputName }) => {
	return (
		<div className={`${styles.wrapper} ${currency}`}>
			<h2>{actionType}</h2>
			<div>
				<AmountInput name="btc" inputName={inputName} />
				<div>
					<h3>{currency}</h3>
					<BiChevronDown fontSize={30} />
				</div>
			</div>
		</div>
	)
}

export default CurrencyCard
