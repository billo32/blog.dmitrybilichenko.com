import Image from './Image'
import Link from './Link'

import useTranslation from 'next-translate/useTranslation'

import { motion } from 'framer-motion'
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const Card = ({ title, description, imgSrc, href }) => {
  const { t } = useTranslation()
  return (
    <motion.div variants={item} className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
      <div
        className={`${
          imgSrc && 'h-full'
        }  overflow-hidden rounded-2xl border-2 border-gray-200 border-opacity-60 shadow-md dark:border-gray-700`}
      >
        {imgSrc &&
          (href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              <Image
                alt={title}
                src={imgSrc}
                className="object-cover object-center md:h-36 lg:h-48"
                width={544}
                height={306}
              />
            </Link>
          ) : (
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          ))}
        <div className="p-6">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
          {href && (
            <Link
              href={href}
              className="text-base font-medium leading-6 text-amber-500 hover:text-amber-600 dark:hover:text-amber-400"
              aria-label={`Link to ${title}`}
            >
              {t('projects:learn')} &rarr;
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default Card
