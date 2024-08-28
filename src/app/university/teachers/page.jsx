import { getPostsTeacher } from '@/app/_actions/postActions'
import Breadcrumbs from '@/app/components/breadcrumbs/Breadcrumbs'
import PersonCard from '@/app/components/personCard/PersonCard'
import './page.scss'

export const metadata = {
	title: 'Преподаватели',
	description:'Страница "Преподаватели" сайта Менеджмента ТФ МГУ',	
}

const Teachers = async() => {

	const {data, error} = await getPostsTeacher()
	

	const breadcrumbs = [
		{
			title: 'Главная',
			href: '/',
		},
		{
			title: 'Университет',
			href: '/university',
		},
		{
			title: 'Преподавательский состав',
		},
	]

	return (
		<main>
			<h1 className='visually-hidden'>Преподавательский состав университета МГУ</h1>
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<section className='personCardData'>
				{data.map((item)=>(
					<PersonCard key={item._id} data={item} />
				))}
			</section>
		</main>
	)
}

export default Teachers
