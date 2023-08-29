import Cookies from 'js-cookie'
import { $axios } from '../api/api'
import { TOKEN } from '../api/api.constants'

class AuthService {
	async main(email, password, type) {
		try {
			console.log('request sent')
			const { data } = await $axios.post(`/auth/${type}`, {
				email,
				password
			})
			console.log(data)
			if (data.token) Cookies.set(TOKEN, data.token)
			console.log(Cookies.get(TOKEN))
			return data
		} catch (error) {
			console.log(error)
		}
	}
}

export default new AuthService()
