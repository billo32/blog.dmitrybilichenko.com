import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import LayoutWrapper from '@/components/LayoutWrapper'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps({ locale, defaultLocale, locales }) {
  const otherLocale = locale !== defaultLocale ? locale : ''
  const authorDetails = await getFileBySlug('authors', [`sparrowhawk`], otherLocale)
  return { props: { authorDetails, availableLocales: locales } }
}

export default function About({ authorDetails, availableLocales }) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <LayoutWrapper>
      <MDXLayoutRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
        availableLocales={availableLocales}
      />
    </LayoutWrapper>
  )
}
