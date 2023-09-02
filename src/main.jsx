import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/fonts/Gilroy-Bold.ttf'
import './assets/fonts/Gilroy-Light.ttf'
import './assets/fonts/Gilroy-Regular.ttf'
import './assets/fonts/Gilroy-Semibold.ttf'
import './assets/styles/_currency.scss'
import './assets/styles/index.scss'
import AuthProvider from './providers/AuthProvider'
import { ConverterProvider } from './providers/ConverterProvider'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<AuthProvider>
		<QueryClientProvider client={queryClient}>
			<ConverterProvider>
				<App />
			</ConverterProvider>
		</QueryClientProvider>
	</AuthProvider>
)
