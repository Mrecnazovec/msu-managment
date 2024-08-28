'use client'

import Link from 'next/link'
import './personCard.scss'
import Image from 'next/image'
import { useState } from 'react'

const PersonCard = (props) => {


	return (
		<div className='personCardMain'>
			{props.data.map((item) => {
				// useState для хранения состояния пути изображения и его класса
				const [imgClass, setImgClass] = useState(item.modificator || 'default-modificator')
				const [imgSrc, setImgSrc] = useState(item.imgPath || '/svg/user.svg')
				

				const handleImageError = () => {
					setImgClass('empty-img')
					setImgSrc('/svg/user.svg')

				}

				return (
					<div id={item.personId ? item.personId : ''} key={item._id} className='personCard'>
						<div className='container'>
							<div className='personCard-box'>
								<h2 className='title'>{item.name}</h2>
								<p className='text'>{item.about}</p>
								{item.href && item.link && item.span ? (
									<div className='link-box'>
										<span>
											{item.span}: <Link href={item.href}>{item.link}</Link>
										</span>
									</div>
								) : (
									<span></span>
								)}
							</div>
							<div className='img-box'>
								<Image
									alt={item.name}
									width={300}
									height={383}
									onError={handleImageError} // Обработчик ошибки
									className={imgClass} // Используем состояние для класса
									src={imgSrc}
								/>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default PersonCard
