import React from 'react'
import MenuList from './MenuList'

const Nav = ({modification}) => {





	return (
		<nav className={`menu ${modification}`}>
			<ul className='list'>
				<MenuList />
			</ul>
		</nav>
	)
}

export default Nav
