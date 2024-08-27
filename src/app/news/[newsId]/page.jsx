import { getPostsNewsSolo } from '@/app/_actions/postActions'
import './page.scss'
import Image from 'next/image'
import AllButton from '@/app/ui/AllButton'
import NotFound from '@/app/not-found'

export async function generateMetadata({ params }) {
  const { data, error } = await getPostsNewsSolo(params.newsId);

  if (!data || data.length === 0) {
    return {
      title: 'Не найдено',
    };
  }

  return {
    title: data[0].title, // Динамический title
		description:`Новость: ${data[0].title}`,
  };
}

const NewsId = async ({ params }) => {
	const { data, error } = await getPostsNewsSolo(params.newsId)

	if (!data) return <NotFound />

	return (
		<main>
			<section className='newSolo'>
				<div className='container'>
					<div className='container-section'>
						<div className='newSolo-box'>
							<h1 className='h2'>{data[0].title}</h1>
							<div className='newSolo-img'>
								<Image alt={data[0].title} width={300} height={300} src={data[0].imgPath}></Image>
							</div>
							<p className='description'>
								{data[0].description.map((desc, index) => (
									<span key={index}>{desc}</span>
								))}
							</p>
							<div className='button-group'>
								<AllButton text='На главную' href='/' />
								<AllButton text='Все новости' href='/news' />
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default NewsId
