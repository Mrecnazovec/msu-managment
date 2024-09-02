import { deletePostsNews } from '@/app/_actions/postActions'
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request) {
	const props = await request.formData()
	const id = props.get("id");
	const action = props.get("action");


	console.log(id);

	if (action === 'deletePost') {
    result = await deletePostsNews(id);
	}

	return NextResponse.json({ success: true });
}
