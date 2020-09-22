import glob from 'fast-glob'
import path from 'path'

export const BLOG_PATH = path.join(process.cwd(), 'posts')
export const blogFilePaths = glob.sync(`${BLOG_PATH}/blog/**/*.mdx`)
