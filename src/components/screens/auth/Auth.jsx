import Layout from '../../layout/Layout'
import Input from '../../ui/inputs/input/Input'
import SimpleButton from '../../ui/simple-button/SimpleButton'
import styles from './Auth.module.scss'
import { useAuthPage } from './useAuthPage'

const Auth = () => {
	const { register, handleSubmit, onSubmit, errors, setType, error } =
		useAuthPage()

	return (
		<>
			<Layout backLink={'/'}>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Input
						placeholder="login or email"
						name="email"
						register={register}
						error={errors?.email?.message}
					/>

					<Input
						placeholder="password"
						name="password"
						error={errors?.password?.message}
						register={register}
					/>

					{error && (
						<div className={styles.error}>{error.response.data.message}</div>
					)}
					<div className={styles['form-button-wrapper']}>
						<SimpleButton
							clickHandler={() => () => {
								setType('login')
							}}
						>
							Sign in
						</SimpleButton>
						<SimpleButton
							type={'button'}
							clickHandler={() => {
								setType('register')
							}}
						>
							Sign up
						</SimpleButton>
					</div>
				</form>
			</Layout>
		</>
	)
}

export default Auth
