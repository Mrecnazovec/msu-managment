import { Schema, model, models } from 'mongoose'

const newShema = new Schema(
	{
		imgPath: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		job: {
			type: String,
			required: true,
		},
		subject: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
)

const PostModelsTeacher = models.teacher || model('teacher', newShema)

export default PostModelsTeacher
