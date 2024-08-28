import { getPostsSoviet } from '@/app/_actions/postActions'
import Breadcrumbs from '@/app/components/breadcrumbs/Breadcrumbs'
import PersonCard from '@/app/components/personCard/PersonCard'
import './page.scss'

export const revalidate = 60

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
			<section className='personCardData'>
				{data.map((item)=>(
					<PersonCard key={item._id} data={item} />
				))}
			</section>
		</main>
	)
}

export default Council