import { getPostsForAdmin } from "@/app/_actions/postActions"

export async function In(store, login, password) {
	try {
		const { data, error } = await getPostsForAdmin(login, password)

		if (error) {
			console.error(error)
			return
		}

		// Сохраняем данные пользователя в localStorage
		const userData = {
			user_login: data[0].login,
			user_fullName: data[0].fullName,
			user_role: data[0].role,
			user_roleLevel: data[0].roleLevel,
		}

		localStorage.setItem('userData', JSON.stringify(userData))

		store.setState(userData)
	} catch (err) {
		console.error(err)
	}
}

export function Out(store) {
	// Очищаем данные из localStorage при логауте
	localStorage.removeItem('userData')

	store.setState({
		user_login: '',
		user_fullName: '',
		user_role: 'Пользователь',
		user_roleLevel: '0',
	})
}
export function initializeAuth(store) {
	// Проверяем наличие данных пользователя в localStorage при загрузке
	const userData = JSON.parse(localStorage.getItem('userData'))

	if (userData) {
		store.setState(userData)
	} else {
		store.setState({
			user_login: '',
			user_fullName: '',
			user_role: 'Пользователь',
			user_roleLevel: '0',
		})
	}
}
