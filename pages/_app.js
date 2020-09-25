import { MDXProvider } from '@mdx-js/react'
import { Image } from '../components/Image'

const MDXComponents = { Image }

const MyApp = ({ Component, pageProps }) => {
	return (
		<MDXProvider components={MDXComponents}>
			<Component {...pageProps} />
		</MDXProvider>
	)
}

export default MyApp
