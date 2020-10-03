export const importAll = (r) =>
	r.keys().map((fileName) => ({
		slug: fileName.substr(2).replace(/\/index\.mdx$/, ''),
		module: r(fileName),
	}))

export const dateSortDesc = (a, b) => {
	if (a > b) return -1
	if (a < b) return 1
	return 0
}
