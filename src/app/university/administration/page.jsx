import Breadcrumbs from '@/app/components/breadcrumbs/Breadcrumbs'
import { getPostsAdministration } from '@/app/_actions/postActions'
import PersonCard from '@/app/components/personCard/PersonCard'
import './page.scss'

export const revalidate = 60

export const metadata = {
	title: 'Руководство',
	description: 'Страница "Руководство" сайта Менеджмента ТФ МГУ',
}

const Administration = async () => {
	const { data, error } = await getPostsAdministration()

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
			title: 'Руководство',
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

export default Administration
