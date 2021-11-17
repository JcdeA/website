import Footer from './footer'
import Nav from './nav'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { ReactNode } from 'react'

const Layout: React.FC<{
  className?: string
  children: ReactNode
  title?: string
  date?: string
  image?: string
  desc?: string
  type?: string
}> = ({ className, children, image, date, title, desc, type }) => {
  const router = useRouter()

  return (
    <>
      <NextSeo
        title={title || `Jeeho Ahn | Portfolio`}
        description={
          desc || `Student, Full Stack Developer, Open Source enthusaist.`
        }
        canonical={`https:/jcde.xyz/${router.asPath}`}
        openGraph={{
          type: type,
          url: `https:/jcde.xyz/${router.asPath}`,
          title: title || `Jeeho Ahn | Portfolio`,
          article: { publishedTime: date },

          description:
            desc || `Student, Full Stack Developer, Open Source enthusaist.`,
          site_name: title || `Jeeho Ahn | Portfolio`,
          images: [
            {
              url: image || ``,
            },
          ],
        }}
        twitter={{
          handle: `@IoJcde`,
          cardType: `summary_large_image`,
        }}
      />
      <Head>
        <link
          href="/static/fonts/Inter-roman.var.woff2"
          rel="preload"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      {process.env.NODE_ENV == `production` && (
        <Script
          strategy="afterInteractive"
          data-domain="jcde.xyz"
          src="https://stats.willit.fail/js/plausible.js"
        />
      )}

      <Nav />
      <main
        className={`mx-auto max-w-2xl px-4  dark:text-gray-100 text-black  ${className}`}
      >
        {children}
        <Footer />
      </main>
    </>
  )
}

export default Layout
