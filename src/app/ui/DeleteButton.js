'use client'

import { useSession } from 'next-auth/react'
import './AllButton.scss'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const DeleteButton = ({id}) => {
	const { data: session, status } = useSession()
	const info = session?.user?.name

	const [confirm, setConfirm] = useState(false)
	const [isConfirmed, setIsConfirmed] = useState(false)

	const router = useRouter()

	const confirmed = () => {
		router.refresh()
	}

	const deleteNews = async() => {
		const props = new FormData()
		props.set('id', id)
		props.set('action', 'deletePost')

		try {
			
			const response = await fetch('/api/delete', {
				method: 'DELETE',
				body: props,
			})

			if (!response.success) setIsConfirmed(true)
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<button onClick={()=>setConfirm(true)} className={`newsShow ${status === 'authenticated' && info.roleLevel >= 2 ? '' : 'none'} ${confirm ? 'none' : 'active'}`}>Удалить новость</button>

			<button onClick={deleteNews} className={`newsShow ${status === 'authenticated' && info.roleLevel >= 2 ? '' : 'none'} ${confirm ? 'active' : 'none'} ${isConfirmed ? 'none' : ''}`}>Вы уверены?</button>

			<button onClick={confirmed} className={`newsShow ${status === 'authenticated' && info.roleLevel >= 2 ? '' : 'none'} ${confirm ? 'active' : 'none'} ${isConfirmed ? '' : 'none'}`}>Перезагрузить страницу</button>

		</>
	)
}

export default DeleteButton
