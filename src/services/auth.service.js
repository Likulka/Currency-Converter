import Cookies from 'js-cookie'
import { $axios } from '../api/api'
import { TOKEN } from '../api/api.constants'

class AuthService {
	async main(email, password, type) {
		try {
			const { data } = await $axios.post(`/auth/${type}`, {
				email,
				password
			})

			if (data.token) Cookies.set(TOKEN, data.token)
			return data
		} catch (error) {
			// console.log(error.response.data.message)
			const authError = new Error(error)
			authError.response = error.response

			throw authError
		}
	}
}

export default new AuthService()
