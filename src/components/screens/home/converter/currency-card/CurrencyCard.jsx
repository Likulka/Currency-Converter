import { BiChevronDown } from 'react-icons/bi'
import Input from '../../../../ui/input/Input'
import styles from './CurrencyCard.module.scss'

const CurrencyCard = ({ currency, actionType }) => {
	return (
		<div className={`${styles.wrapper} ${currency}`}>
			<h2>{actionType}</h2>
			<div>
				<Input name="btc" />
				<div>
					<h3>{currency}</h3>
					<BiChevronDown fontSize={30} />
				</div>
			</div>
		</div>
	)
}

export default CurrencyCard
