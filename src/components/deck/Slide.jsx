'use client'

import clsx from 'clsx'
import Image from 'next/image'

// A single slide frame that adapts to content height on mobile, full viewport on desktop.
// `tone` controls light/dark; content is centered with consistent padding.
// Note: backgroundImage and backgroundColor are handled by DeckShell, not here
export function Slide({ children, tone = 'light', className, padded = true, footer = true, dense = false }) {
  const dark = tone === 'dark'
  
  return (
    <section
      className={clsx(
        'relative flex w-full flex-col overflow-hidden',
        'min-h-[100dvh] lg:h-[100dvh]',
        dark ? 'text-white' : 'text-neutral-950',
        className,
      )}
    >
      <div
        className={clsx(
          'relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center',
          padded && (dense ? 'px-4 py-8 sm:px-6 sm:py-12 lg:px-12' : 'px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-20'),
        )}
      >
        {children}
      </div>
      {footer ? (
        <div
          className={clsx(
            'pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-center justify-between px-4 pb-20 pt-4 text-[11px] tracking-wide sm:px-6 sm:pb-16 lg:px-10',
            dark ? 'text-neutral-500' : 'text-neutral-400',
          )}
        >
          <span className="font-display font-semibold">KAM Coastal</span>
          <span className="hidden sm:inline">CONFIDENTIAL &amp; PROPRIETARY</span>
        </div>
      ) : null}
      
      {/* Mobile swipe indicator */}
      <div className={clsx(
        'pointer-events-none absolute inset-x-0 bottom-4 z-10 flex items-center justify-center gap-2 lg:hidden',
        dark ? 'text-white/40' : 'text-neutral-400',
      )}>
        <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-xs font-medium">Swipe to navigate</span>
        <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </section>
  )
}
