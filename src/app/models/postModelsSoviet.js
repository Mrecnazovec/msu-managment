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
		
	},
	{ timestamps: true }
)

const PostModelsSoviet = models.soviet || model('soviet', newShema)

export default PostModelsSoviet
