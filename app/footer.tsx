'use client'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { TextLoop } from '@/components/ui/text-loop'
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const THEMES_OPTIONS = [
	{
		label: 'Light',
		id: 'light',
		icon: <SunIcon className="h-4 w-4" />,
	},
	{
		label: 'Dark',
		id: 'dark',
		icon: <MoonIcon className="h-4 w-4" />,
	},
	{
		label: 'System',
		id: 'system',
		icon: <MonitorIcon className="h-4 w-4" />,
	},
]

function ThemeSwitch() {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	return (
		<AnimatedBackground
			className="pointer-events-none rounded-lg bg-brand-100/70 dark:bg-brand-600/30"
			defaultValue={theme}
			transition={{
				type: 'spring',
				bounce: 0,
				duration: 0.2,
			}}
			enableHover={false}
			onValueChange={(id) => {
				setTheme(id as string)
			}}
		>
			{THEMES_OPTIONS.map((theme) => {
				return (
					<button
						key={theme.id}
						className="inline-flex h-7 w-7 items-center justify-center text-zinc-600 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-brand-800 dark:text-zinc-400 dark:data-[checked=true]:text-brand-200"
						type="button"
						aria-label={`Switch to ${theme.label} theme`}
						data-id={theme.id}
					>
						{theme.icon}
					</button>
				)
			})}
		</AnimatedBackground>
	)
}

export function Footer() {
	return (
		<footer className="my-24">
			<p className="text-sm text-zinc-600 dark:text-zinc-400">
				© 2025 Nguyễn Đặng Quang Phúc. All rights reserved.
			</p>
		</footer>
	)
}
