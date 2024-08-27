import React from 'react'
import MyListItem from './MyListItem'

const MenuList = () => {
	const data = [
		{
			title:'Университет',
			href:'/university',
			links: [
				{
					title:'Руководство',
					href:'/university/administration'
				},
				{
					title:'Преподаватели',
					href:'/university/teachers'
				},
				{
					title:'Студ. совет',
					href:'/university/student-council'
				},
			]
		},
		{
			title:'Студентам',
			href:'/for-students',
			links: [
				{
					title:'Материалы',
					href:'/for-students/materials'
				},
				{
					title:'Уч. План',
					href:'/for-students/plan'
				},
				{
					title:'Помощь',
					href:'/for-students/help'
				},
			]
		},
		{
			title:'Поступающим',
			href:'/entrance',
			links: []
		},
	]

	return (
		data.map((item)=>(
			<MyListItem key={item.href} title={item.title} href={item.href} links={item.links}/>
		))
	)
}

export default MenuList