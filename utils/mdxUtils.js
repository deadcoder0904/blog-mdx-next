import glob from 'fast-glob'
import path from 'path'

const PAGES_PATH = path.join(process.cwd(), 'pages')
export const blogFilePaths = glob.sync(`${PAGES_PATH}/blog/**/*.mdx`)
export const tutorialFilePaths = glob.sync(`${PAGES_PATH}/tutorial/**/*.mdx`)
