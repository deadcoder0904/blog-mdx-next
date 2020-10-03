import Link from 'next/link'

import { getAllTutorialPreviews } from '@/utils/tutorial/getAllTutorialPreviews'
import { formatDate } from '@/utils/date'

const tutorials = getAllTutorialPreviews()

const Blog = () => (
	<>
		<h2>Tutorial archives:</h2>
		<ul>
			{tutorials.map((post) => {
				const { slug, module } = post
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
								<Link href={`tutorial/${slug}`}>
									<a>{frontmatter.title}</a>
								</Link>
							</h2>
							<p>By {frontmatter.author}</p>
							<Description />
							<Link href={`tutorial/${slug}`}>
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
