import styles from './page.scss'
import Banner from './components/banner/Banner'
import News from './components/news/News'
import Navigation from './components/navigationCards/Navigation'

export const metadata = {
	title: 'Главная',
	description:'Добро пожаловать на главную страницу сайта Менеджмента ТФ МГУ! На сайте вы найдёте много полезных материалов, которые помогут как студентам, так и тем, кто интересуется направлением Менеджмент в Ташкентском Филиале МГУ',	
}

export default function Home() {

	
	const params = [
		{
			width: '1060',
			link:'/images/pictures/mainBuilding.jpg',
			title:'Университет', 
			href:'/university'
		},
		{
			width: '645',
			link:'/images/pictures/for-student.jpg',
			title:'Студентам', 
			href:'/for-students'
		},
		{
			width: '400',
			link:'/images/pictures/entrance.jpg',
			title:'Абитуриентам', 
			href:'/entrance'
		},
	]

	return (
		<main className={styles.main}>
			<Banner src='mainBuilding' title='МГУ в Ташкенте, факультет Менеджмент'/>
			<News/>
			<Navigation params={params}/>
		</main>
	)
}
