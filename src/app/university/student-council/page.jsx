import { getPostsSoviet } from '@/app/_actions/postActions'
import Breadcrumbs from '@/app/components/breadcrumbs/Breadcrumbs'
import PersonCardData from '@/app/components/personCard/PersonCardData'

export const metadata = {
	title: 'Студ. совет',
	description:'Страница "Студенческий совет" сайта Менеджмента ТФ МГУ',	
}

const Council = async() => {

	const {data, error} = await getPostsSoviet()
	

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
			title: 'Студенческий совет',
		},
	]

	return (
		<main>
			<h1 className='visually-hidden'>Преподавательский состав университета МГУ</h1>
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<PersonCardData props={data} />
		</main>
	)
}

export default Council