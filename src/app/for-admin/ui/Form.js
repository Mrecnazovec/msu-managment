'use client'

import { useState } from 'react'
import './form.scss'
import { redirect, useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { updatePostsForAdmin } from '@/app/_actions/postActions'
import { useSession } from 'next-auth/react'
import Loading from '@/app/loading'

const Form = ({ param }) => {
	const { data: session, status } = useSession()

	const router = useRouter()

	// Состояния должны быть определены вне любых условных блоков
	const [fullName, setFullName] = useState(param[0].content)
	const [login, setLogin] = useState(param[1].content)
	const [password, setPassword] = useState(param[2].content)
	const [userId, setUserId] = useState(param[3].id)
	const [error, setError] = useState('')
	const [passwordState, setPasswordState] = useState({ type: 'password', text: 'Показать пароль' })

	// Убедитесь, что условия проверяются только после инициализации хуков
	if (status === 'loading') {
		return <Loading />
	}

	if (status === 'unauthenticated') {
		redirect('/for-admin/auth')
		return null
	}

	const info = session?.user?.name
	if (info?._id !== param[3].id) {
		redirect('/for-admin')
		return null
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			if (fullName == param[0].content && login == param[1].content && password == param[2].content) {
				setError('Данные не изменились')
				return
			}
			const res = await updatePostsForAdmin(userId, fullName, login, password)

			if (res.error) {
				setError(res.error)
				return
			}

			if (res.success) {
				signOut()
				router.replace('/for-admin/auth')
			} else {
				signOut()
				router.replace('/for-admin/auth')
			}
		} catch (error) {
			setError(error.message)
		}
	}

	const onClick = () => {
		if (passwordState.type === 'password') {
			setPasswordState({ type: 'text', text: 'Скрыть пароль' })
		} else {
			setPasswordState({ type: 'password', text: 'Показать пароль' })
		}
	}

	return (
		<form onSubmit={handleSubmit} className='form'>
			<label>
				{param[0].title}
				<input type='text' value={fullName} onChange={(e) => setFullName(e.target.value)} />
			</label>
			<label>
				{param[1].title}
				<input type='text' value={login} onChange={(e) => setLogin(e.target.value)} />
			</label>
			<label>
				{param[2].title}
				<input type={passwordState.type} value={password} onChange={(e) => setPassword(e.target.value)} />
			</label>
			<button onClick={onClick} className='showPassword' type='button'>
				{passwordState.text}
			</button>
			{error && <div className='errorMessage'>{error}</div>}
			<button type='submit'>Изменить</button>
		</form>
	)
}

export default Form
