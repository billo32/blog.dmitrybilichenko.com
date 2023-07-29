import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 text-sm font-medium uppercase text-amber-500 hover:text-amber-600 dark:hover:text-amber-400">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
