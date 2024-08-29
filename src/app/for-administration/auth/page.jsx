'use client'

import useGlobal from '@/app/store'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const AdminAuth = () => {
	const [globalState, globalActions] = useGlobal()

	const { user_login, user_fullName, user_role, user_roleLevel } = globalState
	const { sign } = globalActions

	const router = useRouter()

	useEffect(() => {
		if (user_login === '') {
			router.push('/for-administration')
		}
	}, [user_login, router])

	return (
		<main className='AdminAuth'>
			<div className='container'>
				<div className='container-section'>
					<div>{user_fullName}</div>
					<button onClick={() => sign.Out()}>Выйти</button>
				</div>
			</div>
		</main>
	)
}

export default AdminAuth
