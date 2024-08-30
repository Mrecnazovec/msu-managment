'use server'

import PostModelNews from '../models/postModelsNews'
import PostModelsAdministration from '../models/postModelsAdministration'
import PostModelsTeacher from '../models/postModelsTeachers'
import PostModelsSoviet from '../models/postModelsSoviet'
import PostModelsSubject from '../models/postModelsSubject'

import connectDB from '../config/database'
import PostModelsPlan from '../models/postModelsPlan'
import PostModelsForAdmin from '../models/postModelsForAdmin'

// FIXME: GetPostsNews

export async function getPostsNews(perPage, page) {
	try {
		await connectDB()
		const data = JSON.parse(JSON.stringify(await PostModelNews.find().sort({ _id: -1 }).skip(perPage*(page-1)).limit(perPage)))
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

// FIXME: GetPostsNews

// FIXME: getPostsAdministration

export async function getPostsAdministration() {
	try {
		await connectDB()
		const data = JSON.parse(JSON.stringify(await PostModelsAdministration.find()))

		return { data }
	} catch (error) {
		return error
	}
}

// FIXME: getPostsAdministration

// FIXME: getPostsTeacher

export async function getPostsTeacher() {
	try {
		await connectDB()
		const data = JSON.parse(JSON.stringify(await PostModelsTeacher.find()))

		return { data }
	} catch (error) {
		return error
	}
}

// FIXME: getPostsTeacher

// FIXME: getPostsSoviet

export async function getPostsSoviet() {
	try {
		await connectDB()
		const data = JSON.parse(JSON.stringify(await PostModelsSoviet.find()))

		return { data }
	} catch (error) {
		return error
	}
}

// FIXME: getPostsSoviet

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
		const data = JSON.parse(JSON.stringify(await PostModelsForAdmin.find({login})))
		
		return { data }
	} catch (error) {
		return error
	}
}

export async function getPostsForAdminSolo(id) {
	try {
		await connectDB()
		const data = JSON.parse(JSON.stringify(await PostModelsForAdmin.find({_id: id})))
		
		return { data }
	} catch (error) {
		return error
	}
}

export async function updatePostsForAdmin(userId, fullName, login, hashedPassword) {
	try {
		await connectDB();
		const update = await PostModelsForAdmin.updateOne(
			{ _id: userId },
			{
				$set: {
					fullName: fullName,
					login: login,
					password: hashedPassword
				}
			}
		);
		return { success: update.nModified > 0 };
	} catch (error) {
		return { error: error.message };
	}
}

// FIXME: getPostsForAdmin
