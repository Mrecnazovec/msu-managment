import Breadcrumbs from '@/app/components/breadcrumbs/Breadcrumbs'
import PersonCard from '@/app/components/personCard/PersonCard'
import './page.scss'
import { getPostsMentors } from '@/app/_actions/postActions'

export const revalidate = 60

export const metadata = {
	title: 'Руководство',
	description: 'Страница "Руководство" сайта Менеджмента ТФ МГУ',
}

const Mentors = async () => {
	const { data, error } = await getPostsMentors()

	const breadcrumbs = [
		{
			title: 'Главная',
			href: '/',
		},
		{
			title: 'Студентам',
			href: '/for-students',
		},
		{
			title: 'Менторы',
		},
	]

	return (
		<main>
			<h1 className='visually-hidden'>Руководство университета МГУ</h1>
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<section className='personCardData'>
				{data.map((item)=>(
					<PersonCard key={item._id} data={item} />
				))}
			</section>
		</main>
	)
}

export default Mentors
