import { MDXProvider } from '@mdx-js/react'
import { Image } from '../components/Image'

import './new.css'
import './dark.css'

const mdComponents = { Image }

const MyApp = ({ Component, pageProps }) => {
	return (
		<MDXProvider components={mdComponents}>
			<Component {...pageProps} />
		</MDXProvider>
	)
}

export default MyApp
