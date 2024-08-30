import Link from 'next/link'
import { getPostsForAdmin, getPostsNews } from '../_actions/postActions'
import New from '../components/news/New'
import './page.scss'

export const metadata = {
	title: 'Новости',
	description:'Страница "Новости" сайта Менеджмента ТФ МГУ',	
}


const NewsAll = async ({ searchParams }) => {
	let page = parseInt(searchParams.page, 10)
	page = !page || page < 1 ? 1 : page
	const perPage = 18

	const { data, dataCount, error } = await getPostsNews(perPage, page)

	const totalPages = Math.ceil(dataCount / perPage)

	const prevPage = page - 1 > 0 ? page - 1 : 1
	const nextPage = page + 1
	const isPageOutOfRange = page > totalPages

	const pageNumbers = []
	const offsetNumbers = 3
	for (let i = page - offsetNumbers; i <= page + offsetNumbers; i++) {
		if (i >= 1 && i <= totalPages) {
			pageNumbers.push(i)
		}
	}

	return (
		<main>
			<section className='news'>
				<h1 className='visually-hidden'>Новости ТФ МГУ</h1>
				<div className='container'>
					<h2>Все новости</h2>
					<div className='news-content'>
						{data.map((item) => (
							<New key={item._id} props={item} className='news-content-single' />
						))}
					</div>
					{isPageOutOfRange ? (
						<div className='errorPage'>
							<p className='h3'>Несуществующая страница</p>
							<Link href='?page=1'>Перейти ко всем новостям</Link>
						</div>
					) : (
						<div className={totalPages === 1 ? 'navigation-panel none' : 'navigation-panel'}>
							{page === 1 ? (
								<div aria-disabled='true' className='news-navigation prev disabled'>
									Назад
								</div>
							) : (
								<Link aria-label='Предыдущая страница' className='news-navigation prev active' href={`?page=${prevPage}`}>
									Назад
								</Link>
							)}

							<div className='numbers-panel'>
								{pageNumbers.map((pageNumber, index) => (
									<Link className={page === pageNumber ? 'active' : 'disabled'} key={index} href={`?page=${pageNumber}`}>
										{pageNumber}
									</Link>
								))}
							</div>

							{page === totalPages ? (
								<div aria-disabled='true' className='news-navigation next disabled'>
									Вперёд
								</div>
							) : (
								<Link aria-label='Следующая страница' className='news-navigation next active' href={`?page=${nextPage}`}>
									Вперёд
								</Link>
							)}
						</div>
					)}
				</div>
			</section>
		</main>
	)
}

export default NewsAll
