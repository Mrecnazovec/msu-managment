'use client'

import { useEffect, useState } from 'react'
import './page.scss'
import useGlobal from '../store'
import { useRouter } from 'next/navigation'

const AdminPanel = () => {
	const [globalState, globalActions] = useGlobal()

	const { user_login } = globalState

	const { sign } = globalActions

	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')

	const router = useRouter()

	useEffect(() => {
		sign.initializeAuth()
	}, [])

	useEffect(() => {
		if (user_login !== '') {
			router.push('/for-administration/auth')
		}
	}, [user_login, router])

	return (
		<main className='admin-panel'>
			{user_login === '' ? (
				<div className='form'>
					<label>
						Логин
						<input
							type='text'
							value={login}
							onChange={(e) => {
								setLogin(e.target.value)
							}}
						/>
					</label>
					<label>
						Пароль
						<input
							type='password'
							value={password}
							onChange={(e) => {
								setPassword(e.target.value)
							}}
						/>
					</label>
					<button onClick={() => sign.In(login, password)}>Авторизоваться</button>
				</div>
			) : (
				<div>{user_login}, вы успешно авторизовались!</div>
			)}
		</main>
	)
}

export default AdminPanel
