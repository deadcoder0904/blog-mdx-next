import { tutorialFilePaths } from '@/utils/mdxUtils'
import { getStaticFilePaths } from '@/utils/common/getStaticFilePaths'

export async function getStaticPaths() {
	return getStaticFilePaths(tutorialFilePaths)
}
