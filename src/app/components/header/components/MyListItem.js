'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const MyListItem = ({ title, href, links }) => {
	const [isActive, setIsActive] = useState(false)
	const pathname = usePathname()

	const handleMouseEnter = () => {
		setIsActive(true)
	}

	const handleMouseLeave = () => {
		setIsActive(false)
	}

	const handleClick = () => {
		setIsActive(!isActive)
	}

	return (
		<li className={isActive ? 'active' : ''} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
			<div className={`${href == pathname ? 'active' : ''}`}>
				<Link className='link' href={href}>
					{title}
				</Link>
				<svg width='15' height='8' viewBox='0 0 10 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M5.63702 6.70213C5.31441 7.03955 4.78676 7.04395 4.45856 6.71196L0.256274 2.46116C-0.0719405 2.12914 -0.0764683 1.58645 0.246161 1.249C0.568799 0.911568 1.09641 0.907166 1.42464 1.23917L5.03262 4.88885L8.57921 1.17948C8.90183 0.842044 9.42947 0.837641 9.75767 1.16965C10.0859 1.50166 10.0904 2.04435 9.76779 2.3818L5.63702 6.70213Z'
						fill='white'
					/>
				</svg>
			</div>
			<div>
				{links.map((link) => (
					<Link key={link.href} href={link.href}>
						{link.title}
					</Link>
				))}
			</div>
		</li>
	)
}

export default MyListItem
