import { getPostsSubjects } from '@/app/_actions/postActions'
import Breadcrumbs from '@/app/components/breadcrumbs/Breadcrumbs'
import NavigationItem from '@/app/components/navigationCards/NavigationItem'
import './page.scss'

export const revalidate = 10

export const metadata = {
	title: 'Материалы',
	description:'Страница "Материалы" сайта Менеджмента ТФ МГУ',	
}

const Materials = async () => {
	const { data, error } = await getPostsSubjects()

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
			title: 'Материалы',
		},
	]
	return (
		<main className='materials'>
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<h1 className='visually-hidden'>Учебные материалы для студентов ТФ МГУ</h1>
			<section className='materials-section'>
				<div className='container'>
					<div className='container-section'>
						<div className='materials-container'>
							{data.map((item) => (
								<NavigationItem key={item._id} width='595' link={item.imgPath} title={item.title} href={`/for-students/materials/${item.name}`} height='261' />
							))}
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default Materials
