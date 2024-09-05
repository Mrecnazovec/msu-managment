import { Schema, model, models } from 'mongoose'

const newShema = new Schema(
	{
		fullName: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			required: true,
		},
		login: {
			type: String,
			required: true,
		},
		roleLevel: {
			type: String,
			required: true,
		},
		imgPath: {
			type: String,
			required: true,
		},
		modificator: {
			type: String,
			request: false,
		}
	},
	{ timestamps: true }
)

const PostModelsForAdmin = models.forAdmin || model('forAdmin', newShema)

export default PostModelsForAdmin;