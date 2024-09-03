'use server'

import PostModelNews from '../models/postModelsNews'
import PostModelsAdministration from '../models/postModelsAdministration'
import PostModelsTeacher from '../models/postModelsTeachers'
import PostModelsSoviet from '../models/postModelsSoviet'
import PostModelsSubject from '../models/postModelsSubject'

import connectDB from '../config/database'
import PostModelsPlan from '../models/postModelsPlan'
import PostModelsForAdmin from '../models/postModelsForAdmin'
import PostModelsMentors from '../models/PostModelsMentors'

// FIXME: GetPostsNews

export async function getPostsNews(perPage, page) {
	try {
		await connectDB()
		const data = JSON.parse(
			JSON.stringify(
				await PostModelNews.find()
					.sort({ _id: -1 })
					.skip(perPage * (page - 1))
					.limit(perPage)
			)
		)
		const dataCount = JSON.parse(JSON.stringify(await PostModelNews.countDocuments({})))

		return { data, dataCount }
	} catch (error) {
		return error
	}
}

export async function getPostsNewsSolo(id) {
	try {
		await connectDB()
		const data = JSON.parse(JSON.stringify(await PostModelNews.find({ _id: id })))

		return { data }
	} catch (error) {
		return error
	}
}

export async function deletePostsNews(id) {
	try {
		await connectDB()
		const data = JSON.parse(JSON.stringify(await PostModelNews.deleteOne({ _id: id })))

		return { data }
	} catch (error) {
		return error
	}
}

export async function updatePostsNews(object) {
	try {
		await connectDB()
		const update = await PostModelNews.updateOne(
			{ _id: object.id },
			{
				$set: {
					imgPath: object.path,
					title: object.title,
					description: object.description,
				},
			}
		)

		return { success: update.nModified > 0 }
	} catch (error) {
		return { error: error.message }
	}
}

export async function createPostsNews(object) {
	try {
		await connectDB()
		const update = await PostModelNews.insertMany({
			imgPath: object.path,
			title: object.title,
			description: object.description,
		})

		return { success: update.acknowledged }
	} catch (error) {
		return { error: error.message }
	}
}

// FIXME: GetPostsNews

// FIXME: getPostsAdministration

export async function getPostsAdministration(perPage, page) {
	try {
		await connectDB()
		const data = JSON.parse(
			JSON.stringify(
				await PostModelsAdministration.find()
					.skip(perPage * (page - 1))
					.limit(perPage)
			)
		)
		const dataCount = JSON.parse(JSON.stringify(await PostModelsAdministration.countDocuments({})))

		return { data, dataCount }
	} catch (error) {
		return error
	}
}

// FIXME: getPostsAdministration

// FIXME: getPostsTeacher

export async function getPostsTeacher(page, perPage) {
	try {
		await connectDB()
		const data = JSON.parse(
			JSON.stringify(
				await PostModelsTeacher.find()
					.skip(perPage * (page - 1))
					.limit(perPage)
			)
		)
		const dataCount = JSON.parse(JSON.stringify(await PostModelsTeacher.countDocuments({})))

		return { data, dataCount }
	} catch (error) {
		return error
	}
}

// FIXME: getPostsTeacher

// FIXME: getPostsSoviet

export async function getPostsSoviet(page, perPage) {
	try {
		await connectDB()
		const data = JSON.parse(
			JSON.stringify(
				await PostModelsSoviet.find()
					.skip(perPage * (page - 1))
					.limit(perPage)
			)
		)
		const dataCount = JSON.parse(JSON.stringify(await PostModelsSoviet.countDocuments({})))

		return { data, dataCount }
	} catch (error) {
		return error
	}
}

// FIXME: getPostsSoviet

// FIXME: getPostsMentors

export async function getPostsMentors() {
	try {
		await connectDB()
		const data = JSON.parse(JSON.stringify(await PostModelsMentors.find()))

		return { data }
	} catch (error) {
		return error
	}
}

// FIXME: getPostsMentors

// FIXME: getPostsSubjects

export async function getPostsSubjects() {
	try {
		await connectDB()
		const data = JSON.parse(JSON.stringify(await PostModelsSubject.find()))

		return { data }
	} catch (error) {
		return error
	}
}
export async function getPostsSubjectsSolo(id) {
	try {
		await connectDB()
		const data = JSON.parse(JSON.stringify(await PostModelsSubject.find({ name: id })))

		return { data }
	} catch (error) {
		return error
	}
}

// FIXME: getPostsSubjects

// FIXME: getPostsPlans

export async function getPostsPlans() {
	try {
		await connectDB()
		const data = JSON.parse(JSON.stringify(await PostModelsPlan.find()))

		return { data }
	} catch (error) {
		return error
	}
}

// FIXME: getPostsPlans

// FIXME: getPostsForAdmin

export async function getPostsForAdmin(login) {
	try {
		await connectDB()
		const data = JSON.parse(JSON.stringify(await PostModelsForAdmin.find({ login })))

		return { data }
	} catch (error) {
		return error
	}
}

export async function getPostsForAdminSolo(id) {
	try {
		await connectDB()
		const data = JSON.parse(JSON.stringify(await PostModelsForAdmin.find({ _id: id })))

		return { data }
	} catch (error) {
		return error
	}
}

export async function updatePostsForAdmin(object) {
	try {
		await connectDB()
		const update = await PostModelsForAdmin.updateOne(
			{ _id: object.userId },
			{
				$set: {
					imgPath: object.path,
					fullName: object.fullName,
					login: object.login,
					password: object.password,
				},
			}
		)

		return { success: update.nModified > 0 }
	} catch (error) {
		return { error: error.message }
	}
}

// FIXME: getPostsForAdmin
