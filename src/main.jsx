import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
	<QueryClientProvider client={queryClient}>
		<App />
	</QueryClientProvider>
)