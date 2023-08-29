import Auth from '../components/screens/auth/Auth'
import CurrencyList from '../components/screens/currency-list/CurrencyList'
import Home from '../components/screens/home/Home'

export const routes = [
	{
		path: '/',
		component: Home,
		auth: true
	},
	{
		path: '/currencies',
		component: CurrencyList,
		auth: true
	},
	{
		path: '/auth',
		component: Auth,
		auth: false
	}
]
