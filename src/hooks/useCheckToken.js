import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { TOKEN } from '../api/api.constants'
import { useAuth } from './useAuth'

export const useCheckToken = () => {
	const { isAuth, setIsAuth } = useAuth()
	const { pathname } = useLocation()

	useEffect(() => {
		const token = Cookies.get(TOKEN)
		if (!token) {
		}
	}, [pathname, isAuth])
}
