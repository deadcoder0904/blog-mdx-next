import path from 'path'
import {blogFilePaths} from "@/utils/mdxUtils"

export async function getStaticPaths() {
	const paths = blogFilePaths.map((path) => {
		const split = path.split('/')
		const slug = split[split.length - 2]
		return {
			params: {
				slug,
			},
		}
	})

	return {
		paths,
		fallback: false,
	}
}
