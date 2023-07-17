import { LuBitcoin } from 'react-icons/lu'
import styles from './InfoBlock.module.scss'

const InfoBlock = ({ type }) => {
	return (
		<div className={styles.wrapper}>
			{type == 'available' ? (
				<>
					<h4>Available portfolio</h4>
					<div className={styles.row}>
						<div className="icon">
							<LuBitcoin className={styles.icon} color="black" />
						</div>
						<span>1,3222.45 BTC</span>
					</div>
				</>
			) : (
				<>
					<div className={styles.column}>
						<h4>Exchange fee</h4>
						<p>Read terms and conditions</p>
					</div>
					<span>40$</span>
				</>
			)}
		</div>
	)
}

export default InfoBlock
