import { getAllBlogPreviews } from '@/utils/blog/getAllBlogPreviews'
import { getStaticFileProps } from '@/utils/common/getStaticFileProps'

export async function getStaticProps() {
	return {
		props: {
			blogs: getStaticFileProps(getAllBlogPreviews()),
		},
	}
}