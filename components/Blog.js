import { useRouter } from 'next/router'
import Link from 'next/link'
import { MDXProvider } from '@mdx-js/react'
import tinytime from 'tinytime'

import { Image } from '@/components/Image'

const MDXComponents = { Image }

const postDateTemplate = tinytime('{MMMM} {DD}, {YYYY}')

const Blog = (props) => {
	const { posts, meta, children } = props
	const router = useRouter()
	const postIndex = posts.findIndex((post) => post.slug === router.pathname.substr(6))
	const previous = posts[postIndex + 1]
	const next = posts[postIndex - 1]

	return (
		<div>
			<h1>{meta.title}</h1>
			<h2>Author: {meta.author}</h2>
			<h3>Date: {postDateTemplate.render(new Date(meta.date))}</h3>
			<strong>
				<i>tags: {meta.tags.join(', ')}</i>
			</strong>
			<MDXProvider components={MDXComponents}>
				{children}
			</MDXProvider>
			{(next || previous) && (
				<div>
					{next && (
						<div>
							<h2>Next Article</h2>
							<div>
								<Link href={next.slug}>
									<a>{next.title}</a>
								</Link>
							</div>
						</div>
					)}
					{previous && (
						<div>
							<h2>Previous Article</h2>
							<div>
								<Link href={previous.slug}>
									<a>{previous.title}</a>
								</Link>
							</div>
						</div>
					)}
				</div>
			)}
			<div className="pt-8">
				<Link href="/">
					<a>&larr; Back to the blog</a>
				</Link>
			</div>
		</div>
	)
}

export default Blog
