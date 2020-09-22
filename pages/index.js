import fs from 'fs'
import Link from 'next/link'
import tinytime from 'tinytime'
import matter from 'gray-matter'
import { blogFilePaths } from '../utils/mdxUtils'

const postDateTemplate = tinytime('{MMMM} {DD}, {YYYY}')

const HomePage = ({ posts }) => {
	return (
		<div>
			<h1>Welcome to my blog!</h1>
			<h2 style={{ color: 'palevioletred' }}>Archives:</h2>
			<ul>
				{posts.map((post) => {
					const frontmatter = post.data
					return (
						<li
							key={frontmatter.title}
							style={{
								listStyleType: 'none',
								paddingTop: 25,
								marginBottom: 75,
							}}
						>
							<article>
								<dl>
									<dt>Published on</dt>
									<dd
										style={{
											margin: 0,
										}}
									>
										<time dateTime={frontmatter.date}>
											{postDateTemplate.render(new Date(frontmatter.date))}
										</time>
									</dd>
								</dl>
								<h2>
									<Link as={`blog/${post.slug}`} href={`blog/[slug]`}>
										<a>{frontmatter.title}</a>
									</Link>
								</h2>
								<p>By {frontmatter.author}</p>
								<p>{frontmatter.description}</p>
								<Link as={`blog/${post.slug}`} href={`blog/[slug]`}>
									<a>Read more →</a>
								</Link>
							</article>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export const getStaticProps = () => {
	const posts = blogFilePaths.map((filePath) => {
		const split = filePath.split('/')
		const slug = split[split.length - 2]
		const source = fs.readFileSync(filePath)
		const { content, data } = matter(source)
		return {
			slug,
			content,
			data,
			filePath,
		}
	})
	return { props: { posts } }
}

export default HomePage
