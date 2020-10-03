import { getAllTutorialPreviews } from '@/utils/blog/getAllTutorialPreviews'
import { getStaticFileProps } from '@/utils/common/getStaticFileProps'

export async function getStaticProps() {
	return {
		props: {
			tutorials: getStaticFileProps(getAllTutorialPreviews()),
		},
	}
}
