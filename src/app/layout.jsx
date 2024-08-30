import NextTopLoader from 'nextjs-toploader'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Marquee from './components/marquee/Marquee'
import './styles/styles.scss'
import { AuthProvider } from './Providers'

export const metadata = {
	title: 'Факультет Менеджмент ТФ МГУ имени М.В.Ломоносова',
	authors: [{ name: 'Aleksandr A. Salnikov', url: 'https://t.me/AlexITdrom' }],
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<NextTopLoader
					color='#2299DD'
					initialPosition={0.08}
					crawlSpeed={200}
					height={3}
					crawl={true}
					showSpinner={false}
					easing='ease'
					speed={200}
					shadow='0 0 10px #2299DD,0 0 5px #2299DD'
				/>

				<AuthProvider>
					<Header />
					{children}
					<Marquee />
					<Footer />
				</AuthProvider>
			</body>
		</html>
	)
}
