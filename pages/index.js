import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import LayoutWrapper from '@/components/LayoutWrapper'

const DEFAULT_LAYOUT = 'HomeLayout'

export async function getStaticProps({ locale, defaultLocale, locales }) {
  const otherLocale = locale !== defaultLocale ? locale : ''
  const authorDetails = await getFileBySlug('authors', [`default`], otherLocale)
  return { props: { authorDetails, availableLocales: locales } }
}

export default function Home({ authorDetails, availableLocales }) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
      availableLocales={availableLocales}
    />
  )
}
