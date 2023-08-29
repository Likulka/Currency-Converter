import axios from 'axios'
import Cookies from 'js-cookie'
import { TOKEN } from './api.constants.js'

const API_URL = 'http://localhost:4000/api'

export const $axios = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: Cookies.get(TOKEN) ? `Bearer ${Cookies.get(TOKEN)}` : ''
	}
})
