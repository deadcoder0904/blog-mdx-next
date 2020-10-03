export const getStaticFilePaths = (filePaths) => {
	const paths = filePaths.map((path) => {
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
