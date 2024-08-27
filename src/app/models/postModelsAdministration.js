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
		modificators: {
			type: String,
			required: false,
		}
	},
	{ timestamps: true }
)

const PostModelsAdministration = models.administration || model('administration', newShema)

export default PostModelsAdministration;