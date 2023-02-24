import Link from 'next/link'
import Image, { ImageProps } from 'next/image'
import { ReactNode } from 'react'
import { filenames } from 'data/filenames'
interface Props {
  children: ReactNode
  href: string
  className?: string
}

const CustomLink = (props: Props) => {
  const href = props.href
  const isBacklink =
    href && props.className?.includes(`internal`) && props.href.startsWith(`/`)

  if (isBacklink) {
    return (
      <Link href={filenames[href.replace(`/`, ``).toLowerCase()]}>
        {props.children}
      </Link>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

const RoundedImage = (props: ImageProps) => {
  return <Image className=" rounded-lg" {...props} />
}

const MDXComponents = {
  Image: RoundedImage,
  a: CustomLink,
}

export default MDXComponents
