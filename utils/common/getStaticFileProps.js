export const getStaticFileProps = (getAllPostPreviews) => {
	return getAllPostPreviews.map((post) => ({
		title: post.module.meta.title,
		slug: post.slug,
	}))
}
