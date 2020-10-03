import Link from 'next/link'

const HomePage = () => {
	return (
		<div>
			<h1>Welcome to my little corner on the internet!</h1>
			<Link href="/blog">
				<a style={{ paddingRight: 10 }}>Blog</a>
			</Link>
			<Link href="/tutorial">
				<a>Tutorial</a>
			</Link>
		</div>
	)
}

export default HomePage
