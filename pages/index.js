import Link from 'next/link'
import tinytime from 'tinytime'

import { getAllBlogPreviews } from '@/utils/blog/getAllBlogPreviews'

const posts = getAllBlogPreviews()

const postDateTemplate = tinytime('{MMMM} {DD}, {YYYY}')

const HomePage = () => {	
	return (
		<div>
			<h1>Welcome to my blog!</h1>
			<h2>Archives:</h2>
			<ul>
				{posts.map((post) => {
					const frontmatter = post.module.meta
					return (
						<li key={frontmatter.title}>
							<article>
								<dl>
									<dt>Published on</dt>
									<dd>
										<time dateTime={frontmatter.date}>
											{postDateTemplate.render(new Date(frontmatter.date))}
										</time>
									</dd>
								</dl>
								<h2>
									<Link href={`blog/${post.slug}`}>
										<a>{frontmatter.title}</a>
									</Link>
								</h2>
								<p>By {frontmatter.author}</p>
								<p>{frontmatter.description}</p>
								<Link href={`blog/${post.slug}`}>
									<a>Read more &rarr;</a>
								</Link>
							</article>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default HomePage
