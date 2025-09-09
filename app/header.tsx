'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-brand-700 to-brand-400 dark:from-brand-400 dark:to-brand-300">
          Nguyễn Đặng Quang Phúc
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-brand-700/80 dark:text-brand-300/80"
          delay={0.5}
        >
          Data Scientist | AI Engineer
        </TextEffect>
      </div>
    </header>
  )
}
