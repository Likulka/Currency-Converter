import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from '../components/screens/not-found/NotFound'
import { useAuth } from '../hooks/useAuth'
import { routes } from './routes.data'

const Router = () => {
	const { isAuth } = useAuth()

	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route => {
					if (route.auth && !isAuth) {
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
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
