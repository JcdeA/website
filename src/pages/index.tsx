import type { NextPage } from 'next'
import { AiFillHeart } from 'react-icons/ai'
import Layout from '../components/layout'
import Tag from '../components/tag'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="container mx-auto max-w-4xl">
        <div className="mt-8 ml-4 mb-16 h-36 w-36  rounded-full ring-4 ring-offset-8 ring-offset-primary ring-teal-500 dark:ring-teal-400 select-none">
          <Image
            className="object-cover  rounded-full"
            priority
            src=" https://avatars.githubusercontent.com/u/31413538?v=4"
            width="144"
            height="144"
            alt="Jeeho's Profile Photo"
          />
        </div>
        <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-teal-500 dark:text-teal-400 mb-3">
          Hey there,
        </h2>
        <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold dark:text-white">
          I&apos;m Jeeho.
        </h1>

        <p className="text-secondary prose-lg dark:prose-light pt-2">
          I&apos;m a student and a software developer based in Seoul, South
          Korea. Welcome to my corner of the internet. I&apos;m so happy to have
          you here!
        </p>

        <h2 className="text-3xl font-bold pt-16">
          Technologies I{` `}
          <AiFillHeart
            size={26}
            className="heartbeat inline-block align-baseline "
            color="red"
          />
        </h2>
        <div className="flex flex-wrap gap-2 pt-4 ">
          <Tag text="Next.js" />
          <Tag text="Tailwindcss" />
          <Tag text="TypeScript" />
          <Tag text="JavaScript" />
          <Tag text="Golang" />
          <Tag text="Rust" />
          <Tag text="HTTP/2" />
          <Tag text="HTTPS" />
          <Tag text="Linux" />
          <Tag text="Git" />
          <Tag text="Python" />
          <Tag text="Docker" />
          <Tag text="Kubernetes" />
          <Tag text="GraphQL" />
          <Tag text="Discord.js" />
          <Tag text="..." />
        </div>

        <div className="pt-8  prose dark:prose-light  prose dark:prose-light">
          <div className=" ">
            <h3 className="">Work Experience</h3>
            <ul className="">
              <li>
                <a href="https://fosshost.org">Fosshost</a> - TechOps Volunteer
              </li>
              <li>
                <a className=" text-amber" href="https://vignetteapp.org">
                  Vignette
                </a>
                {` `}- Web Developer / Community Relations / Infrastructure
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
