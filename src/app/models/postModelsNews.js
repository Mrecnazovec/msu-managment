import { Schema, model, models } from 'mongoose'

const newShema = new Schema(
	{
		imgPath: {
			type: String,
			required: false,
		},
		title: {
			type: String,
			required: true,
		},
		description: {
			type: Array,
			required: true,
		},
	},
	{ timestamps: true }
)

const PostModelNews = models.new || model('new', newShema)

export default PostModelNews;