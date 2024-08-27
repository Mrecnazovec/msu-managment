import { Schema, model, models } from 'mongoose'

const newShema = new Schema(
	{
		imgPath: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
)

const PostModelNews = models.new || model('new', newShema)

export default PostModelNews;