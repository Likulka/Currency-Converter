import Cookies from 'js-cookie'
import { createContext, useState } from 'react'

import { TOKEN } from '../api/api.constants'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
	const [isAuth, setIsAuth] = useState(!!Cookies.get(TOKEN))
	// const [isAuth, setIsAuth] = useState(false)

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
