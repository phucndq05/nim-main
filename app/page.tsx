'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import Image from 'next/image'
import {
  PROJECTS,
  EMAIL,
  SOCIAL_LINKS,
} from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectVideoProps = {
  src?: string // Thêm ? để cho phép undefined
}

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-white p-1 ring-1 ring-brand-200/60 ring-inset dark:bg-zinc-950 dark:ring-brand-400/40">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-brand-50 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-brand-600 hover:text-white dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-brand-500"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {/* Intro Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-center">
          <div className="flex-1">
            <p className="text-zinc-600 dark:text-zinc-400">
              Data Scientist and AI Engineer passionate about machine learning and data analysis. 
              Currently pursuing my degree at University of Information Technology – VNUHCM. 
              Focused on developing ML models and AI applications.
            </p>
          </div>
          <div className="relative h-40 w-40 shrink-0">
            {/* Rotating pastel LED ring */}
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,theme(colors.brand.400),theme(colors.brand.200),theme(colors.brand.600),theme(colors.brand.400))] animate-[spin_4s_linear_infinite]" />
            {/* Avatar container (cuts out inner area to form the ring) */}
            <div className="absolute inset-[5px] overflow-hidden rounded-full bg-white ring-1 ring-brand-200/60 dark:bg-zinc-950 dark:ring-brand-400/30">
              <Image
                src="/images/avatar.jpeg"
                alt="Nguyễn Đặng Quang Phúc"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium text-brand-700 dark:text-brand-300">🚀 Projects | プロジェクト</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <div key={project.name} className="space-y-2">
              {project.video && ( // Chỉ render khi có video
                <div className="relative rounded-2xl bg-brand-50/40 p-1 ring-1 ring-brand-200/60 ring-inset dark:bg-zinc-900/30 dark:ring-brand-400/40">
                  <ProjectVideo src={project.video} />
                </div>
              )}
              <div className="px-1">
                <a
                  className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                  href={project.link}
                  target="_blank"
                >
                  {project.name}
                  <span className="absolute bottom-0.5 left-0 block h-[2px] w-full max-w-0 bg-brand-600 transition-all duration-200 group-hover:max-w-full dark:bg-brand-400"></span>
                </a>
                <p className="text-base text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium text-brand-700 dark:text-brand-300">📜 Certifications | 資格</h3>
        <div className="flex flex-col space-y-2">
          <div className="relative overflow-hidden rounded-2xl bg-brand-50/60 p-4 ring-1 ring-brand-200/60 dark:bg-zinc-900/30 dark:ring-brand-400/30">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <h4 className="font-normal dark:text-zinc-100">Japanese Language</h4>
                <ul className="mt-2 text-zinc-600 dark:text-zinc-400">
                  <li>JLPT N3 (July 2025)</li>
                  <li>Japrise A2 High (July 2025)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-normal dark:text-zinc-100">Technical</h4>
                <ul className="mt-2 text-zinc-600 dark:text-zinc-400">
                  <li>Google AI Essentials - Coursera (July 2025)</li>
                  <li>Google Prompting Essentials - Coursera (August 2025)</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* CODELEARN Certifications */}
          <div className="relative overflow-hidden rounded-2xl bg-brand-50/60 p-4 ring-1 ring-brand-200/60 dark:bg-zinc-900/30 dark:ring-brand-400/30">
            <h4 className="font-normal dark:text-zinc-100">CODELEARN Certifications</h4>
            <ul className="mt-2 text-zinc-600 dark:text-zinc-400">
              <li>Computer Networks Fundamentals (May 2021)</li>
              <li>Computer Software Fundamentals (May 2021)</li>
              <li>C++ Programming Basics (June 2021)</li>
              <li>Python Fundamentals (September 2021)</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Tech Skills Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium text-brand-700 dark:text-brand-300">🧰 Tech Skills | 技術スタック</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-4">
            <div>
              <h4 className="flex items-center font-normal dark:text-zinc-100">
                <span className="mr-2">👨‍💻</span> Programming
              </h4>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Python &nbsp; C++
              </p>
            </div>
            
            <div>
              <h4 className="flex items-center font-normal dark:text-zinc-100">
                <span className="mr-2">📊</span> Data & ML
              </h4>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Pandas &nbsp; NumPy &nbsp; scikit-learn &nbsp; Matplotlib &nbsp; Seaborn &nbsp; Plotly
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="flex items-center font-normal dark:text-zinc-100">
                <span className="mr-2">🌐</span> Web / Backend
              </h4>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Flask &nbsp; HTML5 &nbsp; CSS3
              </p>
            </div>
            
            <div>
              <h4 className="flex items-center font-normal dark:text-zinc-100">
                <span className="mr-2">🗄️</span> Databases
              </h4>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Microsoft SQL Server
              </p>
            </div>
            
            <div>
              <h4 className="flex items-center font-normal dark:text-zinc-100">
                <span className="mr-2">🛠️</span> Tools & Platforms
              </h4>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Git
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Connect Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium text-brand-700 dark:text-brand-300">📫 Connect | 連絡先</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
