import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { routes } from './routes.data'

const Router = () => {
	const { isAuth } = useAuth()

	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route => {
					if (route.auth && !isAuth) {
						console.log('router')
						return false
					}
					return (
						<Route
							path={route.path}
							key={route.path}
							element={<route.component />}
						/>
					)
				})}
			</Routes>
		</BrowserRouter>
	)
}

export default Router
