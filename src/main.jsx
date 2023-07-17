import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/fonts/Gilroy-Bold.ttf'
import './assets/fonts/Gilroy-Light.ttf'
import './assets/fonts/Gilroy-Regular.ttf'
import './assets/fonts/Gilroy-Semibold.ttf'
import './assets/styles/_currency.scss'
import './assets/styles/index.scss'
import { ConverterProvider } from './providers/ConverterProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ConverterProvider>
			<App />
		</ConverterProvider>
	</React.StrictMode>
)
