import { getPostsForAdminSolo } from '@/app/_actions/postActions'
import Form from '../ui/Form'
import './page.scss'

const page = async ({ params }) => {
	const { data, error } = await getPostsForAdminSolo(params.adminId)

	const param = [
		{
			title: 'Имя',
			content: data[0].fullName,
		},
		{
			title: 'Логин',
			content: data[0].login,
		},
		{
			title: 'Пароль',
			content: data[0].password,
		},
		{
			id: data[0]._id,
			imgPath: data[0].imgPath,
			gender: data[0].gender,
		}
	]


	return (
		<main className='change'>
			<Form param={param}/>
		</main>
	)
}

export default page
