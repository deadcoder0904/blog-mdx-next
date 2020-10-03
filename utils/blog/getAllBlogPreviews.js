import { importAll, dateSortDesc } from '@/utils/common/getAllPreviews'

export const getAllBlogPreviews = () =>
	importAll(require.context('../../pages/blog/?preview', true, /\.mdx$/)).sort((a, b) =>
		dateSortDesc(a.module.meta.date, b.module.meta.date)
	)
