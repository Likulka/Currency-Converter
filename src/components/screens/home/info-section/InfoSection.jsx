import InfoBlock from './info-block/InfoBlock'
import styles from './InfoSection.module.scss'

const InfoSection = () => {
	return (
		<section className={styles.wrapper}>
			<InfoBlock type="available" />
			<InfoBlock />
		</section>
	)
}

export default InfoSection
