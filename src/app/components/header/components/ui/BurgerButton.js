'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import MenuList from '../MenuList'

const BurgerMenu = () => {
	const pathname = usePathname()
	const [isOpen, setIsOpen] = useState(false)
	const [isClose, setIsClose] = useState(true)

	// Закрываем меню при изменении pathname
	useEffect(() => {
		setIsOpen(false)
		setIsClose(true)
	}, [pathname])

	const toggleMenu = () => {
		setIsOpen(!isOpen)
		setIsClose(!isClose)
	}

	return (
		<>
			<button type='button' className={`${isOpen ? 'open' : ''} ${isClose ? 'close' : ''}`} onClick={toggleMenu}></button>
			<div className={`${isOpen ? 'open' : ''} burgerWindow ${isClose ? 'close' : ''}`}>
				<ul className='list'>
					<MenuList />
				</ul>
			</div>
		</>
	)
}

export default BurgerMenu
