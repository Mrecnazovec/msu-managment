'use client'

import { checkPostsForAdmin, createPostsForAdminChange } from '@/app/_actions/postActions'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { redirect, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import './changePostNews.scss'

const YangiAdminPosts = () => {
	const [fullName, setFullName] = useState('')
	const [initialName, setInitialName] = useState('')
	const [password, setPassword] = useState('')
	const [imgPath, setImgPath] = useState('')
	const [modificator, setModificator] = useState('')
	const [role, setRole] = useState('')
	const [roleLevel, setRoleLevel] = useState('')
	const [login, setLogin] = useState('')
	const [gender, setGender] = useState('')

	const [selectedFile, setSelectedFile] = useState(null)
	const { data: session, status } = useSession()
	const [error, setError] = useState('')
	const [confirm, setConfirm] = useState(false)

	const router = useRouter()

	useEffect(() => {
		if (selectedFile) {
			setSelectedFile(selectedFile)
		}
	}, [selectedFile])

	if (status === 'unauthenticated') {
		redirect('/for-admin/auth')
	}

	const adjustTextareaHeight = (textarea) => {
		textarea.style.height = 'auto'
		textarea.style.height = textarea.scrollHeight + 'px'
	}

	useEffect(() => {
		const textareas = document.querySelectorAll('textarea')
		textareas.forEach((textarea) => adjustTextareaHeight(textarea))
	}, [])

	const handleFileChange = (e) => {
		const file = e.target.files[0]
		setSelectedFile(file)

		if (file) {
			const url = URL.createObjectURL(file)
			setImgPath(url)
		}
	}

	const handleSubmitTwo = async (e) => {
		e.preventDefault()
		const formData = new FormData()
		formData.set('file', selectedFile)
		formData.set('folder', 'avatar')

		try {
			const response = await fetch('/api/upload', {
				method: 'POST',
				body: formData,
			})

			const result = selectedFile ? await response.json() : ''

			const path = !result ? imgPath : result.path.replace(/\\/g, '/')

			const check = { login }

			const checkLogin = await checkPostsForAdmin(check)

			if (login !== '' && checkLogin.dataCount >= 1) {
				setError('Логин занят')
				return
			}

			const object = { fullName, password, modificator, role, login, gender, path, roleLevel, initialName }

			const res = await createPostsForAdminChange(object)

			if (res.error) {
				setError(res.error)
				return
			}

			setConfirm(true)
		} catch (error) {
			setError(error.message)
			console.log(error)
		}
	}

	const refresh = () => {
		router.replace(`/for-admin/admin-change`)
		setConfirm(false)
	}
	const toNew = () => {
		router.replace(`/for-admin/admin-change`)
	}
	const modificatorChange = () => {
		if (modificator === '') {
			setModificator('card--big')
		} else {
			setModificator('')
		}
	}
	return (
		<form onSubmit={handleSubmitTwo} className='form'>
			<button onClick={toNew} className='submitButton start' type='submit'>
				Перейти к админам
			</button>
			<label className='img-label'>
				<input onChange={handleFileChange} className='visually-hidden' type='file' />
				<div className={`preview-box ${modificator === '' ? 'not-mode' : ''}`}>
					{imgPath ? (
						<Image alt='' width={360} height={240} className='preview' src={imgPath} />
					) : (
						<svg width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M116.909 99.8047H83.091C49.8305 99.8047 22.7715 126.864 22.7715 160.124V200H177.229V160.124C177.229 126.864 150.17 99.8047 116.909 99.8047Z'
								fill='#7D0A35'
							/>
							<path
								d='M100 0C74.2802 0 53.356 20.9246 53.356 46.6445C53.356 72.3641 74.2802 93.2887 100 93.2887C125.72 93.2887 146.644 72.3641 146.644 46.6441C146.644 20.9246 125.72 0 100 0Z'
								fill='#7D0A35'
							/>
						</svg>
					)}
				</div>
				<p className='preview-change'>Изменить Фото</p>
			</label>
			<p className='preview-change' onClick={() => setImgPath('')}>
				Удалить фото
			</p>

			<label>
				Имя
				<input required type='text' value={fullName} onChange={(e) => setFullName(e.target.value)} />
			</label>
			<label>
				Имя по умолчанию
				<textarea required type='text' value={initialName} onChange={(e) => setInitialName(e.target.value)} />
			</label>
			<label>
				Логин
				<input required type='text' value={login} onChange={(e) => setLogin(e.target.value)} />
			</label>
			<label>
				Пароль
				<input required type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
			</label>
			<label>
				Название роли
				<input required type='text' value={role} onChange={(e) => setRole(e.target.value)} />
			</label>
			<label>
				Уровень полномочий
				<input required type='text' placeholder='1, 2, 3' value={roleLevel} onChange={(e) => setRoleLevel(e.target.value)} />
			</label>
			<label>
				Пол
				<input required type='text' placeholder='male / female' value={gender} onChange={(e) => setGender(e.target.value)} />
			</label>
			<label>
				Широкое фото
				<div onClick={modificatorChange} className={`check-box ${modificator === '' ? '' : 'checked'}`}>
					<div className='check-svg'>
						<svg version='1.1' viewBox='0 0 548.873 548.873' width='30' height='30'>
							<g>
								<g>
									<polygon
										points='449.34,47.966 195.46,301.845 99.533,205.917 0,305.449 95.928,401.378 195.46,500.907 294.99,401.378 548.873,147.496 '
										fill='#000'
									></polygon>
								</g>
							</g>
						</svg>
					</div>
				</div>
			</label>

			{error && <div className='errorMessage'>{error}</div>}
			{!confirm && (
				<button className='submitButton' type='submit'>
					Создать
				</button>
			)}
			{confirm && (
				<button onClick={refresh} className='submitButton' type='submit'>
					Перейти к админам
				</button>
			)}
		</form>
	)
}

export default YangiAdminPosts
