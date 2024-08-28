import NextTopLoader from 'nextjs-toploader'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Marquee from './components/marquee/Marquee'
import './styles/styles.scss'

export const metadata = {
	title: 'Менеджмент МГУ',
	description: 'Сайт факультета Менеджмент Ташкентского Филиала Московского Государственного Университета',
	keyword:
		'МГУ, ТФ МГУ, Менеджмент МГУ, Менеджмент ТФ МГУ, Филиал МГУ в Ташкенте, Ташкентский филиал МГУ, Московский Государственный Университет в Ташкенте, МГУ экономический факультет, Экономический факультета в Ташкенте, Экономический факультет',
	author: 'Сальников Алесандр Андреевич',
	icon: '/favicon.ico',
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
				<Header />
				{children}
				<Marquee />
				<Footer />
			</body>
		</html>
	)
}
