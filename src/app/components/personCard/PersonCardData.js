import PersonCard from './PersonCard'
import './personCardData.scss'

const  PersonCardData = async({props}) => {

	const {data, error} = await props()		

	return (
		<section className='personCardData'>
				<PersonCard data={data} />
		</section>
	)
}

export default PersonCardData
