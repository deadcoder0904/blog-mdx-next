import glob from 'fast-glob'
import path from 'path'

export const POSTS_PATH = path.join(process.cwd(), 'posts')
export const blogFilePaths = glob.sync(`${POSTS_PATH}/blog/**/*.mdx`)
