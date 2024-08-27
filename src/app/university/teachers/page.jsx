import { getPostsTeacher } from '@/app/_actions/postActions'
import Breadcrumbs from '@/app/components/breadcrumbs/Breadcrumbs'
import PersonCardData from '@/app/components/personCard/PersonCardData'

export const metadata = {
	title: 'Преподаватели',
	description:'Страница "Преподаватели" сайта Менеджмента ТФ МГУ',	
}

const Teachers = () => {
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
			<PersonCardData props={getPostsTeacher} />
		</main>
	)
}

export default Teachers
