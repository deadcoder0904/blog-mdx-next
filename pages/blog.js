import Link from 'next/link'

import { getAllBlogPreviews } from '@/utils/blog/getAllBlogPreviews'
import { formatDate } from '@/utils/date'

const blogs = getAllBlogPreviews()

const Blog = () => (
	<>
		<h2>Blog archives:</h2>
		<ul>
			{blogs.map((blog) => {
				const { slug, module } = blog
				const Description = module.default
				const frontmatter = module.meta
				return (
					<li key={frontmatter.title}>
						<article>
							<dl>
								<dt>Published on</dt>
								<dd>
									<time dateTime={frontmatter.date}>{formatDate(frontmatter.date)}</time>
								</dd>
							</dl>
							<h2>
								<Link href={`blog/${slug}`}>
									<a>{frontmatter.title}</a>
								</Link>
							</h2>
							<p>By {frontmatter.author}</p>
							<Description />
							<Link href={`blog/${slug}`}>
								<a>Read more &rarr;</a>
							</Link>
						</article>
					</li>
				)
			})}
		</ul>
	</>
)

export default Blog
