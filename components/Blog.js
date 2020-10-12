import { useRouter } from 'next/router'
import Link from 'next/link'
import { MDXProvider } from '@mdx-js/react'

import { Image } from '@/components/Image'
import { formatDate } from '@/utils/date'

const MDXComponents = { Image }

const Blog = ({ blogs, meta, children }) => {
	const router = useRouter()
	const blogIndex =
		blogs.length > 1 && blogs.findIndex((blog) => blog.slug === router.pathname.substr(6))
	const previous = blogs[blogIndex + 1]
	const next = blogs[blogIndex - 1]

	return (
		<div>
			<h1>{meta.title}</h1>
			<h2>Author: {meta.author}</h2>
			<h3>Date: {formatDate(meta.date)}</h3>
			<strong>
				<i>tags: {meta.tags.join(', ')}</i>
			</strong>
			<MDXProvider components={MDXComponents}>{children}</MDXProvider>
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
