const { createLoader } = require('simple-functional-loader')
const rehypePrism = require('@mapbox/rehype-prism')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
	experimental: {
		modern: true,
	},
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.(svg|png|jpe?g|gif|mp4)$/i,
			use: [
				{
					loader: 'file-loader',
					options: {
						publicPath: '/_next',
						name: 'static/media/[name].[hash].[ext]',
					},
				},
			],
		})

		const mdx = [
			options.defaultLoaders.babel,
			{
				loader: '@mdx-js/loader',
				options: {
					rehypePlugins: [rehypePrism],
				},
			},
		]

		config.module.rules.push({
			test: /\.mdx$/,
			oneOf: [
				{
					resourceQuery: /preview/,
					use: [
						...mdx,
						createLoader(function (src) {
							console.log('src 👇')
							console.log(src)
							console.log('src 👆')
							if (src.includes('<!--more-->')) {
								const [preview] = src.split('<!--more-->')
								return this.callback(null, preview)
							}

							const [preview] = src.split('<!--/excerpt-->')
							return this.callback(null, preview.replace('<!--excerpt-->', ''))
						}),
					],
				},
				{
					test: /blog/,
					use: [
						...mdx,
						createLoader(function (src) {
							const content = [
								'import Blog from "@/components/Blog"',
								'export { getStaticProps } from "@/utils/blog/getStaticProps"',
								'export { getStaticPaths } from "@/utils/blog/getStaticPaths"',
								'console.log("/blog")',
								src,
								'export default (props) => <Blog meta={meta} {...props} />',
							].join('\n')

							if (content.includes('<!--more-->')) {
								return this.callback(null, content.split('<!--more-->').join('\n'))
							}

							return this.callback(null, content.replace(/<!--excerpt-->.*<!--\/excerpt-->/s, ''))
						}),
					],
				},
				{
					test: /tutorial/,
					use: [
						...mdx,
						createLoader(function (src) {
							const content = [
								'import Tutorial from "@/components/Tutorial"',
								'export { getStaticProps } from "@/utils/tutorial/getStaticProps"',
								'export { getStaticPaths } from "@/utils/tutorial/getStaticPaths"',
								'console.log("/tutorial")',
								src,
								'export default (props) => <Tutorial meta={meta} {...props} />',
							].join('\n')

							if (content.includes('<!--more-->')) {
								return this.callback(null, content.split('<!--more-->').join('\n'))
							}

							return this.callback(null, content.replace(/<!--excerpt-->.*<!--\/excerpt-->/s, ''))
						}),
					],
				},
			],
		})

		return config
	},
})
