import styles from './page.scss'
import Banner from './components/banner/Banner'
import News from './components/news/News'
import Navigation from './components/navigationCards/Navigation'

export const metadata = {
	title: 'Главная',
	description:'Главная страница сайта Менеджмента ТФ МГУ',	
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
