import { getPostsNews } from "@/app/_actions/postActions"

export async function GET(request) {

	const {data, error} = getPostsNews()

	
	
	return new Response(data)
}