import Breadcrumbs from '@/app/components/breadcrumbs/Breadcrumbs'
import PersonCardData from '@/app/components/personCard/PersonCardData'
import { getPostsAdministration } from '@/app/_actions/postActions'

export const metadata = {
	title: 'Руководство',
	description:'Страница "Руководство" сайта Менеджмента ТФ МГУ',	
}

const Administration = async() => {

	const {data, error} = await getPostsAdministration()
	

	const breadcrumbs = [
		{
			title:'Главная',
			href:'/'
		},
		{
			title:'Университет',
			href:'/university'
		},
		{
			title:'Руководство'
		}
		
	]

	return (
		<main>
			<h1 className="visually-hidden">Руководство университета МГУ</h1>
			<Breadcrumbs breadcrumbs={breadcrumbs}/>
			<PersonCardData props={data}/>
		</main>
	)
}

export default Administration
