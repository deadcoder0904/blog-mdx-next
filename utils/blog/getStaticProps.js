import {getAllBlogPreviews} from '@/utils/blog/getAllBlogPreviews'

export async function getStaticProps() {
	return {
		props: {
			posts: getAllBlogPreviews().map((post) => ({
				title: post.module.meta.title,
				slug: post.slug,
			})),
		},
	}
}
