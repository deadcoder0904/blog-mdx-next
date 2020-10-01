const importAll = (r) =>
	r.keys().map((fileName) => ({
		slug: fileName.substr(2).replace(/\/index\.mdx$/, ''),
		module: r(fileName),
	}))

const dateSortDesc = (a, b) => {
	if (a > b) return -1
	if (a < b) return 1
	return 0
}

export const getAllBlogPreviews = () =>
	importAll(require.context('../../pages/blog/?preview', true, /\.mdx$/)).sort((a, b) =>
		dateSortDesc(a.module.meta.date, b.module.meta.date)
	)
