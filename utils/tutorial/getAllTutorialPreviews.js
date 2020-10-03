import { importAll, dateSortDesc } from '@/utils/common/getAllPreviews'

export const getAllTutorialPreviews = () =>
	importAll(require.context('../../pages/tutorial/?preview', true, /\.mdx$/)).sort((a, b) =>
		dateSortDesc(a.module.meta.date, b.module.meta.date)
	)
